---
sidebar_label: Waypoint
sidebar_position: 9
description: "A coordinate, or a coordinate with the name the navigation UI shows for it, e.g. on arrival."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/Route.ts
---

{/* Generated from rnmapbox/navigation/src/Route.ts by `yarn docs`. Don't edit. */}

# Waypoint

```ts
type Waypoint = 
  | Position
  | {
  coordinate: Position;
  name?: string;
};
```

Defined in: [src/Route.ts:22](https://github.com/rnmapbox/navigation/blob/v0.1.0/src/Route.ts#L22)

A coordinate, or a coordinate with the name the navigation UI shows for it, e.g. on arrival.
