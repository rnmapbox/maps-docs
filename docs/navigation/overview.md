---
id: overview
sidebar_position: 1
title: "Turn-by-turn navigation for React Native (@rnmapbox/navigation)"
sidebar_label: Overview
description: "Turn-by-turn navigation for React Native with the Mapbox Navigation SDK v3 on iOS and Android: routing, guidance and drop-in navigation UI. Works with Expo."
image: /img/navigation/social-card.jpg
---

import PhoneVideo from '@site/src/components/PhoneVideo';

<head>
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      name: '@rnmapbox/navigation',
      description: 'Turn-by-turn navigation for React Native with the Mapbox Navigation SDK v3 on iOS and Android, built on @rnmapbox/maps.',
      url: 'https://rnmapbox.github.io/docs/navigation/overview',
      codeRepository: 'https://github.com/rnmapbox/navigation',
      programmingLanguage: ['TypeScript', 'Swift', 'Kotlin'],
      runtimePlatform: ['React Native', 'iOS', 'Android'],
      license: 'https://opensource.org/licenses/MIT',
      sameAs: ['https://www.npmjs.com/package/@rnmapbox/navigation'],
    })}
  </script>
</head>

[`@rnmapbox/navigation`](https://github.com/rnmapbox/navigation) is a community-supported React Native library for turn-by-turn navigation with the [Mapbox Navigation SDK v3](https://docs.mapbox.com/navigation/) on iOS and Android, built on [`@rnmapbox/maps`](../install.md). It works with Expo development builds.

It requests routes, runs an active-guidance session and reports route progress. The Navigation SDK draws the route line, the puck and the navigation camera on a regular `@rnmapbox/maps` `MapView`, so your existing layers, sources and annotations keep working on the same map.

<PhoneVideo
  src="/img/navigation/navigation-demo"
  poster="/img/navigation/navigation-demo.webp"
  width={324}
  height={720}
  label="Simulated drive to the Ferry Building in San Francisco with the Mapbox Navigation SDK UI: maneuver banner, route line and a camera following the puck"
  caption="<NavigationView> with a simulated route, on Android."
/>

:::note Pre-1.0
The current release is `0.1.0`, on npm's `latest` tag. APIs may change between minor releases until 1.0.
:::

## Requirements

- React Native 0.79+ with the New Architecture.
- `@rnmapbox/maps` `>=10.3.16 <10.4.0` (peer dependency). Navigation maps plug into its map view factory hooks, and `<CarMap>` into its support for maps that live elsewhere, which 10.3.16 completed.
- iOS: React Native's minimum deployment target (the Navigation SDK itself needs iOS 14). The Navigation SDK for iOS 3.33.0 is added as a Swift package.
- Android: `minSdkVersion` 24, `compileSdkVersion` 36. Navigation SDK for Android 3.33.0.
- A Mapbox account and a public access token (`pk.…`). No secret downloads token is needed.

Navigation is billed per trip or MAU to the access token you pass, on top of Maps usage. See [Navigation SDK pricing](https://www.mapbox.com/pricing#navigation).

## Versions

The Navigation SDK pins the Maps SDK it's built against, and `@rnmapbox/maps` must use that same Maps SDK.

| @rnmapbox/navigation    | Navigation SDK | Maps SDK (pinned by Nav) | @rnmapbox/maps      |
| ----------------------- | -------------- | ------------------------ | ------------------- |
| 0.1.0                   | 3.33.0         | 11.33.0                  | `>=10.3.16 <10.4.0` |
| 0.1.0-alpha.3           | 3.33.0         | 11.33.0                  | `>=10.3.12 <10.4.0` |
| 0.1.0-alpha.0 – alpha.2 | 3.23.1         | 11.23.1                  | `10.3.11`           |

## What's included

- Route requests, with `Route` objects backed by the native SDK route.
- Route preview and active guidance, simulated or on the device's location.
- Navigation maps: an `@rnmapbox/maps` `MapView` with the SDK's route line, puck and navigation camera.
- Events for route progress, camera state, location, arrival, off-route, reroutes and voice instructions.
- [`<NavigationView>`](navigation-view.md), the SDK's full-screen turn-by-turn UI.
- [`<RNNavigationView>`](rn-navigation-view.md), a turn-by-turn UI written in React Native on top of the headless API.
- [`<CarMap>`](api/Components/CarMap.md), which adds `@rnmapbox/maps` sources and layers to the car screen's map.
- CarPlay, a prototype: the Navigation SDK's CarPlay UI for the same navigation session as the phone. See [CarPlay](https://github.com/rnmapbox/navigation#carplay) in the README.
- Android Auto, experimental and not tested on a head unit yet: a navigation map for the same session. See [Android Auto](https://github.com/rnmapbox/navigation#android-auto) in the README.
- An Expo config plugin, see [Install](install.md).

## Choose an approach

There are three ways to build a navigation screen. They all share the app's single navigation session.

| | Headless API + your own `MapView` | `<RNNavigationView>` | `<NavigationView>` |
| --- | --- | --- | --- |
| What you get | A navigation map with the route line, puck and camera. All UI is yours. | A complete UI in React Native: maneuver banner, lanes, speed limit, trip progress, buttons. | The Navigation SDK's own UI: `NavigationViewController` on iOS, the SDK UI components on Android. |
| Customizability | Full. Any `@rnmapbox/maps` layers, sources and annotations, any React Native UI. | High. Change the map style, add map children, or copy its source as a starting point. | Low. Props for the route, simulation and mute; the look is the SDK's. |
| Platform parity | Same on both platforms, since the UI is yours. | Same on both platforms. | Differs: Android has no end-of-route or feedback UI, no night colors for its UI and no road name label. |
| Effort | Most: you build banners, buttons and arrival handling from the [events](api/index.md). | Little: drop it in, pass `waypoints` or a `route`. | Least, for the full SDK experience. |

Start with `<RNNavigationView>` if you want a ready UI that matches the rest of your React Native app, `<NavigationView>` if you want the SDK's UI as is, and the headless API when navigation is one part of a custom map screen.

## Known limitations

- No explicit offline routing API. Requests use the SDK's default hybrid router, which only falls back to onboard routing with routing tiles already on the device.
- Android `<NavigationView>` has no end-of-route or feedback UI, no night colors for its UI (only the map switches), no road name label, and doesn't show reroutes as such.
- `<RNNavigationView>` draws road shields from the Directions API's shield images, not the Mapbox designed shields the native banners use.
- The Expo config plugin is only tested with Expo SDK 58.
- `@rnmapbox/maps` `LocationPuck` and `UserLocation` don't work on navigation maps: the navigation puck replaces the map's location provider.
- One navigation session for all navigation maps. Per-map routes or cameras aren't supported.
- Route progress events already on their way to JS still arrive after `stopNavigation`.
- Not tested yet: live (non-simulated) guidance on a device, release builds, several navigation maps at once, and unmounting a map during guidance.

See also [Troubleshooting](troubleshooting.md).

## License

`@rnmapbox/navigation` is MIT licensed. The Mapbox Navigation SDKs it builds on are proprietary and governed by the [Mapbox Terms of Service](https://www.mapbox.com/legal/tos). This is a community-maintained package, not an official Mapbox product.
