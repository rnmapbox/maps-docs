---
sidebar_label: BannerComponent
sidebar_position: 2
description: "A piece of a banner instruction, see the Mapbox Directions banner_instructions components."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/specs/NativeRNMBXNavigationModule.ts
---

{/* Generated from rnmapbox/navigation/src/specs/NativeRNMBXNavigationModule.ts by `yarn docs`. Don't edit. */}

# BannerComponent

```ts
type BannerComponent = object;
```

Defined in: [src/specs/NativeRNMBXNavigationModule.ts:26](https://github.com/rnmapbox/navigation/blob/v0.1.0-alpha.3/src/specs/NativeRNMBXNavigationModule.ts#L26)

A piece of a banner instruction, see the Mapbox Directions `banner_instructions` components.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="imageurl"></a> `imageUrl` | `string` | PNG of the road shield. Empty if none. |
| <a id="text"></a> `text` | `string` | For a road shield, its route number, e.g. "I 80". |
| <a id="type"></a> `type` | `string` | "text", "icon" (a road shield), "delimiter", "exit" or "exit-number". |
