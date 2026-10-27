---
sidebar_label: CameraState
sidebar_position: 3
description: "Camera of navigation maps. CameraState API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/Navigation.ts
---

{/* Generated from rnmapbox/navigation/src/Navigation.ts by `yarn docs`. Don't edit. */}

# CameraState

```ts
type CameraState = "following" | "overview" | "idle";
```

Defined in: [src/Navigation.ts:36](https://github.com/rnmapbox/navigation/blob/v0.1.0-alpha.3/src/Navigation.ts#L36)

Camera of navigation maps. `following` follows the puck, tilted and rotated with the route; `overview` fits the rest
of the route; `idle` leaves the map to the user's gestures and `@rnmapbox/maps` `Camera`.
