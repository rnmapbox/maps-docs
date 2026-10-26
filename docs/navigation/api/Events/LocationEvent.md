---
sidebar_label: LocationEvent
sidebar_position: 3
description: "The location snapped to the road or the route. LocationEvent API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# LocationEvent

```ts
type LocationEvent = object;
```

The location snapped to the road or the route.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="course"></a> `course` | `number` | Degrees clockwise from north; -1 if unknown. |
| <a id="latitude"></a> `latitude` | `number` | - |
| <a id="longitude"></a> `longitude` | `number` | - |
| <a id="roadname"></a> `roadName` | `string` | Empty if unknown. |
| <a id="speed"></a> `speed` | `number` | Meters per second; -1 if unknown. |
| <a id="speedlimit"></a> `speedLimit?` | [`SpeedLimit`](SpeedLimit.md) | Missing where the road has no known speed limit. |
