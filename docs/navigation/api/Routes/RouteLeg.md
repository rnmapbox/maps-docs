---
sidebar_label: RouteLeg
sidebar_position: 4
description: "The part of a route between two consecutive waypoints. RouteLeg API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/Route.ts
---

{/* Generated from rnmapbox/navigation/src/Route.ts by `yarn docs`. Don't edit. */}

# RouteLeg

```ts
type RouteLeg = object;
```

Defined in: [src/Route.ts:69](https://github.com/rnmapbox/navigation/blob/v0.1.0/src/Route.ts#L69)

The part of a route between two consecutive waypoints.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="distance"></a> `distance` | `number` | Meters. |
| <a id="expectedtraveltime"></a> `expectedTravelTime` | `number` | Seconds. |
| <a id="stepcount"></a> `stepCount` | `number` | Same as `steps.length`. |
| <a id="steps"></a> `steps` | [`RouteStep`](RouteStep.md)[] | - |
| <a id="summary"></a> `summary` | `string` | Names of the main roads, e.g. "Market Street, Embarcadero". |
