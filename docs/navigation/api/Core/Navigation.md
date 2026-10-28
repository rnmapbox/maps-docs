---
sidebar_label: Navigation
sidebar_position: 1
description: "The headless navigation API: route requests, the app's single guidance session, and its events. It's also the default export."
custom_edit_url: https://github.com/rnmapbox/navigation/blob/main/src/Navigation.ts
---

{/* Generated from rnmapbox/navigation/src/Navigation.ts by `yarn docs`. Don't edit. */}

# Navigation

```ts
const Navigation: object;
```

Defined in: [src/Navigation.ts:53](https://github.com/rnmapbox/navigation/blob/v0.1.0/src/Navigation.ts#L53)

The headless navigation API: route requests, the app's single guidance session, and its events.
It's also the default export.

## Type Declaration

### addArriveListener()

```ts
addArriveListener(listener: (event: ArriveEvent) => void): EventSubscription;
```

Called when guidance reaches a waypoint, the final destination included.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`event`: [`ArriveEvent`](../Events/ArriveEvent.md)) => `void` |

#### Returns

`EventSubscription`

### addCameraStateListener()

```ts
addCameraStateListener(listener: (state: CameraState) => void): EventSubscription;
```

Called whenever the camera state changes, whether from JS, guidance or a map gesture.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`state`: [`CameraState`](CameraState.md)) => `void` |

#### Returns

`EventSubscription`

### addCarPlayConnectionListener()

```ts
addCarPlayConnectionListener(listener: (connected: boolean) => void): EventSubscription;
```

Called when a CarPlay screen connects or disconnects.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`connected`: `boolean`) => `void` |

#### Returns

`EventSubscription`

### addLocationListener()

```ts
addLocationListener(listener: (event: LocationEvent) => void): EventSubscription;
```

The location snapped to the road or route, with its speed limit and road name.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`event`: [`LocationEvent`](../Events/LocationEvent.md)) => `void` |

#### Returns

`EventSubscription`

### addOffRouteListener()

```ts
addOffRouteListener(listener: (offRoute: boolean) => void): EventSubscription;
```

Called with `true` when the user leaves the route, then with `false` once guidance follows a route again.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`offRoute`: `boolean`) => `void` |

#### Returns

`EventSubscription`

### addRouteChangeListener()

```ts
addRouteChangeListener(listener: (event: RouteChangeEvent) => void): EventSubscription;
```

Called when guidance switches to another route on its own. Every listener gets the same new `Route`; the previous
one stays valid until released.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`event`: [`RouteChangeEvent`](../Events/RouteChangeEvent.md)) => `void` |

#### Returns

`EventSubscription`

### addRouteProgressListener()

```ts
addRouteProgressListener(listener: (event: RouteProgressEvent) => void): EventSubscription;
```

Called as guidance moves along the route, from the headless API and `<NavigationView>` alike. Events already on
their way to JS can still arrive after `stopNavigation`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`event`: [`RouteProgressEvent`](../Events/RouteProgressEvent.md)) => `void` |

#### Returns

`EventSubscription`

### addVoiceInstructionListener()

```ts
addVoiceInstructionListener(listener: (event: VoiceInstructionEvent) => void): EventSubscription;
```

Called when an instruction is due, whether or not the SDK speaks it; for apps doing their own text to speech.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`event`: [`VoiceInstructionEvent`](../Events/VoiceInstructionEvent.md)) => `void` |

#### Returns

`EventSubscription`

### getCameraState()

```ts
getCameraState(): CameraState;
```

