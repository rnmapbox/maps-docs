---
sidebar_label: MatchedRouteRequestOptions
sidebar_position: 3
description: "Options of Navigation.requestMatchedRoutes. MatchedRouteRequestOptions API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/Route.ts
---

{/* Generated from rnmapbox/navigation/src/Route.ts by `yarn docs`. Don't edit. */}

# MatchedRouteRequestOptions

```ts
type MatchedRouteRequestOptions = object;
```

Defined in: [src/Route.ts:165](https://github.com/rnmapbox/navigation/blob/v0.1.1/src/Route.ts#L165)

Options of [Navigation.requestMatchedRoutes](../Core/Navigation.md#requestmatchedroutes).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="coordinates"></a> `coordinates` | [`Position`](Position.md)[] | The path to follow, 2 to 100 coordinates in order. Each is snapped to the nearest road within its radius, so a sparse trace works. |
| <a id="language"></a> `language?` | `string` | Language of instructions, e.g. `en` or `de-DE`. |
| <a id="profile"></a> `profile?` | [`RouteRequestOptions`](RouteRequestOptions.md)\[`"profile"`\] | Mapbox Map Matching profile. Defaults to `driving-traffic`. |
| <a id="radiuses"></a> `radiuses?` | `number`[] | Meters each coordinate may be away from the road, one per coordinate, 0 to 50. The API defaults to 5. |
| <a id="units"></a> `units?` | `"metric"` \| `"imperial"` | Unit of the distances in voice instructions. |
| <a id="waypointindices"></a> `waypointIndices?` | `number`[] | Indices of the `coordinates` that are waypoints: the route is split into legs there and guidance announces the arrival. Must be ascending and include the first and last index. Defaults to the first and last coordinate. |
