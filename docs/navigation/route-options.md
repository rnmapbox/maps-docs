---
id: route-options
sidebar_position: 4
title: "Route options: waypoints, vehicle limits and departure time"
sidebar_label: Route options
description: "Request routes with @rnmapbox/navigation: profiles, silent and curbside waypoints, roads and points to avoid, vehicle height, width and weight, and departure or arrival time."
---

`Navigation.requestRoutes` takes the waypoints and the options below, and sends them to the Mapbox Directions API:

```tsx
import Navigation from '@rnmapbox/navigation';

const { main, alternatives } = await Navigation.requestRoutes({
  waypoints: [
    [-122.39726, 37.79205],
    { coordinate: [-122.40014, 37.79405], silent: true },
    { coordinate: [-122.39351, 37.79554], name: 'Ferry Building', approach: 'curb' },
  ],
  profile: 'driving',
  alternatives: true,
  exclude: ['toll', 'ferry'],
  maxHeight: 3.2,
  departAt: '2026-11-02T08:30',
  language: 'de-DE',
  units: 'metric',
});
```

Release the routes you don't keep, see [Routes](getting-started.md#routes).

## Waypoints

A waypoint is a `[longitude, latitude]` position, or an object with `coordinate` and these options:

| Option     | Description                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------- |
| `name`     | Shown by the navigation UI, e.g. on arrival.                                                        |
| `silent`   | Pass through without stopping. A silent waypoint doesn't end a leg, so there's no arrival at it. The origin and the destination can't be silent. |
| `approach` | `'curb'` arrives on the driving side of the road, e.g. the right in right-hand traffic. Defaults to `'unrestricted'`, either side. |

Each non-silent waypoint after the origin ends a leg. See [Multi-stop routes](guidance-controls.md#multi-stop-routes) for what guidance does when it arrives.

## Options

| Option          | Profiles                         | Description                                                                 |
| --------------- | -------------------------------- | --------------------------------------------------------------------------- |
| `profile`       |                                  | `'driving-traffic'` (default), `'driving'`, `'walking'` or `'cycling'`.     |
| `alternatives`  | all                              | Also return alternative routes. Defaults to `false`.                        |
| `exclude`       | all                              | Road classes to avoid, e.g. `['toll', 'ferry']`.                            |
| `excludePoints` | `driving`, `driving-traffic`     | Up to 50 positions. Each is snapped to the nearest road, and the route avoids that road segment where it can. |
| `maxHeight`     | `driving`, `driving-traffic`     | Vehicle height in meters, 0 to 10. The API assumes 1.6 if unset.            |
| `maxWidth`      | `driving`, `driving-traffic`     | Vehicle width in meters, 0 to 10. The API assumes 1.9 if unset.             |
| `maxWeight`     | `driving`, `driving-traffic`     | Vehicle weight in metric tons, 0 to 100. The API assumes 2.5 if unset.      |
| `departAt`      | `driving`, `driving-traffic`     | `YYYY-MM-DDThh:mm` in the local time at the origin. The route uses predicted traffic and timed restrictions at that time. |
| `arriveBy`      | `driving`                        | `YYYY-MM-DDThh:mm` in the local time at the destination.                    |
| `language`      | all                              | Language of the instructions, e.g. `en` or `de-DE`.                         |
| `units`         | all                              | `'metric'` or `'imperial'`, for the distances in voice instructions.        |

`requestRoutes` checks the options before sending the request, because the Directions API or the SDK would ignore some of them silently. It rejects with `code: 'invalid_options'` for fewer than two waypoints, a silent origin or destination, an option the profile doesn't support, a value out of range, or a time that isn't `YYYY-MM-DDThh:mm`.

```tsx
try {
  await Navigation.requestRoutes({ waypoints, profile: 'walking', maxHeight: 3 });
} catch (error) {
  // error.code === 'invalid_options': maxHeight needs the driving or driving-traffic profile
}
```

## Rerouting

When the user leaves a route from `requestRoutes`, guidance requests a new one, and `addRouteChangeListener` reports it with `reason: 'reroute'`. `Navigation.setRerouteEnabled(false)` turns that off.

- Android applies it at once, also during guidance.
- iOS reads it only when the navigation session is created, on the first route request or guidance start. Call it before those, e.g. next to `setAccessToken`. A later call that changes the value has no effect on iOS and logs a warning.

Routes from [Map Matching](map-matching.md) are never rerouted.

See [`RouteRequestOptions`](api/Routes/RouteRequestOptions.md) and [`Waypoint`](api/Routes/Waypoint.md) in the API reference.