The camera state of navigation maps, see [setCameraState](#setcamerastate).

#### Returns

[`CameraState`](CameraState.md)

### getDefaultDistanceUnit()

```ts
getDefaultDistanceUnit(): DistanceUnit;
```

The unit the device's region and measurement settings call for, which the native views use.

#### Returns

[`DistanceUnit`](DistanceUnit.md)

### getRouteStats()

```ts
getRouteStats(): RouteStats;
```

Counts of native routes, for leak checks.

#### Returns

[`RouteStats`](../Routes/RouteStats.md)

### getSdkVersion()

```ts
getSdkVersion(): string;
```

Version of the native Mapbox Navigation SDK linked into the app.

#### Returns

`string`

### isCarPlayConnected()

```ts
isCarPlayConnected(): boolean;
```

Whether a CarPlay screen shows the navigation session; see the `carPlay` option of the Expo config plugin.
Always `false` on Android.

#### Returns

`boolean`

### isVoiceMuted()

```ts
isVoiceMuted(): boolean;
```

Whether voice instructions are muted, by [setVoiceMuted](#setvoicemuted) or `<NavigationView>`'s mute button.

#### Returns

`boolean`

### previewRoute()

```ts
previewRoute(route: Route | null): void;
```

Shows `route` on navigation maps until guidance starts or `stopNavigation` is called; `null` removes it.
Throws if `route` was released.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `route` | [`Route`](../Routes/Route.md) \| `null` |

#### Returns

`void`

### registerCarPlayRoot()

```ts
registerCarPlayRoot(component: ComponentType): void;
```

Sets the component iOS keeps mounted while CarPlay is connected, in a React root of its own that draws nothing;
render [CarMap](../Components/CarMap.md) in it. When CarPlay launches the app without its phone UI, this root starts React Native.
Needs the Expo plugin's `carPlayRoot` option (or `RNMBXNavigationCarPlayRoot.reactNativeFactory` set in the app
delegate) and React Native 0.79+. Call it in the app's entry file, next to `registerRootComponent`, as CarPlay
looks the root up before anything else loads. Android ignores it.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | `ComponentType` |

#### Returns

`void`

### requestRoutes()

```ts
requestRoutes(options: RouteRequestOptions): Promise<RouteResponse>;
```

Requests routes through `options.waypoints`. The routes hold native memory: `release()` the ones you don't keep.
Rejects with fewer than two waypoints.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RouteRequestOptions`](../Routes/RouteRequestOptions.md) |

#### Returns

`Promise`\<[`RouteResponse`](../Routes/RouteResponse.md)\>

### setAccessToken()

```ts
setAccessToken(accessToken: string): void;
```

Must be called before any request; navigation is billed to this token.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `accessToken` | `string` |

#### Returns

`void`

### setCameraState()

```ts
setCameraState(state: CameraState): void;
```

Camera of every navigation map (`<MapView mapViewImpl={NAVIGATION_MAP_VIEW_IMPL}>`).
`idle` hands the camera back to the user's gestures and `@rnmapbox/maps` `Camera`.
Guidance switches it to `following`; a pan, zoom, rotate or pitch gesture on any navigation map
switches it to `idle`. Use [addCameraStateListener](#addcamerastatelistener) to follow those changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | [`CameraState`](CameraState.md) |

#### Returns

`void`

### setVoiceMuted()

```ts
setVoiceMuted(muted: boolean): void;
```

Mutes the SDK's voice instructions for all guidance, including `<NavigationView>`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `muted` | `boolean` |

#### Returns

`void`

### startActiveGuidance()

```ts
startActiveGuidance(route: Route, options?: StartActiveGuidanceOptions): Promise<void>;
```

Starts active guidance along `route`, replacing any active guidance, and switches the camera to `following`.
Rejects if `route` was released. Guidance keeps its own reference to the native route until `stopNavigation`,
so `route` can be released at any time.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `route` | [`Route`](../Routes/Route.md) |
| `options?` | [`StartActiveGuidanceOptions`](StartActiveGuidanceOptions.md) |

#### Returns

`Promise`\<`void`\>

### stopNavigation()

```ts
stopNavigation(): void;
```

Stops guidance and removes the route from navigation maps. The camera switches to `idle` and eases back to
north-up.

#### Returns

`void`
