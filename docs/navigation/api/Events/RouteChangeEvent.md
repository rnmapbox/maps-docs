---
sidebar_label: RouteChangeEvent
sidebar_position: 5
description: "From Navigation.addRouteChangeListener. RouteChangeEvent API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/Route.ts
---

{/* Generated from rnmapbox/navigation/src/Route.ts by `yarn docs`. Don't edit. */}

# RouteChangeEvent

```ts
type RouteChangeEvent = object;
```

Defined in: [src/Route.ts:194](https://github.com/rnmapbox/navigation/blob/v0.1.1/src/Route.ts#L194)

From [Navigation.addRouteChangeListener](../Core/Navigation.md#addroutechangelistener).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="reason"></a> `reason` | `"reroute"` \| `"alternative"` | `reroute` after going off route, `alternative` when guidance switched to an alternative route. |
| <a id="route"></a> `route` | [`Route`](../Routes/Route.md) | The route guidance follows now. Release it when you're done with it. |
