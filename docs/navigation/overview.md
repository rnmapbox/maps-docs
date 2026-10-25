---
id: overview
sidebar_position: 1
title: "Turn-by-turn navigation for React Native (@rnmapbox/navigation)"
sidebar_label: Overview
description: "Turn-by-turn navigation for React Native with the Mapbox Navigation SDK v3 on iOS and Android: routing, guidance and drop-in navigation UI. Works with Expo."
image: /img/navigation/social-card.jpg
---

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

:::caution Alpha
`@rnmapbox/navigation` is in early alpha. The current release is `0.1.0-alpha.1`, published to npm under the `next` tag, and APIs may change between releases.
:::

## Requirements

- React Native 0.79+ with the New Architecture.
- `@rnmapbox/maps` 10.3.11 or newer (peer dependency). Navigation maps plug into its map view factory hooks, which have their current form since 10.3.11.
- iOS: React Native's minimum deployment target. The Navigation SDK for iOS 3.23.1 is added as a Swift package.
- Android: `minSdkVersion` 24, `compileSdkVersion` 36.
- A Mapbox account and a public access token (`pk.…`). No secret downloads token is needed.

Navigation is billed per trip or MAU to the access token you pass, on top of Maps usage. See [Navigation SDK pricing](https://www.mapbox.com/pricing#navigation).

## Versions

The Navigation SDK pins the Maps SDK it's built against, and `@rnmapbox/maps` must use that same Maps SDK.

| @rnmapbox/navigation | Navigation SDK | Maps SDK (pinned by Nav) |
| -------------------- | -------------- | ------------------------ |
| 0.1.x                | 3.23.1         | 11.23.1                  |

## What's included

- Route requests, with `Route` objects backed by the native SDK route.
- Route preview and active guidance, simulated or on the device's location.
- Navigation maps: an `@rnmapbox/maps` `MapView` with the SDK's route line, puck and navigation camera.
- Events for route progress, camera state, location, arrival, off-route, reroutes and voice instructions.
- [`<NavigationView>`](navigation-view.md), the SDK's full-screen turn-by-turn UI.
- [`<RNNavigationView>`](rn-navigation-view.md), a turn-by-turn UI written in React Native on top of the headless API.
- An Expo config plugin, see [Install](install.md).

## Choose an approach

There are three ways to build a navigation screen. They all share the app's single navigation session.

| | Headless API + your own `MapView` | `<RNNavigationView>` | `<NavigationView>` |
| --- | --- | --- | --- |
| What you get | A navigation map with the route line, puck and camera. All UI is yours. | A complete UI in React Native: maneuver banner, lanes, speed limit, trip progress, buttons. | The Navigation SDK's own UI: `NavigationViewController` on iOS, the SDK UI components on Android. |
| Customizability | Full. Any `@rnmapbox/maps` layers, sources and annotations, any React Native UI. | High. Change the map style, add map children, or copy its source as a starting point. | Low. Props for the route, simulation and mute; the look is the SDK's. |
| Platform parity | Same on both platforms, since the UI is yours. | Same on both platforms. | Differs: Android has no end-of-route or feedback UI, no day/night styles and no road name label. |
| Effort | Most: you build banners, buttons and arrival handling from the [events](api/index.md). | Little: drop it in, pass `waypoints` or a `route`. | Least, for the full SDK experience. |

Start with `<RNNavigationView>` if you want a ready UI that matches the rest of your React Native app, `<NavigationView>` if you want the SDK's UI as is, and the headless API when navigation is one part of a custom map screen.

## Known limitations

- No explicit offline routing API. Requests use the SDK's default hybrid router, which only falls back to onboard routing with routing tiles already on the device.
- Navigation maps show no alternative routes during guidance.
- Android `<NavigationView>` has no end-of-route, feedback or alternative-route UI, no day/night styles, no road name label, and doesn't show reroutes as such.
- The Expo config plugin is only tested with Expo SDK 58.
- `@rnmapbox/maps` `LocationPuck` and `UserLocation` don't work on navigation maps: the navigation puck replaces the map's location provider.
- One navigation session for all navigation maps. Per-map routes or cameras aren't supported.
- Route progress events already on their way to JS still arrive after `stopNavigation`.
- Not tested yet: live (non-simulated) guidance on a device, release builds, several navigation maps at once, and unmounting a map during guidance.

See also [Troubleshooting](troubleshooting.md).

## License

`@rnmapbox/navigation` is MIT licensed. The Mapbox Navigation SDKs it builds on are proprietary and governed by the [Mapbox Terms of Service](https://www.mapbox.com/legal/tos). This is a community-maintained package, not an official Mapbox product.
