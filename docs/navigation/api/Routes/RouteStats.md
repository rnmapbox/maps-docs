---
sidebar_label: RouteStats
sidebar_position: 7
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# RouteStats

```ts
type RouteStats = object;
```

From [Navigation.getRouteStats](../Core/Navigation.md#getroutestats).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="collected"></a> `collected` | `number` | Routes the garbage collector released. |
| <a id="live"></a> `live` | `number` | Routes JS holds that weren't released yet. |
| <a id="released"></a> `released` | `number` | Routes released with `release()`. |
