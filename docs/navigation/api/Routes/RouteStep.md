---
sidebar_label: RouteStep
sidebar_position: 8
description: "A maneuver and the road up to the next one, in steps of RouteLeg. RouteStep API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/Route.ts
---

{/* Generated from rnmapbox/navigation/src/Route.ts by `yarn docs`. Don't edit. */}

# RouteStep

```ts
type RouteStep = object;
```

Defined in: [src/Route.ts:49](https://github.com/rnmapbox/navigation/blob/v0.1.0/src/Route.ts#L49)

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
