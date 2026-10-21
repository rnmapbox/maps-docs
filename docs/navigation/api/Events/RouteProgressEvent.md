---
sidebar_label: RouteProgressEvent
sidebar_position: 5
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# RouteProgressEvent

```ts
type RouteProgressEvent = object;
```

From [Navigation.addRouteProgressListener](../Core/Navigation.md#addrouteprogresslistener) and `onRouteProgress`.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="distanceremaining"></a> `distanceRemaining` | `number` | Meters. |
| <a id="distancetraveled"></a> `distanceTraveled` | `number` | Meters. |
| <a id="durationremaining"></a> `durationRemaining` | `number` | Seconds. |
| <a id="fractiontraveled"></a> `fractionTraveled` | `number` | 0..1 |
| <a id="lanes"></a> `lanes` | `ReadonlyArray`\<[`Lane`](Lane.md)\> | Lanes at the next maneuver, left to right. Empty if the route has no lane data there. |
| <a id="legindex"></a> `legIndex` | `CodegenTypes.Int32` | Index of the current leg, in [Route](../Routes/Route.md) `legs`. |
| <a id="maneuverinstruction"></a> `maneuverInstruction` | `string` | Primary banner text of the next maneuver, e.g. "Turn right onto Market Street". |
| <a id="maneuvermodifier"></a> `maneuverModifier` | `string` | Mapbox Directions maneuver modifier, e.g. "right", "slight left". Empty if unknown. |
| <a id="maneuvertype"></a> `maneuverType` | `string` | Mapbox Directions maneuver type, e.g. "turn", "arrive". Empty if unknown. |
| <a id="secondaryinstruction"></a> `secondaryInstruction` | `string` | Secondary banner text, e.g. the destination of an exit. Empty if none. |
| <a id="stepdistanceremaining"></a> `stepDistanceRemaining` | `number` | Meters to the next maneuver. |
| <a id="stepindex"></a> `stepIndex` | `CodegenTypes.Int32` | Index of the current step in the current leg. |
| <a id="subinstruction"></a> `subInstruction` | `string` | Sub banner text, e.g. "Then turn left". Empty if none or if the sub banner shows lanes. |
