---
sidebar_label: CameraState
sidebar_position: 3
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# CameraState

```ts
type CameraState = "following" | "overview" | "idle";
```

Camera of navigation maps. `following` follows the puck, tilted and rotated with the route; `overview` fits the rest
of the route; `idle` leaves the map to the user's gestures and `@rnmapbox/maps` `Camera`.
