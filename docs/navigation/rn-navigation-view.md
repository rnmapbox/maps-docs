---
id: rn-navigation-view
sidebar_position: 5
title: "RNNavigationView: turn-by-turn navigation UI in React Native"
sidebar_label: RNNavigationView
description: "A customizable turn-by-turn navigation UI written in React Native on top of the @rnmapbox/navigation headless API, the same on iOS and Android."
---

`<RNNavigationView>` is a turn-by-turn navigation UI written in React Native on top of the [headless API](getting-started.md), on an `@rnmapbox/maps` navigation map. It looks the same on iOS and Android. Use it as is, or copy [its source](https://github.com/rnmapbox/navigation/blob/main/src/RNNavigationView.tsx) as a starting point for your own UI.

<img src="/img/navigation/rn-navigation-view-alpha1.png" alt="RNNavigationView during simulated guidance on iOS" width="320" />

In `0.1.0-alpha.1` it shows:

- a maneuver banner with the next instruction, the distance to it, and the lanes;
- the speed limit sign (US or Vienna style) and the current road name;
- arrival time, remaining time and distance;
- mute, overview/recenter and end buttons;
- an arrival message at the final destination.

```tsx
import { RNNavigationView } from '@rnmapbox/navigation';

<RNNavigationView
  style={{ flex: 1 }}
  waypoints={[
    [-122.39726, 37.79205],
    { coordinate: [-122.39351, 37.79554], name: 'Ferry Building' },
  ]}
  simulate
  onArrive={({ isFinalDestination }) => {}}
  onCancel={() => close()}
  onError={({ code, message }) => {}}
/>
```

## Props

It takes the same props as [`<NavigationView>`](navigation-view.md#props) (`route` or `waypoints`, `simulate`, `mute`, `onRouteProgress`, `onArrive`, `onCancel`, `onError`, `style`, `testID`), plus:

| Prop       | Type        | Description                                                              |
| ---------- | ----------- | ------------------------------------------------------------------------ |
| `styleURL` | `string`    | Map style. Defaults to Mapbox Standard.                                  |
| `children` | `ReactNode` | Rendered inside its `MapView`, e.g. extra sources and layers.            |

See [`RNNavigationViewProps`](api/Components/RNNavigationViewProps.md) in the API reference.

## Session

Like `<NavigationView>`, it uses the app's single navigation session: mounting it, or giving it a new route, starts guidance along that route and replaces any other active guidance; unmounting it or tapping the end button stops guidance. Show one at a time.

It reads the headless events (route progress, location, camera state, off-route, arrival), so your own `Navigation.add…Listener` subscriptions keep working alongside it.

## Next release

:::info Not released yet
These are on the `main` branch of [rnmapbox/navigation](https://github.com/rnmapbox/navigation) ([#10](https://github.com/rnmapbox/navigation/pull/10)) and not part of `0.1.0-alpha.1`.
:::

<img src="/img/navigation/rn-navigation-view-arrival.png" alt="RNNavigationView arrival card in night appearance" width="320" />

- Road shields and exit numbers in the maneuver banner, from new `maneuverComponents` and `secondaryComponents` in route progress events.
- `distanceUnit` prop, `'metric'` or `'imperial'`, for the distances the view shows and the voice instructions of a route it requests through `waypoints`. It defaults to the new `Navigation.getDefaultDistanceUnit()`, from the device's region and measurement settings.
- Alternative routes: with `waypoints` the view requests them, navigation maps draw them, and tapping one switches guidance to it, reported by `addRouteChangeListener` with `reason: 'alternative'`.
- `appearance` prop, `'auto'` (default), `'day'` or `'night'`. `'auto'` switches at sunrise and sunset at the user's location; the UI and the Standard style's light preset follow it.
- An arrival card with the destination name and an end button.

Road shields come from the Directions API's shield images, not the Mapbox designed shields the native banners use.
