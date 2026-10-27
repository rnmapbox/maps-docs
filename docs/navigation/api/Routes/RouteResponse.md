---
sidebar_label: RouteResponse
sidebar_position: 6
description: "Result of Navigation.requestRoutes. alternatives is empty unless requested."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/Route.ts
---

{/* Generated from rnmapbox/navigation/src/Route.ts by `yarn docs`. Don't edit. */}

# RouteResponse

```ts
type RouteResponse = object;
```

Defined in: [src/Route.ts:112](https://github.com/rnmapbox/navigation/blob/v0.1.0-alpha.3/src/Route.ts#L112)

Result of [Navigation.requestRoutes](../Core/Navigation.md#requestroutes). `alternatives` is empty unless requested.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="alternatives"></a> `alternatives` | [`Route`](Route.md)[] |
| <a id="main"></a> `main` | [`Route`](Route.md) |
