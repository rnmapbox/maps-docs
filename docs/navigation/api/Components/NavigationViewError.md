---
sidebar_label: NavigationViewError
sidebar_position: 7
description: "Passed to onError of NavigationView and RNNavigationView. NavigationViewError API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/NavigationView.tsx
---

{/* Generated from rnmapbox/navigation/src/NavigationView.tsx by `yarn docs`. Don't edit. */}

# NavigationViewError

```ts
type NavigationViewError = object;
```

Defined in: [src/NavigationView.tsx:22](https://github.com/rnmapbox/navigation/blob/v0.1.1/src/NavigationView.tsx#L22)

Passed to `onError` of [NavigationView](NavigationView.md) and [RNNavigationView](RNNavigationView.md).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="code"></a> `code` | `string` | E.g. `route_request_failed`, `route_released`, `start_failed`. |
| <a id="message"></a> `message` | `string` | Human-readable, from the SDK where it has one. |
