---
id: map-matching
sidebar_position: 5
title: "Guide along your own path with Map Matching"
sidebar_label: Map Matching
description: "Turn a list of coordinates, such as a tour or a delivery run, into a navigable route with the Mapbox Map Matching API and @rnmapbox/navigation."
---

`Navigation.requestMatchedRoutes` snaps a path the app defines, such as a tour or a delivery run, to roads with the [Mapbox Map Matching API](https://docs.mapbox.com/api/navigation/map-matching/), and resolves with a route along it. Use it when the route has to follow your path, rather than the fastest route between the waypoints that `requestRoutes` returns.

```tsx
import Navigation, { type Position } from '@rnmapbox/navigation';

const TOUR: Position[] = [
  [-122.39726, 37.79205],
  [-122.39612, 37.79310],
  [-122.39480, 37.79420],
  [-122.39351, 37.79554],
];

const { main } = await Navigation.requestMatchedRoutes({
  coordinates: TOUR,
  waypointIndices: [0, 2, TOUR.length - 1],
});
await Navigation.startActiveGuidance(main, { simulate: true });
```

The route works with `previewRoute` and `startActiveGuidance` like one from `requestRoutes`, and holds native memory the same way: `release()` it when you're done. `alternatives` is always empty.

## Options

| Option            | Description                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| `coordinates`     | The path, 2 to 100 positions in order. Each is snapped to the nearest road within its radius, so a sparse trace works. |
| `profile`         | `'driving-traffic'` (default), `'driving'`, `'walking'` or `'cycling'`.                         |
| `waypointIndices` | Indices of the `coordinates` that are waypoints: the route is split into legs there, and guidance announces the arrival. Ascending, including the first and last index. Defaults to the first and last coordinate. |
| `radiuses`        | Meters each coordinate may be away from the road, one per coordinate, 0 to 50. The API defaults to 5. |
| `language`        | Language of the instructions, e.g. `en` or `de-DE`.                                             |
| `units`           | `'metric'` or `'imperial'`, for the distances in voice instructions.                            |

It rejects without sending a request if the options break these limits, and with `code: 'no_single_match'` if the API can only match the coordinates as several disconnected pieces, e.g. across a gap with no road. Add coordinates in the gap, or raise `radiuses` there.

## Off route

Neither SDK reroutes a matched route, whatever `setRerouteEnabled` says. When the user leaves it, `addOffRouteListener` reports `true` and guidance waits for them to return to the route.

## Platform notes

On Android this uses the SDK's `requestMapMatching`, which the Navigation SDK marks as experimental, so its behavior may change in minor releases.

See [`MatchedRouteRequestOptions`](api/Routes/MatchedRouteRequestOptions.md) in the API reference.
