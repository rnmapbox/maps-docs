---
sidebar_label: RouteStats
sidebar_position: 8
description: "From Navigation.getRouteStats. RouteStats API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/Route.ts
---

{/* Generated from rnmapbox/navigation/src/Route.ts by `yarn docs`. Don't edit. */}

# RouteStats

```ts
type RouteStats = object;
```

Defined in: [src/Route.ts:206](https://github.com/rnmapbox/navigation/blob/v0.1.1/src/Route.ts#L206)

From [Navigation.getRouteStats](../Core/Navigation.md#getroutestats).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="collected"></a> `collected` | `number` | Routes the garbage collector released. |
| <a id="live"></a> `live` | `number` | Routes JS holds that weren't released yet. |
| <a id="released"></a> `released` | `number` | Routes released with `release()`. |
