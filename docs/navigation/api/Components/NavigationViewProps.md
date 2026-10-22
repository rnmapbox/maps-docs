---
sidebar_label: NavigationViewProps
sidebar_position: 6
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# NavigationViewProps

```ts
type NavigationViewProps = object;
```

Props of [NavigationView](NavigationView.md). Pass either `route` or `waypoints`.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="mute"></a> `mute?` | `boolean` | Mutes voice instructions. The view's own mute button also toggles them. |
| <a id="onarrive"></a> `onArrive?` | (`event`: [`ArriveEvent`](../Events/ArriveEvent.md)) => `void` | Same event as [Navigation.addArriveListener](../Core/Navigation.md#addarrivelistener). |
| <a id="oncancel"></a> `onCancel?` | () => `void` | The user ended the trip; guidance has stopped. Unmount the view. |
| <a id="onerror"></a> `onError?` | (`error`: [`NavigationViewError`](NavigationViewError.md)) => `void` | The route request or the start of guidance failed. |
| <a id="onrouteprogress"></a> `onRouteProgress?` | (`event`: [`RouteProgressEvent`](../Events/RouteProgressEvent.md)) => `void` | Same event as [Navigation.addRouteProgressListener](../Core/Navigation.md#addrouteprogresslistener). |
| <a id="route"></a> `route?` | [`Route`](../Routes/Route.md) | Route from `requestRoutes`. Keep it unreleased while it's passed to the view. |
| <a id="simulate"></a> `simulate?` | `boolean` | Drive the route with simulated locations. Read when guidance starts. |
| <a id="style"></a> `style?` | `StyleProp`\<`ViewStyle`\> | - |
| <a id="testid"></a> `testID?` | `string` | - |
| <a id="waypoints"></a> `waypoints?` | [`Waypoint`](../Routes/Waypoint.md)[] | Used when `route` isn't set: the view requests a route through them, origin first, and releases it on unmount. |
