---
id: styling
sidebar_position: 8
title: "Styling navigation maps: route line colors and day/night styles"
sidebar_label: Styling
description: "Style @rnmapbox/navigation maps: route line, casing, alternative and traveled colors, day and night map styles for NavigationView, and RNNavigationView appearance."
---

## Route line colors

`<NavigationViewport routeLineStyle>` sets the colors of the route lines the Navigation SDK draws on the map it's a child of. Unset colors keep the SDK's.

```tsx
import { MapView } from '@rnmapbox/maps';
import { NAVIGATION_MAP_VIEW_IMPL, NavigationViewport } from '@rnmapbox/navigation';

<MapView style={{ flex: 1 }} mapViewImpl={NAVIGATION_MAP_VIEW_IMPL}>
  <NavigationViewport
    routeLineStyle={{
      color: '#7c3aed',
      casingColor: '#4c1d95',
      alternativeColor: '#c4b5fd',
      traveledColor: 'rgba(124, 58, 237, 0.35)',
    }}
  />
</MapView>
```

| Color              | Description                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------- |
| `color`            | Main route where traffic is low or unknown. Moderate, heavy and severe traffic keep the SDK's colors. |
| `casingColor`      | Border of the main route.                                                                   |
| `alternativeColor` | Alternative routes where traffic is low or unknown.                                         |
| `traveledColor`    | Part of the main route already traveled during guidance. Defaults to transparent, so that part disappears. |

The colors can change during guidance. On iOS the SDK then redraws the route, and the traveled part shows in the route color until the next location update.

`<RNNavigationView>` takes the same `routeLineStyle` prop. `<NavigationView>` doesn't: on iOS its colors come from the SDK's own styles.

## Map styles

Navigation maps are `@rnmapbox/maps` maps, so set their style with `MapView`'s `styleURL` and add your own sources, layers and annotations as children.

`<NavigationView>` and `<RNNavigationView>` take `styleURL` and `nightStyleURL`:

```tsx
<NavigationView
  style={{ flex: 1 }}
  waypoints={waypoints}
  styleURL="mapbox://styles/mapbox/navigation-day-v1"
  nightStyleURL="mapbox://styles/mapbox/navigation-night-v1"
/>
```

| Prop            | `<NavigationView>`                                                                  | `<RNNavigationView>`                              |
| --------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| `styleURL`      | Map style by day. Defaults to Mapbox Standard.                                      | Map style. Defaults to Mapbox Standard.           |
| `nightStyleURL` | Map style while the system is in dark mode. Defaults to `styleURL` if set, else to Standard with its night light preset. | Map style while `appearance` is night. Defaults to `styleURL`. |

On Android, `<NavigationView>` switches the map style at night, but its banner and bottom bar stay in day colors.

## RNNavigationView appearance

`appearance` sets the colors of `<RNNavigationView>`'s UI and the light preset of the Standard style:

- `'auto'` (default) is `'night'` while the system is in dark mode, like `<NavigationView>`;
- `'day'` or `'night'` fixes it.

With a `styleURL` other than Standard, `appearance` only changes the UI; pass a `nightStyleURL` to change the map too.

See [`RouteLineStyle`](api/Components/RouteLineStyle.md), [`NavigationViewProps`](api/Components/NavigationViewProps.md) and [`RNNavigationViewProps`](api/Components/RNNavigationViewProps.md) in the API reference.
