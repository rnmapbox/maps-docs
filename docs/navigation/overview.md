---
id: overview
sidebar_position: 1
title: Overview
---

[`@rnmapbox/navigation`](https://github.com/rnmapbox/navigation) is a community-supported React Native library for the [Mapbox Navigation SDK v3](https://docs.mapbox.com/navigation/) on iOS and Android, built on `@rnmapbox/maps`.

It requests routes, runs an active-guidance session and reports route progress. The Navigation SDK draws the route line, the puck and the navigation camera on a regular `@rnmapbox/maps` `MapView`, so your existing layers, sources and annotations keep working on the same map.

:::caution Alpha
`@rnmapbox/navigation` is in early alpha. The current release is `0.1.0-alpha.0`, and APIs may change between releases.
:::

## Requirements

- React Native 0.79+ with the New Architecture.
- `@rnmapbox/maps` 10.3.11 or newer (peer dependency).
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
- Route progress and camera state events.
- [`<NavigationView>`](navigation-view.md), the SDK's full-screen turn-by-turn UI. Not released yet, see its page.

## Coming next

These are in open pull requests and not released yet:

- `<RNNavigationView>`, a navigation UI written in React Native on top of the headless API, plus location, arrival, off-route, reroute and voice instruction events ([rnmapbox/navigation#9](https://github.com/rnmapbox/navigation/pull/9)).
- An Expo config plugin ([rnmapbox/navigation#7](https://github.com/rnmapbox/navigation/pull/7)).

## Known limitations

- No explicit offline routing API. Requests use the SDK's default hybrid router.
- Navigation maps have no voice guidance, rerouting UI, alternatives or multi-leg UI.
- `@rnmapbox/maps` `LocationPuck` and `UserLocation` don't work on navigation maps: the navigation puck replaces the map's location provider.
- One navigation session for all navigation maps. Per-map routes or cameras aren't supported.

See the [README](https://github.com/rnmapbox/navigation#known-limitations) for the full list.

## License

`@rnmapbox/navigation` is MIT licensed. The Mapbox Navigation SDKs it builds on are proprietary and governed by the [Mapbox Terms of Service](https://www.mapbox.com/legal/tos). This is a community-maintained package, not an official Mapbox product.
