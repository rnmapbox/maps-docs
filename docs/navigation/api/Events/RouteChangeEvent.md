---
sidebar_label: RouteChangeEvent
sidebar_position: 4
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# RouteChangeEvent

```ts
type RouteChangeEvent = object;
```

From [Navigation.addRouteChangeListener](../Core/Navigation.md#addroutechangelistener).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="reason"></a> `reason` | `"reroute"` \| `"alternative"` | `reroute` after going off route, `alternative` when guidance switched to an alternative route. |
| <a id="route"></a> `route` | [`Route`](../Routes/Route.md) | The route guidance follows now. Release it when you're done with it. |
