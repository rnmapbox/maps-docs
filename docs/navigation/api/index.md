---
slug: /navigation/api
sidebar_label: Overview
title: "@rnmapbox/navigation API reference"
description: "API reference for @rnmapbox/navigation, turn-by-turn navigation for React Native."
custom_edit_url: null
---

{/* Generated from rnmapbox/navigation/src by `yarn docs`. Don't edit. */}

# API reference

## Core

| Name | Description |
| ------ | ------ |
| [Navigation](Core/Navigation.md) | The headless navigation API: route requests, the app's single guidance session, and its events. It's also the default export. |
| [NAVIGATION\_MAP\_VIEW\_IMPL](Core/NAVIGATION_MAP_VIEW_IMPL.md) | Pass as `mapViewImpl` to an `@rnmapbox/maps` `MapView` to render the route line, the puck and the navigation camera on it: `<MapView mapViewImpl={NAVIGATION_MAP_VIEW_IMPL}>`. |
| [CameraState](Core/CameraState.md) | Camera of navigation maps. `following` follows the puck, tilted and rotated with the route; `overview` fits the rest of the route; `idle` leaves the map to the user's gestures and `@rnmapbox/maps` `Camera`. |
| [DistanceUnit](Core/DistanceUnit.md) | Unit of the distances navigation UIs show and voice instructions use. |
| [SessionState](Core/SessionState.md) | The app's navigation session: `idle` tracks nothing; `freeDrive` matches the location to the road without a route, see [Navigation.startFreeDrive](Core/Navigation.md#startfreedrive); `activeGuidance` follows a route. |
| [StartActiveGuidanceOptions](Core/StartActiveGuidanceOptions.md) | Options of [Navigation.startActiveGuidance](Core/Navigation.md#startactiveguidance). |
| [StartFreeDriveOptions](Core/StartFreeDriveOptions.md) | Options of [Navigation.startFreeDrive](Core/Navigation.md#startfreedrive). |

## Components

| Name | Description |
| ------ | ------ |
| [CarMap](Components/CarMap.md) | Adds its `@rnmapbox/maps` children to the map on the car screen (CarPlay, Android Auto) instead of the phone's. Render it in the component passed to [Navigation.registerCarPlayRoot](Core/Navigation.md#registercarplayroot), and in the app for Android Auto and for iOS apps without a CarPlay root; while a CarPlay root is mounted, only its `<CarMap>` renders. It takes no space on the phone and renders nothing while no car screen shows a map. Views such as `MarkerView` and taps on the map aren't supported on car screens. |
| [NavigationView](Components/NavigationView.md) | Full-screen turn-by-turn navigation UI: `NavigationViewController` from `MapboxNavigationUIKit` on iOS, and an equivalent built from the Navigation SDK UI components on Android. |
| [NavigationViewport](Components/NavigationViewport.md) | Configures the navigation camera of the `@rnmapbox/maps` `MapView` it's a child of: `<MapView mapViewImpl={NAVIGATION_MAP_VIEW_IMPL}><NavigationViewport padding={{ bottom: 120 }} /></MapView>`. Without it the SDK defaults apply: the safe area plus a small margin on iOS, no padding on Android. |
| [RNNavigationView](Components/RNNavigationView.md) | `<NavigationView>` built in React Native from the headless API, on an `@rnmapbox/maps` navigation map: a maneuver banner with road shields, exit numbers and lanes, speed limit, road name, trip progress, mute, overview/recenter and end buttons, and an arrival card. Navigation maps draw the alternative routes of its guidance; tapping one switches to it. |
| [CarMapActivity](Components/CarMapActivity.md) | What the car screen shows, passed to a [CarMap](Components/CarMap.md) render function. |
| [CarMapProps](Components/CarMapProps.md) | Props of [CarMap](Components/CarMap.md). |
| [NavigationViewError](Components/NavigationViewError.md) | Passed to `onError` of [NavigationView](Components/NavigationView.md) and [RNNavigationView](Components/RNNavigationView.md). |
| [NavigationViewportProps](Components/NavigationViewportProps.md) | Props of [NavigationViewport](Components/NavigationViewport.md). |
| [NavigationViewProps](Components/NavigationViewProps.md) | Props of [NavigationView](Components/NavigationView.md). Pass either `route` or `waypoints`. |
| [RNNavigationViewAppearance](Components/RNNavigationViewAppearance.md) | `auto` follows the system's dark mode, like `<NavigationView>`. |
| [RNNavigationViewProps](Components/RNNavigationViewProps.md) | Props of [RNNavigationView](Components/RNNavigationView.md): [NavigationViewProps](Components/NavigationViewProps.md), plus the props below. |
| [RouteLineStyle](Components/RouteLineStyle.md) | Colors of the route lines the Navigation SDK draws on a navigation map. Unset colors keep the SDK defaults. |
| [ViewportPadding](Components/ViewportPadding.md) | Points from the map's edges, ignoring the safe area. |

## Routes

| Name | Description |
| ------ | ------ |
| [Route](Routes/Route.md) | A route from [Navigation.requestRoutes](Core/Navigation.md#requestroutes), backed by the native SDK route. The getters read a copy taken when the route was created, so they're synchronous. Routes don't survive a JS reload. |
| [LineString](Routes/LineString.md) | GeoJSON LineString. |
| [MatchedRouteRequestOptions](Routes/MatchedRouteRequestOptions.md) | Options of [Navigation.requestMatchedRoutes](Core/Navigation.md#requestmatchedroutes). |
| [Position](Routes/Position.md) | GeoJSON order, same as `@rnmapbox/maps`. |
| [RouteLeg](Routes/RouteLeg.md) | The part of a route between two consecutive waypoints. |
| [RouteRequestOptions](Routes/RouteRequestOptions.md) | Options of [Navigation.requestRoutes](Core/Navigation.md#requestroutes). |
| [RouteResponse](Routes/RouteResponse.md) | Result of [Navigation.requestRoutes](Core/Navigation.md#requestroutes). `alternatives` is empty unless requested. |
| [RouteStats](Routes/RouteStats.md) | From [Navigation.getRouteStats](Core/Navigation.md#getroutestats). |
| [RouteStep](Routes/RouteStep.md) | A maneuver and the road up to the next one, in `steps` of [RouteLeg](Routes/RouteLeg.md). |
| [Waypoint](Routes/Waypoint.md) | A coordinate, or a coordinate with options. |

## Events

| Type Alias | Description |
| ------ | ------ |
| [ArriveEvent](Events/ArriveEvent.md) | From [Navigation.addArriveListener](Core/Navigation.md#addarrivelistener) and `onArrive`. |
| [BannerComponent](Events/BannerComponent.md) | A piece of a banner instruction, see the Mapbox Directions `banner_instructions` components. |
| [Lane](Events/Lane.md) | A lane at the next maneuver, in `lanes` of [RouteProgressEvent](Events/RouteProgressEvent.md). |
| [LocationEvent](Events/LocationEvent.md) | The location snapped to the road or the route. |
| [RouteChangeEvent](Events/RouteChangeEvent.md) | From [Navigation.addRouteChangeListener](Core/Navigation.md#addroutechangelistener). |
| [RouteProgressEvent](Events/RouteProgressEvent.md) | From [Navigation.addRouteProgressListener](Core/Navigation.md#addrouteprogresslistener) and `onRouteProgress`. |
| [SpeedLimit](Events/SpeedLimit.md) | Posted speed limit, in [LocationEvent](Events/LocationEvent.md). |
| [VoiceInstructionEvent](Events/VoiceInstructionEvent.md) | From [Navigation.addVoiceInstructionListener](Core/Navigation.md#addvoiceinstructionlistener). |
