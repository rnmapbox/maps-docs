---
id: getting-started
sidebar_position: 3
title: "Getting started with turn-by-turn navigation in React Native"
sidebar_label: Getting started
description: "Request a route, show it on an @rnmapbox/maps map and start simulated turn-by-turn guidance with @rnmapbox/navigation in React Native."
---

Request a route, show it on a navigation map, and start simulated guidance:

```tsx
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Mapbox, { Camera, MapView } from '@rnmapbox/maps';
import Navigation, {
  NAVIGATION_MAP_VIEW_IMPL,
  NavigationViewport,
  type Position,
  type Route,
  type RouteProgressEvent,
} from '@rnmapbox/navigation';

const ACCESS_TOKEN = 'pk....';
Mapbox.setAccessToken(ACCESS_TOKEN);
Navigation.setAccessToken(ACCESS_TOKEN);

const ORIGIN: Position = [-122.39726, 37.79205]; // [longitude, latitude]
const DESTINATION: Position = [-122.39351, 37.79554];

export function NavigationScreen() {
  const [progress, setProgress] = useState<RouteProgressEvent>();

  useEffect(() => {
    const subscription = Navigation.addRouteProgressListener(setProgress);
    let route: Route | undefined;
    let cancelled = false;

    Navigation.requestRoutes({ waypoints: [ORIGIN, DESTINATION] })
      .then(({ main, alternatives }) => {
        alternatives.forEach((alternative) => alternative.release());
        route = main;
        if (cancelled) {
          main.release();
          return;
        }
        // Switches the camera to 'following'.
        return Navigation.startActiveGuidance(main, { simulate: true });
      })
      .catch((error) => console.warn(error));

    return () => {
      cancelled = true;
      subscription.remove();
      Navigation.stopNavigation();
      route?.release();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} mapViewImpl={NAVIGATION_MAP_VIEW_IMPL}>
        <Camera defaultSettings={{ centerCoordinate: ORIGIN, zoomLevel: 14 }} />
        {/* Keeps the puck and the route clear of UI drawn over the map. */}
        <NavigationViewport
          padding={{ top: 16, bottom: 120, left: 16, right: 16 }}
        />
      </MapView>
      {progress && (
        <Text>
          {progress.maneuverInstruction} in{' '}
          {Math.round(progress.stepDistanceRemaining)} m
        </Text>
      )}
    </View>
  );
}
```

`Navigation.previewRoute(route)` shows a route on navigation maps before guidance starts, and `Navigation.setCameraState('overview')` fits the rest of the route.

To guide on the device's location, pass `simulate: false` and request location permission first, see [Location permission](install.md#location-permission).

## Guidance events

Subscribe to the events you need while guidance runs. Each listener returns a subscription; `remove()` it on unmount.

```tsx
const [offRoute, setOffRoute] = useState(false);

useEffect(() => {
  const subscriptions = [
    Navigation.addArriveListener(({ waypointIndex, isFinalDestination }) => {
      if (isFinalDestination) {
        Navigation.stopNavigation();
      }
    }),
    Navigation.addOffRouteListener(setOffRoute),
    Navigation.addRouteChangeListener(({ route, reason }) => {
      // `reason` is 'reroute' or 'alternative'. Release `route` when you're done with it.
    }),
  ];
  return () => subscriptions.forEach((subscription) => subscription.remove());
}, []);
```

| Listener                      | Event                                                                                         |
| ----------------------------- | --------------------------------------------------------------------------------------------- |
| `addRouteProgressListener`    | Distances and durations remaining, and the next maneuver's banner and lanes.                  |
| `addLocationListener`         | Location snapped to the road or route, with `speed`, `course`, `roadName` and `speedLimit`.   |
| `addArriveListener`           | `{ waypointIndex, isFinalDestination }` when a waypoint is reached; the origin is index 0.    |
| `addOffRouteListener`         | `true` when the user leaves the route, `false` once guidance follows a route again.           |
| `addRouteChangeListener`      | `{ route, reason }` when guidance switches to a new `Route`, after a reroute or to an alternative. |
| `addVoiceInstructionListener` | `{ text, ssml, distanceAlongStep }`, for apps doing their own text to speech.                 |
| `addCameraStateListener`      | Camera state changes, see [Camera](#camera).                                                  |

The SDK speaks voice instructions during any guidance; `Navigation.setVoiceMuted(true)` mutes them. See the [API reference](api/index.md) for the event types.

## Routes

`requestRoutes` resolves to `{ main, alternatives }`. A `Route` is backed by the native SDK route and holds native memory:

- Its getters (`distance`, `expectedTravelTime`, `geometry`, `legs`) read a copy taken when the route was created. They're synchronous.
- `release()` frees the native route. Release the routes you don't keep, such as unused alternatives. The garbage collector releases the rest eventually, but it doesn't see the native memory, so that can take long.
- After `release()`, reading anything but `isReleased` throws an `Error` with `code: 'route_released'`, and `startActiveGuidance` and `previewRoute` reject or throw it.
- Guidance and the preview keep their own reference to the native route until `stopNavigation`, so releasing a route they use is safe.
- `Navigation.getRouteStats()` returns `{ live, released, collected }` counts, for leak checks.
- Routes don't survive a JS reload.

## Navigation maps

`<MapView mapViewImpl={NAVIGATION_MAP_VIEW_IMPL}>` is a regular `@rnmapbox/maps` map: its props, children and events keep working. The Navigation SDK also draws the route line and the puck on it and drives its camera.

There's one navigation session per app. Every navigation map shows its route, puck and camera state. Without guidance the maps show the route passed to `previewRoute`.

`<NavigationViewport>` configures the map it's a child of. Its `padding` is in points from the map's edges and ignores the safe area. It applies to `following`, `overview` and the route preview. Without it the SDK defaults apply: the safe area plus a small margin on iOS, and no padding on Android.

## Camera

| State       | Camera                                                                              |
| ----------- | ----------------------------------------------------------------------------------- |
| `following` | Follows the puck, tilted and rotated with the route. Set by `startActiveGuidance`.  |
| `overview`  | Fits the rest of the route.                                                         |
| `idle`      | Left alone, for the user's gestures and `@rnmapbox/maps` `Camera`.                  |

The state switches to `idle` when a pan, pinch, rotate, pitch or double-tap gesture happens on any navigation map, when an `@rnmapbox/maps` `Camera` moves the map from its props or `setCamera` (`defaultSettings` doesn't count), and when `stopNavigation` is called.

`addCameraStateListener` reports every change, and `getCameraState` returns the current state. Call `setCameraState('following')` to recenter.

- On Android a `Camera` move with `animationDuration: 0` doesn't switch the state, and the navigation camera takes the map back at the next location update. Animate the move, or call `setCameraState('idle')` first.
- `Camera` `followUserLocation` and the navigation camera both drive the map. Don't combine them.

After `stopNavigation`, the route and the puck are removed and the camera eases back to north-up, without tilt or padding.
