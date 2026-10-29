---
sidebar_label: StartFreeDriveOptions
sidebar_position: 7
description: "Options of Navigation.startFreeDrive. StartFreeDriveOptions API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/Navigation.ts
---

{/* Generated from rnmapbox/navigation/src/Navigation.ts by `yarn docs`. Don't edit. */}

# StartFreeDriveOptions

```ts
type StartFreeDriveOptions = object;
```

Defined in: [src/Navigation.ts:50](https://github.com/rnmapbox/navigation/blob/v0.1.1/src/Navigation.ts#L50)

Options of [Navigation.startFreeDrive](Navigation.md#startfreedrive).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="foregroundservice"></a> `foregroundService?` | `boolean` | Android: keep tracking in the background, with the Navigation SDK's foreground service and its notification. Without it, Android throttles location updates in the background. Ignored when simulating and on iOS. |
| <a id="simulatedlocation"></a> `simulatedLocation?` | [`Position`](../Routes/Position.md) | Simulate the device standing still at this position instead of using its location. |
