---
sidebar_label: RouteRequestOptions
sidebar_position: 5
description: "Options of Navigation.requestRoutes. RouteRequestOptions API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/Route.ts
---

{/* Generated from rnmapbox/navigation/src/Route.ts by `yarn docs`. Don't edit. */}

# RouteRequestOptions

```ts
type RouteRequestOptions = object;
```

Defined in: [src/Route.ts:29](https://github.com/rnmapbox/navigation/blob/v0.1.0/src/Route.ts#L29)

Options of [Navigation.requestRoutes](../Core/Navigation.md#requestroutes).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="alternatives"></a> `alternatives?` | `boolean` | Also return alternative routes. Defaults to `false`. |
| <a id="exclude"></a> `exclude?` | `string`[] | Road classes to avoid, e.g. `['toll', 'ferry']`. |
| <a id="language"></a> `language?` | `string` | Language of instructions, e.g. `en` or `de-DE`. |
| <a id="profile"></a> `profile?` | `"driving-traffic"` \| `"driving"` \| `"walking"` \| `"cycling"` | Mapbox Directions profile. Defaults to `driving-traffic`. |
| <a id="units"></a> `units?` | `"metric"` \| `"imperial"` | Unit of the distances in voice instructions. |
| <a id="waypoints"></a> `waypoints` | [`Waypoint`](Waypoint.md)[] | Origin first, destination last. |
