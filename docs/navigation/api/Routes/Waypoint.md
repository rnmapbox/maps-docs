---
sidebar_label: Waypoint
sidebar_position: 9
description: "A coordinate, or a coordinate with the name the navigation UI shows for it, e.g. on arrival."
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# Waypoint

```ts
type Waypoint = 
  | Position
  | {
  coordinate: Position;
  name?: string;
};
```

A coordinate, or a coordinate with the name the navigation UI shows for it, e.g. on arrival.
