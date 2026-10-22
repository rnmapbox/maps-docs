---
sidebar_label: Lane
sidebar_position: 2
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# Lane

```ts
type Lane = object;
```

A lane at the next maneuver, in `lanes` of [RouteProgressEvent](RouteProgressEvent.md).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="activedirection"></a> `activeDirection` | `string` | The indication to follow in this lane, e.g. "right". Empty if unknown or not valid. |
| <a id="indications"></a> `indications` | `ReadonlyArray`\<`string`\> | E.g. `["straight", "right"]`. |
| <a id="valid"></a> `valid` | `boolean` | The lane can be used to complete the maneuver. |
