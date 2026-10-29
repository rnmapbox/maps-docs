---
sidebar_label: VoiceInstructionEvent
sidebar_position: 8
description: "From Navigation.addVoiceInstructionListener. VoiceInstructionEvent API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/specs/NativeRNMBXNavigationModule.ts
---

{/* Generated from rnmapbox/navigation/src/specs/NativeRNMBXNavigationModule.ts by `yarn docs`. Don't edit. */}

# VoiceInstructionEvent

```ts
type VoiceInstructionEvent = object;
```

Defined in: [src/specs/NativeRNMBXNavigationModule.ts:126](https://github.com/rnmapbox/navigation/blob/v0.1.1/src/specs/NativeRNMBXNavigationModule.ts#L126)

From [Navigation.addVoiceInstructionListener](../Core/Navigation.md#addvoiceinstructionlistener).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="distancealongstep"></a> `distanceAlongStep` | `number` | Meters from the start of the step at which the instruction is announced. |
| <a id="ssml"></a> `ssml` | `string` | Empty if the route has no SSML. |
| <a id="text"></a> `text` | `string` | Plain text of the instruction, e.g. "In 500 feet, turn right onto Market Street". |
