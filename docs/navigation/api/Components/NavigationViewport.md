---
sidebar_label: NavigationViewport
sidebar_position: 3
description: "Configures the navigation camera of the @rnmapbox/maps MapView it's a child of: <MapView mapViewImpl={NAVIGATION_MAP_VIEW_IMPL}><NavigationViewport padding={{ bottom: 120 }} /></MapView>."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/NavigationViewport.tsx
---

{/* Generated from rnmapbox/navigation/src/NavigationViewport.tsx by `yarn docs`. Don't edit. */}

# NavigationViewport()

```ts
function NavigationViewport(props: NavigationViewportProps): Element;
```

Defined in: [src/NavigationViewport.tsx:36](https://github.com/rnmapbox/navigation/blob/v0.1.0/src/NavigationViewport.tsx#L36)

Configures the navigation camera of the `@rnmapbox/maps` `MapView` it's a child of:
`<MapView mapViewImpl={NAVIGATION_MAP_VIEW_IMPL}><NavigationViewport padding={{ bottom: 120 }} /></MapView>`.
Without it the SDK defaults apply: the safe area plus a small margin on iOS, no padding on Android.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`NavigationViewportProps`](NavigationViewportProps.md) | See [NavigationViewportProps](NavigationViewportProps.md). |

## Returns

`Element`
