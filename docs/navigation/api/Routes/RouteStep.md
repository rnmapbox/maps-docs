---
sidebar_label: RouteStep
sidebar_position: 8
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# RouteStep

```ts
type RouteStep = object;
```

A maneuver and the road up to the next one, in `steps` of [RouteLeg](RouteLeg.md).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="distance"></a> `distance` | `number` | Meters. |
| <a id="expectedtraveltime"></a> `expectedTravelTime` | `number` | Seconds. |
| <a id="instruction"></a> `instruction` | `string` | E.g. "Turn right onto Market Street". |
| <a id="maneuvermodifier"></a> `maneuverModifier` | `string` | Mapbox Directions maneuver modifier, e.g. "right". Empty if none. |
| <a id="maneuvertype"></a> `maneuverType` | `string` | Mapbox Directions maneuver type, e.g. "turn", "arrive". |
| <a id="name"></a> `name` | `string` | Name of the road the step is on. Empty if unnamed. |
