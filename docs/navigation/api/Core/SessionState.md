---
sidebar_label: SessionState
sidebar_position: 5
description: "The app's navigation session: idle tracks nothing; freeDrive matches the location to the road without a route, see Navigation.startFreeDrive; activeGuidance follows a route."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/Navigation.ts
---

{/* Generated from rnmapbox/navigation/src/Navigation.ts by `yarn docs`. Don't edit. */}

# SessionState

```ts
type SessionState = "idle" | "freeDrive" | "activeGuidance";
```

Defined in: [src/Navigation.ts:43](https://github.com/rnmapbox/navigation/blob/v0.1.1/src/Navigation.ts#L43)

The app's navigation session: `idle` tracks nothing; `freeDrive` matches the location to the road without a route,
see [Navigation.startFreeDrive](Navigation.md#startfreedrive); `activeGuidance` follows a route.
