---
sidebar_label: CarMap
sidebar_position: 1
description: "Adds its @rnmapbox/maps children to the map on the car screen (CarPlay, Android Auto) instead of the phone's."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/CarMap.tsx
---

{/* Generated from rnmapbox/navigation/src/CarMap.tsx by `yarn docs`. Don't edit. */}

# CarMap()

```ts
function CarMap(props: CarMapProps): Element | null;
```

Defined in: [src/CarMap.tsx:90](https://github.com/rnmapbox/navigation/blob/v0.1.0/src/CarMap.tsx#L90)

Adds its `@rnmapbox/maps` children to the map on the car screen (CarPlay, Android Auto) instead of the phone's.
Render it in the component passed to [Navigation.registerCarPlayRoot](../Core/Navigation.md#registercarplayroot), and in the app for Android Auto and
for iOS apps without a CarPlay root; while a CarPlay root is mounted, only its `<CarMap>` renders.
It takes no space on the phone and renders nothing while no car screen shows a map.
Views such as `MarkerView` and taps on the map aren't supported on car screens.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`CarMapProps`](CarMapProps.md) | See [CarMapProps](CarMapProps.md). |

## Returns

`Element` \| `null`
