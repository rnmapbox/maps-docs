---
sidebar_label: RouteRequestOptions
sidebar_position: 5
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# RouteRequestOptions

```ts
type RouteRequestOptions = object;
```

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
