---
sidebar_label: RouteLeg
sidebar_position: 4
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# RouteLeg

```ts
type RouteLeg = object;
```

The part of a route between two consecutive waypoints.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="distance"></a> `distance` | `number` | Meters. |
| <a id="expectedtraveltime"></a> `expectedTravelTime` | `number` | Seconds. |
| <a id="stepcount"></a> `stepCount` | `number` | Same as `steps.length`. |
| <a id="steps"></a> `steps` | [`RouteStep`](RouteStep.md)[] | - |
| <a id="summary"></a> `summary` | `string` | Names of the main roads, e.g. "Market Street, Embarcadero". |
