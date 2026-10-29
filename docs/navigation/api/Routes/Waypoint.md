---
sidebar_label: Waypoint
sidebar_position: 10
description: "A coordinate, or a coordinate with options. Waypoint API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/Route.ts
---

{/* Generated from rnmapbox/navigation/src/Route.ts by `yarn docs`. Don't edit. */}

# Waypoint

```ts
type Waypoint = 
  | Position
  | {
  approach?: "unrestricted" | "curb";
  coordinate: Position;
  name?: string;
  silent?: boolean;
};
```

Defined in: [src/Route.ts:22](https://github.com/rnmapbox/navigation/blob/v0.1.1/src/Route.ts#L22)

A coordinate, or a coordinate with options.

## Union Members

[`Position`](Position.md)

***

### Type Literal

```ts
{
  approach?: "unrestricted" | "curb";
  coordinate: Position;
  name?: string;
  silent?: boolean;
}
```

#### approach?

```ts
approach?: "unrestricted" | "curb";
```

`curb` arrives on the driving side of the road, e.g. the right in right-hand traffic.
Defaults to `unrestricted`, either side.

#### coordinate

```ts
coordinate: Position;
```

#### name?

```ts
name?: string;
```

Shown by the navigation UI, e.g. on arrival. Ignored on silent waypoints.

#### silent?

```ts
silent?: boolean;
```

Pass through without stopping: a silent waypoint doesn't end a leg, so there's no arrival at it.
The origin and the destination can't be silent. Defaults to `false`.
