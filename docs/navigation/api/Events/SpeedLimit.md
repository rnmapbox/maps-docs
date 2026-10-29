---
sidebar_label: SpeedLimit
sidebar_position: 7
description: "Posted speed limit, in LocationEvent. SpeedLimit API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/specs/NativeRNMBXNavigationModule.ts
---

{/* Generated from rnmapbox/navigation/src/specs/NativeRNMBXNavigationModule.ts by `yarn docs`. Don't edit. */}

# SpeedLimit

```ts
type SpeedLimit = object;
```

Defined in: [src/specs/NativeRNMBXNavigationModule.ts:78](https://github.com/rnmapbox/navigation/blob/v0.1.1/src/specs/NativeRNMBXNavigationModule.ts#L78)

Posted speed limit, in [LocationEvent](LocationEvent.md).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="sign"></a> `sign` | `string` | "mutcd" (US-style rectangle) or "vienna" (red circle). |
| <a id="speed"></a> `speed` | `number` | In `unit`. |
| <a id="unit"></a> `unit` | `string` | "km/h" or "mph". |
