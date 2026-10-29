---
sidebar_label: RouteLineStyle
sidebar_position: 12
description: "Colors of the route lines the Navigation SDK draws on a navigation map. Unset colors keep the SDK defaults."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/NavigationViewport.tsx
---

{/* Generated from rnmapbox/navigation/src/NavigationViewport.tsx by `yarn docs`. Don't edit. */}

# RouteLineStyle

```ts
type RouteLineStyle = object;
```

Defined in: [src/NavigationViewport.tsx:22](https://github.com/rnmapbox/navigation/blob/v0.1.1/src/NavigationViewport.tsx#L22)

Colors of the route lines the Navigation SDK draws on a navigation map. Unset colors keep the SDK defaults.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="alternativecolor"></a> `alternativeColor?` | `ColorValue` | Alternative routes, where traffic is low or unknown. |
| <a id="casingcolor"></a> `casingColor?` | `ColorValue` | Border of the main route. |
| <a id="color"></a> `color?` | `ColorValue` | Main route, where traffic is low or unknown. Moderate, heavy and severe traffic keep the SDK's colors. |
| <a id="traveledcolor"></a> `traveledColor?` | `ColorValue` | Part of the main route already traveled during guidance. Defaults to transparent, so that part disappears. |
