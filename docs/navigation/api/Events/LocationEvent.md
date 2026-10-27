---
sidebar_label: LocationEvent
sidebar_position: 4
description: "The location snapped to the road or the route. LocationEvent API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/specs/NativeRNMBXNavigationModule.ts
---

{/* Generated from rnmapbox/navigation/src/specs/NativeRNMBXNavigationModule.ts by `yarn docs`. Don't edit. */}

# LocationEvent

```ts
type LocationEvent = object;
```

Defined in: [src/specs/NativeRNMBXNavigationModule.ts:92](https://github.com/rnmapbox/navigation/blob/v0.1.0-alpha.3/src/specs/NativeRNMBXNavigationModule.ts#L92)

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
