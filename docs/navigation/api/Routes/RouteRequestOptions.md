---
sidebar_label: RouteRequestOptions
sidebar_position: 6
description: "Options of Navigation.requestRoutes. RouteRequestOptions API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/Route.ts
---

{/* Generated from rnmapbox/navigation/src/Route.ts by `yarn docs`. Don't edit. */}

# RouteRequestOptions

```ts
type RouteRequestOptions = object;
```

Defined in: [src/Route.ts:45](https://github.com/rnmapbox/navigation/blob/v0.1.1/src/Route.ts#L45)

Options of [Navigation.requestRoutes](../Core/Navigation.md#requestroutes).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="alternatives"></a> `alternatives?` | `boolean` | Also return alternative routes. Defaults to `false`. |
| <a id="arriveby"></a> `arriveBy?` | `string` | Desired arrival time as `YYYY-MM-DDThh:mm`, in the local time at the destination. `driving` only. |
| <a id="departat"></a> `departAt?` | `string` | Departure time as `YYYY-MM-DDThh:mm`, in the local time at the origin. The route and its travel time take predicted traffic and timed restrictions at that time into account. `driving` and `driving-traffic` only. |
| <a id="exclude"></a> `exclude?` | `string`[] | Road classes to avoid, e.g. `['toll', 'ferry']`. |
| <a id="excludepoints"></a> `excludePoints?` | [`Position`](Position.md)[] | Locations to avoid, at most 50. Each is snapped to the nearest road, and the route avoids that road segment where it can. `driving` and `driving-traffic` only. |
| <a id="language"></a> `language?` | `string` | Language of instructions, e.g. `en` or `de-DE`. |
| <a id="maxheight"></a> `maxHeight?` | `number` | Vehicle height in meters, 0 to 10. The route avoids roads with a lower height limit. The Directions API assumes 1.6 if unset. `driving` and `driving-traffic` only. |
| <a id="maxweight"></a> `maxWeight?` | `number` | Vehicle weight in metric tons, 0 to 100. The route avoids roads with a lower weight limit. The Directions API assumes 2.5 if unset. `driving` and `driving-traffic` only. |
| <a id="maxwidth"></a> `maxWidth?` | `number` | Vehicle width in meters, 0 to 10. The route avoids roads with a lower width limit. The Directions API assumes 1.9 if unset. `driving` and `driving-traffic` only. |
| <a id="profile"></a> `profile?` | `"driving-traffic"` \| `"driving"` \| `"walking"` \| `"cycling"` | Mapbox Directions profile. Defaults to `driving-traffic`. |
| <a id="units"></a> `units?` | `"metric"` \| `"imperial"` | Unit of the distances in voice instructions. |
| <a id="waypoints"></a> `waypoints` | [`Waypoint`](Waypoint.md)[] | Origin first, destination last. |
