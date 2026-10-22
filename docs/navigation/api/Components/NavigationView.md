---
sidebar_label: NavigationView
sidebar_position: 1
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# NavigationView()

```ts
function NavigationView(props: NavigationViewProps): Element;
```

Full-screen turn-by-turn navigation UI: `NavigationViewController` from `MapboxNavigationUIKit` on iOS, and an
equivalent built from the Navigation SDK UI components on Android.

It uses the app's single navigation session: mounting it, or giving it a new route, starts guidance along that route,
replacing any active guidance, and unmounting it or the user ending the trip stops guidance. Show one at a time.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`NavigationViewProps`](NavigationViewProps.md) | See [NavigationViewProps](NavigationViewProps.md). |

## Returns

`Element`
