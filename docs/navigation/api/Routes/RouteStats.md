---
sidebar_label: RouteStats
sidebar_position: 7
description: "From Navigation.getRouteStats. RouteStats API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
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
