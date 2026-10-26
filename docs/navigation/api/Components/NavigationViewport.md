---
sidebar_label: NavigationViewport
sidebar_position: 2
description: "Configures the navigation camera of the @rnmapbox/maps MapView it's a child of: <MapView mapViewImpl={NAVIGATION_MAP_VIEW_IMPL}><NavigationViewport padding={{ bottom: 120 }} /></MapView>."
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# NavigationViewport()

```ts
function NavigationViewport(props: NavigationViewportProps): Element;
```

Configures the navigation camera of the `@rnmapbox/maps` `MapView` it's a child of:
`<MapView mapViewImpl={NAVIGATION_MAP_VIEW_IMPL}><NavigationViewport padding={{ bottom: 120 }} /></MapView>`.
Without it the SDK defaults apply: the safe area plus a small margin on iOS, no padding on Android.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`NavigationViewportProps`](NavigationViewportProps.md) | See [NavigationViewportProps](NavigationViewportProps.md). |

## Returns

`Element`
