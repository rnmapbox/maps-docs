---
sidebar_label: SpeedLimit
sidebar_position: 6
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# SpeedLimit

```ts
type SpeedLimit = object;
```

Posted speed limit, in [LocationEvent](LocationEvent.md).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="sign"></a> `sign` | `string` | "mutcd" (US-style rectangle) or "vienna" (red circle). |
| <a id="speed"></a> `speed` | `number` | In `unit`. |
| <a id="unit"></a> `unit` | `string` | "km/h" or "mph". |
