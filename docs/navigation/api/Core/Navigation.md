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

Defined in: [src/Navigation.ts:80](https://github.com/rnmapbox/navigation/blob/v0.1.1/src/Navigation.ts#L80)

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

The location snapped to the road or route, with its speed limit and road name, during free drive and guidance.

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

### addSessionStateListener()

```ts
addSessionStateListener(listener: (state: SessionState) => void): EventSubscription;
```

Called when the session goes idle, starts free drive or starts guidance, whether from JS, `<NavigationView>` or
the car screen.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`state`: [`SessionState`](SessionState.md)) => `void` |

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

### advanceToNextLeg()

```ts
advanceToNextLeg(): void;
```

Ends the current leg and guides to the next waypoint, e.g. to skip a stop, or after an arrival with
[setAutoAdvanceLegs](#setautoadvancelegs) off. Does nothing on the last leg or without active guidance. Away from the waypoint,
guidance reroutes from where it is; simulated guidance jumps to the start of the new leg and reroutes again.

#### Returns

`void`

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

### getSessionState()

```ts
getSessionState(): SessionState;
```

The state of the navigation session, see [addSessionStateListener](#addsessionstatelistener).

#### Returns

[`SessionState`](SessionState.md)

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

### requestMatchedRoutes()

```ts
requestMatchedRoutes(options: MatchedRouteRequestOptions): Promise<RouteResponse>;
```

Snaps `options.coordinates` to roads with the Mapbox Map Matching API and resolves with a route along them, for
guiding a path the app defines, such as a tour or a delivery run. The route works with [previewRoute](#previewroute) and
[startActiveGuidance](#startactiveguidance) like one from [requestRoutes](#requestroutes); `alternatives` is always empty. Neither SDK
reroutes a matched route: guidance reports going off route and waits for the user to return to it.

Rejects without a request if the options break the Map Matching API's limits, and with `code: 'no_single_match'`
if the API can only match the coordinates as several disconnected pieces. On Android this uses
`requestMapMatching`, which the SDK marks `@ExperimentalPreviewMapboxNavigationAPI`, so it may change in minor
releases.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`MatchedRouteRequestOptions`](../Routes/MatchedRouteRequestOptions.md) |

#### Returns

`Promise`\<[`RouteResponse`](../Routes/RouteResponse.md)\>

### requestRoutes()

```ts
requestRoutes(options: RouteRequestOptions): Promise<RouteResponse>;
```

Requests routes through `options.waypoints`. The routes hold native memory: `release()` the ones you don't keep.
Rejects with `code: 'invalid_options'` with fewer than two waypoints, an option the profile doesn't support,
or a value out of range.

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

### setAutoAdvanceLegs()

```ts
setAutoAdvanceLegs(enabled: boolean): void;
```

Whether guidance moves on to the next leg by itself once it arrives at a waypoint, which is the default. When off,
guidance stays at the waypoint, simulated guidance included, until [advanceToNextLeg](#advancetonextleg); arrivals are still
reported to [addArriveListener](#addarrivelistener). Turning it on while guidance waits at a waypoint doesn't move on; call
[advanceToNextLeg](#advancetonextleg).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `enabled` | `boolean` |

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

### setKeepScreenOn()

```ts
setKeepScreenOn(keepScreenOn: boolean): void;
```

Whether active guidance, `<NavigationView>`'s included, keeps the screen on. On by default. When guidance stops, the
app's own idle timer or keep screen on setting is restored. Turn it off if the app manages that itself.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `keepScreenOn` | `boolean` |

#### Returns

`void`

### setRerouteEnabled()

```ts
setRerouteEnabled(enabled: boolean): void;
```

Whether guidance requests a new route when the user leaves a route from [requestRoutes](#requestroutes). Defaults to `true`.
Matched routes from [requestMatchedRoutes](#requestmatchedroutes) are never rerouted.

Android applies it at once, also during guidance. iOS reads it only when the navigation session is created, which
happens on the first route request or guidance start, so call it before those, e.g. next to
[setAccessToken](#setaccesstoken). On iOS a later call that changes the value has no effect and logs a warning.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `enabled` | `boolean` |

#### Returns

`void`

### setSimulationSpeed()

```ts
setSimulationSpeed(multiplier: number): void;
```

Speed of simulated guidance relative to the route's expected speeds, e.g. `2` drives twice as fast; the default
is `1`. Applies to the running and later simulations. Simulated locations keep reporting the route's speed, not
multiplied. Higher speeds can make guidance go off-route at sharp turns and reroute, and on Android the
simulation doesn't follow reroutes. Throws unless `multiplier` is positive.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `multiplier` | `number` |

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

### setVoiceVolume()

```ts
setVoiceVolume(volume: number): void;
```

Volume of the SDK's voice instructions, from 0 to 1, relative to the device's media volume; clamped to that range.
Independent of [setVoiceMuted](#setvoicemuted). On iOS, it doesn't apply to instructions spoken by the system voice, which
the SDK falls back to when the Mapbox voice is unavailable, e.g. offline. Throws if `volume` is `NaN`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `volume` | `number` |

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

### startFreeDrive()

```ts
startFreeDrive(options?: StartFreeDriveOptions): Promise<void>;
```

Starts free drive: the location is matched to the road without a route, so [addLocationListener](#addlocationlistener) reports
the road name and speed limit, and navigation maps show the puck. It runs until [stopNavigation](#stopnavigation) or a JS
reload; this API never starts it on its own.

During guidance it ends the guidance and keeps the session in free drive. After simulated guidance, the simulated
device stays where guidance stopped unless `simulatedLocation` moves it.

Free drive trips are billed by Mapbox like guidance trips, see
[Navigation SDK pricing](https://www.mapbox.com/pricing#navigation).

Rejects with `code: 'location_permission'` if the app has no location permission and `simulatedLocation` isn't
set; request the permission first.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`StartFreeDriveOptions`](StartFreeDriveOptions.md) |

#### Returns

`Promise`\<`void`\>

### stopNavigation()

```ts
stopNavigation(): void;
```

Stops guidance or free drive and removes the route from navigation maps. The camera switches to `idle` and eases
back to north-up.

#### Returns

`void`
