---
sidebar_label: Lane
sidebar_position: 3
description: "A lane at the next maneuver, in lanes of RouteProgressEvent. Lane API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/specs/NativeRNMBXNavigationModule.ts
---

{/* Generated from rnmapbox/navigation/src/specs/NativeRNMBXNavigationModule.ts by `yarn docs`. Don't edit. */}

# Lane

```ts
type Lane = object;
```

Defined in: [src/specs/NativeRNMBXNavigationModule.ts:12](https://github.com/rnmapbox/navigation/blob/v0.1.0-alpha.3/src/specs/NativeRNMBXNavigationModule.ts#L12)

A lane at the next maneuver, in `lanes` of [RouteProgressEvent](RouteProgressEvent.md).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="activedirection"></a> `activeDirection` | `string` | The indication to follow in this lane, e.g. "right". Empty if unknown or not valid. |
| <a id="indications"></a> `indications` | `ReadonlyArray`\<`string`\> | E.g. `["straight", "right"]`. |
| <a id="valid"></a> `valid` | `boolean` | The lane can be used to complete the maneuver. |
