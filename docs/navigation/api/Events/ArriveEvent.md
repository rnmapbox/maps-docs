---
sidebar_label: ArriveEvent
sidebar_position: 1
description: "From Navigation.addArriveListener and onArrive. ArriveEvent API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/specs/NativeRNMBXNavigationModule.ts
---

{/* Generated from rnmapbox/navigation/src/specs/NativeRNMBXNavigationModule.ts by `yarn docs`. Don't edit. */}

# ArriveEvent

```ts
type ArriveEvent = object;
```

Defined in: [src/specs/NativeRNMBXNavigationModule.ts:110](https://github.com/rnmapbox/navigation/blob/v0.1.0/src/specs/NativeRNMBXNavigationModule.ts#L110)

From [Navigation.addArriveListener](../Core/Navigation.md#addarrivelistener) and `onArrive`.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="isfinaldestination"></a> `isFinalDestination` | `boolean` | The waypoint is the route's last one. |
| <a id="waypointindex"></a> `waypointIndex` | `CodegenTypes.Int32` | Index in the route's waypoints, origin being 0. |
