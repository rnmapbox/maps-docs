---
sidebar_label: Route
sidebar_position: 1
description: "A route from Navigation.requestRoutes, backed by the native SDK route. Route API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# Route

A route from [Navigation.requestRoutes](../Core/Navigation.md#requestroutes), backed by the native SDK route.
The getters read a copy taken when the route was created, so they're synchronous.
Routes don't survive a JS reload.

Call `release()` when you're done with it; the garbage collector only releases it eventually. Reading any
property but `isReleased` after `release()` throws an error with `code: 'route_released'`.
Guidance and the route preview keep their own reference, so releasing a route they use doesn't affect them.

## Methods

### release()

```ts
release(): void;
```

Frees the native route. Calling it again does nothing.

#### Returns

`void`

## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="distance"></a> `distance` | `readonly` | `number` | Meters. |
| <a id="expectedtraveltime"></a> `expectedTravelTime` | `readonly` | `number` | Seconds. |
| <a id="geometry"></a> `geometry` | `readonly` | [`LineString`](LineString.md) | A new object on every read. |
| <a id="isreleased"></a> `isReleased` | `readonly` | `boolean` | Whether `release()` was called. Readable after release. |
| <a id="legs"></a> `legs` | `readonly` | [`RouteLeg`](RouteLeg.md)[] | A new array on every read. |
