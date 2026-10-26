---
sidebar_label: NavigationViewError
sidebar_position: 4
description: "Passed to onError of NavigationView and RNNavigationView. NavigationViewError API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# NavigationViewError

```ts
type NavigationViewError = object;
```

Passed to `onError` of [NavigationView](NavigationView.md) and [RNNavigationView](RNNavigationView.md).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="code"></a> `code` | `string` | E.g. `route_request_failed`, `route_released`, `start_failed`. |
| <a id="message"></a> `message` | `string` | Human-readable, from the SDK where it has one. |
