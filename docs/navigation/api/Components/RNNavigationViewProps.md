---
sidebar_label: RNNavigationViewProps
sidebar_position: 8
description: "Props of RNNavigationView: NavigationViewProps, plus the props below."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/RNNavigationView.tsx
---

{/* Generated from rnmapbox/navigation/src/RNNavigationView.tsx by `yarn docs`. Don't edit. */}

# RNNavigationViewProps

```ts
type RNNavigationViewProps = NavigationViewProps & object;
```

Defined in: [src/RNNavigationView.tsx:51](https://github.com/rnmapbox/navigation/blob/v0.1.0-alpha.3/src/RNNavigationView.tsx#L51)

Props of [RNNavigationView](RNNavigationView.md): [NavigationViewProps](NavigationViewProps.md), plus the props below.

## Type Declaration

### appearance?

```ts
appearance?: RNNavigationViewAppearance;
```

Colors of the UI and the Standard style's light preset. Defaults to `auto`.

### children?

```ts
children?: ReactNode;
```

Rendered inside the `MapView`, e.g. extra sources and layers.

### distanceUnit?

```ts
distanceUnit?: DistanceUnit;
```

Unit of the distances the view shows, and of voice instructions for a route the view requests through
`waypoints`. Defaults to [Navigation.getDefaultDistanceUnit](../Core/Navigation.md#getdefaultdistanceunit).

### styleURL?

```ts
styleURL?: string;
```

Defaults to Mapbox Standard, whose light preset follows `appearance`. With another style it only changes the UI.
