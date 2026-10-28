---
id: install
sidebar_position: 2
title: "Install @rnmapbox/navigation"
sidebar_label: Install
description: "Install @rnmapbox/navigation for turn-by-turn navigation in React Native: Mapbox Navigation SDK v3 setup for iOS, Android and the Expo config plugin."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Set up `@rnmapbox/maps` first, following its [install guide](../install.md). `@rnmapbox/navigation` 0.1.0 needs `@rnmapbox/maps` `>=10.3.16 <10.4.0` and React Native 0.79+ with the New Architecture.

## Install

Pin `@rnmapbox/maps` to the 10.3 line, so a later 10.4 outside the supported range isn't picked up:

<Tabs groupId="install-module" queryString defaultValue="npm" values={[
    {label:'NPM', value:'npm'},
    {label:'Yarn', value:'yarn'},
    {label:'Expo', value:'expo'}
  ]}>
<TabItem value="npm">

```bash
npm install @rnmapbox/navigation @rnmapbox/maps@~10.3.16
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add @rnmapbox/navigation @rnmapbox/maps@~10.3.16
```

</TabItem>
<TabItem value="expo">

```bash
npx expo install @rnmapbox/navigation @rnmapbox/maps@~10.3.16
```

</TabItem>
</Tabs>

## Configure @rnmapbox/navigation

<Tabs groupId="configure-module" queryString defaultValue="ios" values={[
    {label:'iOS', value:'ios'},
    {label:'Android', value:'android'},
    {label:'Expo', value: 'expo'}
  ]}>
<TabItem value="ios">

The Navigation SDK v3 is only distributed as a Swift package. `@rnmapbox/navigation` links it, and through it MapboxMaps, into the app. `@rnmapbox/maps` must only compile against that MapboxMaps, otherwise the app links two copies of MapboxMaps and fails with duplicate symbols.

### Update your podfile

```ruby
# highlight-next-line
$RNMapboxMapsSwiftPackageManager = { link: false }

target 'YourApp' do
  # ...
  pre_install do |installer|
    $RNMapboxMaps.pre_install(installer)
  end

  post_install do |installer|
    react_native_post_install(installer, ...)
    $RNMapboxMaps.post_install(installer)
  end
end
```

`pod install` adds `MapboxCommon`, `MapboxCoreMaps`, `MapboxNavigationNative` and `Turf` to the frameworks CocoaPods embeds.

### Info.plist

Add `NSLocationWhenInUseUsageDescription`, and `audio` to `UIBackgroundModes` so voice instructions keep playing in the background. The Navigation SDK's voice controller asserts on the `audio` mode in debug builds when guidance starts. Declare it only if your app speaks guidance; App Review rejects unused background modes.

### Versions

Set these before `use_native_modules!` if you need to:

```ruby
# Navigation SDK version, defaults to 3.33.0. Nav 3.N pins Maps 11.N.
$RNMapboxNavigationVersion = '3.33.0'
# Don't add the Swift package; add mapbox-navigation-ios (products MapboxNavigationCore and
# MapboxNavigationUIKit) yourself.
$RNMapboxNavigationSwiftPackageManager = 'manual'
```

`@rnmapbox/maps`' package requirement comes from `$RNMapboxMapsVersion` (default `~> 11.33.0`) and must be compatible with the Maps version the Navigation SDK pins, otherwise Xcode reports a package resolution error. With a newer Navigation SDK, set `$RNMapboxMapsVersion = '= 11.N.x'` to match.

</TabItem>
<TabItem value="android">

### Adding mapbox maven repo and versions

Add the Mapbox Maven repository, the same one `@rnmapbox/maps` uses, and set the Maps version the Navigation SDK pins:

```groovy
// android/build.gradle
buildscript {
    ext {
        // Nav 3.33.0 pins Maps 11.33.0. Both packages must resolve the same Maps.
        RNMapboxMapsVersion = '11.33.0'
        // Optional, defaults to 3.33.0.
        RNMapboxNavigationVersion = '3.33.0'
    }
}

allprojects {
    repositories {
        maven { url 'https://api.mapbox.com/downloads/v2/releases/maven' }
    }
}
```

`@rnmapbox/navigation` adds a strict constraint on the Maps version its Navigation SDK is built against (Nav 3.N → Maps 11.N, or `RNMapboxNavigationMapsVersion`), so a different `RNMapboxMapsVersion` fails dependency resolution instead of silently mixing versions.

With `targetSdkVersion` 35 or higher both libraries use the `-ndk27` artifacts (16 KB pages). Keep `targetSdkVersion` in the root project `ext`, where both libraries read it.

</TabItem>
<TabItem value="expo">

