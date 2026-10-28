---
sidebar_label: RNNavigationView
sidebar_position: 4
description: "<NavigationView> built in React Native from the headless API, on an @rnmapbox/maps navigation map: a maneuver banner with road shields, exit numbers and lanes, speed limit, road name, trip progress, mute, overview/recenter and end buttons, and an arrival card."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/RNNavigationView.tsx
---

{/* Generated from rnmapbox/navigation/src/RNNavigationView.tsx by `yarn docs`. Don't edit. */}

# RNNavigationView()

```ts
function RNNavigationView(props: RNNavigationViewProps): Element;
```

Defined in: [src/RNNavigationView.tsx:79](https://github.com/rnmapbox/navigation/blob/v0.1.0/src/RNNavigationView.tsx#L79)

`<NavigationView>` built in React Native from the headless API, on an `@rnmapbox/maps` navigation map: a maneuver
banner with road shields, exit numbers and lanes, speed limit, road name, trip progress, mute, overview/recenter and
end buttons, and an arrival card. Navigation maps draw the alternative routes of its guidance; tapping one switches
to it.

It uses the app's single navigation session like `<NavigationView>`. Use it as is, or copy it as a starting point
for your own UI.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`RNNavigationViewProps`](RNNavigationViewProps.md) | See [RNNavigationViewProps](RNNavigationViewProps.md). |

## Returns

`Element`
