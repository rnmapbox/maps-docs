---
id: api
sidebar_position: 5
title: API reference
---

`Navigation` is the default export and also a named export.

```tsx
import Navigation, { NAVIGATION_MAP_VIEW_IMPL, NavigationViewport } from '@rnmapbox/navigation';
```

## Navigation

| Method                                                   | Description                                                                 |
| -------------------------------------------------------- | --------------------------------------------------------------------------- |
| `setAccessToken(accessToken: string): void`              | Must be called before any request; navigation is billed to this token.      |
| `getSdkVersion(): string`                                | Version of the native Navigation SDK linked into the app.                   |
| `requestRoutes(options: RouteRequestOptions): Promise<RouteResponse>` | Routes through `options.waypoints`. Rejects with fewer than two waypoints. |
| `previewRoute(route: Route \| null): void`               | Shows `route` on navigation maps until guidance starts or `stopNavigation`; `null` removes it. Throws if `route` was released. |
| `startActiveGuidance(route: Route, options?: { simulate?: boolean }): Promise<void>` | Starts guidance along `route` and switches the camera to `following`. `simulate` drives it with simulated locations. |
| `stopNavigation(): void`                                 | Stops guidance and removes the route from navigation maps.                  |
| `getRouteStats(): RouteStats`                            | `{ live, released, collected }` counts of native routes, for leak checks.   |
| `setCameraState(state: CameraState): void`               | `'following'`, `'overview'` or `'idle'`.                                    |
| `getCameraState(): CameraState`                          | Current camera state.                                                       |
| `addCameraStateListener(listener: (state: CameraState) => void): EventSubscription` | Called whenever the camera state changes, whether from JS, guidance or a map gesture. |
| `addRouteProgressListener(listener: (event: RouteProgressEvent) => void): EventSubscription` | Route progress during guidance. |

## Components and constants

| Export                     | Description                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------- |
| `NAVIGATION_MAP_VIEW_IMPL` | Pass as `mapViewImpl` to an `@rnmapbox/maps` `MapView` to make it a navigation map.               |
| `NavigationViewport`       | Child of a navigation map. `padding?: { top?, right?, bottom?, left? }` in points from the map's edges, ignoring the safe area. |
| `NavigationView`           | Full-screen navigation UI, see [NavigationView](navigation-view.md). Not released yet.            |

## Types

```ts
/** GeoJSON order, same as @rnmapbox/maps. */
type Position = [longitude: number, latitude: number];

type Waypoint = Position | { coordinate: Position; name?: string };

type RouteRequestOptions = {
  /** Origin first, destination last. */
  waypoints: Waypoint[];
  /** Defaults to 'driving-traffic'. */
  profile?: 'driving-traffic' | 'driving' | 'walking' | 'cycling';
  /** Also return alternative routes. Defaults to false. */
  alternatives?: boolean;
  /** Road classes to avoid, e.g. ['toll', 'ferry']. */
  exclude?: string[];
  /** Language of instructions, e.g. 'en' or 'de-DE'. */
  language?: string;
  units?: 'metric' | 'imperial';
};

type RouteResponse = { main: Route; alternatives: Route[] };

interface Route {
  readonly distance: number;           // meters
  readonly expectedTravelTime: number; // seconds
  readonly geometry: LineString;       // GeoJSON, a new object on every read
  readonly legs: RouteLeg[];           // a new array on every read
  readonly isReleased: boolean;
  /** Frees the native route. Calling it again does nothing. */
  release(): void;
}

type RouteLeg = {
  distance: number;           // meters
  expectedTravelTime: number; // seconds
  stepCount: number;
  /** Names of the main roads, e.g. "Market Street, Embarcadero". */
  summary: string;
};

type RouteStats = { live: number; released: number; collected: number };

type CameraState = 'following' | 'overview' | 'idle';

type RouteProgressEvent = {
  distanceRemaining: number;     // meters
  distanceTraveled: number;      // meters
  durationRemaining: number;     // seconds
  fractionTraveled: number;      // 0..1
  stepDistanceRemaining: number; // meters to the next maneuver
  /** Primary banner text of the next maneuver, e.g. "Turn right onto Market Street". */
  maneuverInstruction: string;
  /** Mapbox Directions maneuver type, e.g. "turn", "arrive". Empty if unknown. */
  maneuverType: string;
  /** Mapbox Directions maneuver modifier, e.g. "right", "slight left". Empty if unknown. */
  maneuverModifier: string;
};
```