Use a [development build](https://docs.expo.dev/develop/development-builds/introduction/); Expo Go doesn't include the native SDKs. Add both config plugins to `app.json`:

```json
{
  "expo": {
    "plugins": [
      ["@rnmapbox/maps", { "RNMapboxMapsVersion": "11.33.0" }],
      "@rnmapbox/navigation"
    ]
  }
}
```

Keep `RNMapboxMapsVersion` at the Maps SDK version the Navigation SDK pins (11.33.0 for Navigation SDK 3.33.0).

On iOS the `@rnmapbox/navigation` plugin:

- sets `$RNMapboxMapsSwiftPackageManager = { link: false }` in the Podfile, see the iOS tab;
- adds the Navigation SDK's binary frameworks to `rnmapbox-maps`' framework search paths, which Xcode 26 needs with React Native 0.87+;
- sets `NSLocationWhenInUseUsageDescription`, unless `locationWhenInUsePermission` is `false`;
- adds `audio` to `UIBackgroundModes`, so voice instructions keep playing in the background, unless `backgroundAudio` is `false`. Without it the Navigation SDK asserts in debug builds when guidance starts. Turn it off if your app doesn't speak guidance; App Review rejects unused background modes;
- with `carPlay: true`, adds the CarPlay scene and the `com.apple.developer.carplay-maps` entitlement, and with `carPlayRoot: true` also hands the `AppDelegate.swift` React Native factory to CarPlay.

On Android the `@rnmapbox/maps` plugin already adds the Mapbox Maven repository, and the Navigation SDK's manifest adds the location, foreground service and notification permissions. With `androidAuto: true` the `@rnmapbox/navigation` plugin adds the Android Auto service, its metadata and the `androidx.car.app` navigation and surface permissions. With `RNMapboxNavigationVersion` it sets the Navigation SDK version in `gradle.properties`.

### Options

```json
["@rnmapbox/navigation", {
  "RNMapboxNavigationVersion": "3.33.0",
  "locationWhenInUsePermission": "Shows your location during navigation."
}]
```

| Option                        | Description                                                                                                  |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `RNMapboxNavigationVersion`   | Navigation SDK version on both platforms. Set the maps plugin's `RNMapboxMapsVersion` to the matching 11.N. |
| `locationWhenInUsePermission` | iOS `NSLocationWhenInUseUsageDescription`, or `false` to leave it unset. Defaults to a generic navigation string, unless the app already sets one. |
| `backgroundAudio`             | `false` leaves iOS `UIBackgroundModes` unchanged. Defaults to `true`, which adds `audio`.                   |
| `carPlay`                     | iOS CarPlay scene and entitlement. CarPlay is a prototype.                                                   |
| `carPlayRoot`                 | With `carPlay`, lets CarPlay start React Native for `Navigation.registerCarPlayRoot` when it launches the app without its phone UI. Needs a Swift `AppDelegate`. |
| `androidAuto`                 | Android Auto service and permissions. Experimental, not tested on a head unit yet.                          |

Turning `carPlay`, `carPlayRoot` or `androidAuto` off removes what they added on the next prebuild, except the entitlement and the permissions; `prebuild --clean` removes those too. See [CarPlay](https://github.com/rnmapbox/navigation#carplay) and [Android Auto](https://github.com/rnmapbox/navigation#android-auto) in the README for what they show.

### Build

```bash
npx expo prebuild --clean
npx expo run:ios
npx expo run:android
```

Rerun `prebuild` after changing plugin options.

</TabItem>
</Tabs>

## Access token

Pass your public access token to both libraries before requesting routes. Navigation is billed to this token.

```tsx
import Mapbox from '@rnmapbox/maps';
import Navigation from '@rnmapbox/navigation';

Mapbox.setAccessToken('pk....');
Navigation.setAccessToken('pk....');
```

## Location permission

The app must have runtime location permission before guidance on the device's location (`simulate` off). Simulated guidance doesn't need it.

- Android: the Navigation SDK's manifest declares the location permissions, but the app has to request them at runtime, e.g. with `Mapbox.requestAndroidLocationPermissions()` from `@rnmapbox/maps`, which resolves to whether they were granted. It throws on iOS.
- iOS: set `NSLocationWhenInUseUsageDescription` (the Expo plugin sets it). The Navigation SDK asks for when-in-use authorization itself; ask from your own UI first, e.g. with `expo-location`, if you want to explain why.

```tsx
import { Platform } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import Navigation, { type Route } from '@rnmapbox/navigation';

async function startGuidance(route: Route) {
  if (
    Platform.OS === 'android' &&
    !(await Mapbox.requestAndroidLocationPermissions())
  ) {
    return; // Denied: tell the user why navigation needs their location.
  }
  await Navigation.startActiveGuidance(route, { simulate: false });
}
```

See [Configure permissions for location access](../install.md#configure-permissions-for-location-access) in the `@rnmapbox/maps` install guide for the manifest and `Info.plist` entries.

Next: [Getting started](getting-started.md).
