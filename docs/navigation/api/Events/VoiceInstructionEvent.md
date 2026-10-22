---
sidebar_label: VoiceInstructionEvent
sidebar_position: 7
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# VoiceInstructionEvent

```ts
type VoiceInstructionEvent = object;
```

From [Navigation.addVoiceInstructionListener](../Core/Navigation.md#addvoiceinstructionlistener).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="distancealongstep"></a> `distanceAlongStep` | `number` | Meters from the start of the step at which the instruction is announced. |
| <a id="ssml"></a> `ssml` | `string` | Empty if the route has no SSML. |
| <a id="text"></a> `text` | `string` | Plain text of the instruction, e.g. "In 500 feet, turn right onto Market Street". |
