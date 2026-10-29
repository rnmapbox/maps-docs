---
id: navigation-view
sidebar_position: 9
title: "NavigationView: drop-in turn-by-turn navigation UI"
sidebar_label: NavigationView
description: "The Mapbox Navigation SDK's full-screen turn-by-turn UI for React Native on iOS and Android, with maneuver banner, lanes, speed limit and trip progress."
---

`<NavigationView>` is a full-screen turn-by-turn navigation UI: `NavigationViewController` from `MapboxNavigationUIKit` on iOS, and an equivalent built from the Navigation SDK UI components on Android (maneuver banner with lanes and shields, speed limit, trip progress, mute, overview, recenter and end buttons).

On iOS it needs `audio` in `UIBackgroundModes`, which the Expo config plugin adds; in a bare app add it to `Info.plist`, see [Install](install.md).

```tsx
import { NavigationView } from '@rnmapbox/navigation';

<NavigationView
  style={{ flex: 1 }}
  waypoints={[
    [-122.39726, 37.79205],
    { coordinate: [-122.39351, 37.79554], name: 'Ferry Building' },
  ]}
  simulate
  mute={muted}
  onRouteProgress={(event) => console.log(event.distanceRemaining)}
  onArrive={({ waypointIndex, isFinalDestination }) => {}}
  onCancel={() => close()}
  onError={({ code, message }) => {}}
/>
```

## Props

See [`NavigationViewProps`](api/Components/NavigationViewProps.md) in the API reference.

| Prop              | Type                                         | Description                                                                         |
| ----------------- | -------------------------------------------- | ----------------------------------------------------------------------------------- |
| `route`           | `Route`                                      | A route from `requestRoutes`. Keep it unreleased while it's passed to the view.     |
| `waypoints`       | `Waypoint[]`                                 | Used without `route`: the view requests a route through them, origin first, and releases it on unmount. |
| `simulate`        | `boolean`                                    | Drives the route with simulated locations. Read when guidance starts. Defaults to `false`. |
| `mute`            | `boolean`                                    | Mutes voice instructions. The view's own mute button also toggles them. Defaults to `false`. |
| `styleURL`        | `string`                                     | Map style by day. Defaults to Mapbox Standard. See [Styling](styling.md#map-styles). |
| `nightStyleURL`   | `string`                                     | Map style while the system is in dark mode. Defaults to `styleURL`, or without it to Standard's night preset. |
| `style`           | `StyleProp<ViewStyle>`                       |                                                                                     |
| `testID`          | `string`                                     |                                                                                     |
| `onRouteProgress` | `(event: RouteProgressEvent) => void`        | Same event as `addRouteProgressListener`.                                           |
| `onArrive`        | `(event: ArriveEvent) => void`               | `{ waypointIndex, isFinalDestination }`; `waypointIndex` counts the origin as 0.    |
| `onCancel`        | `() => void`                                 | The user ended the trip. Guidance has stopped; unmount the view.                    |
| `onError`         | `(error: NavigationViewError) => void`       | `{ code, message }`, e.g. `route_request_failed`, `route_released`, `start_failed`. |

## Session

`<NavigationView>` uses the app's single navigation session:

- Mounting it, or giving it a new route, starts guidance along that route and replaces any other active guidance. Navigation maps show its route and puck too.
- Unmounting it, or the user ending the trip, stops guidance.
- `addRouteProgressListener` and `addCameraStateListener` also report its guidance.
- Show one `NavigationView` at a time. On iOS it's embedded as a child of the nearest view controller.

Android `<NavigationView>` has no end-of-route or feedback UI, no night colors for its UI (only the map switches), no road name label, and doesn't show reroutes as such. For the same UI on both platforms, see [`<RNNavigationView>`](rn-navigation-view.md).
