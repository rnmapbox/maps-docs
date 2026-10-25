---
id: install
sidebar_position: 2
title: "Install @rnmapbox/navigation"
sidebar_label: Install
description: "Install @rnmapbox/navigation for turn-by-turn navigation in React Native: Mapbox Navigation SDK v3 setup for iOS, Android and the Expo config plugin."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Set up `@rnmapbox/maps` first, following its [install guide](../install.md). `@rnmapbox/navigation` needs `@rnmapbox/maps` 10.3.11 or newer.

`@rnmapbox/navigation` is published under the `next` tag while it's in alpha.

# Install

<Tabs groupId="install-module" queryString defaultValue="npm" values={[
    {label:'NPM', value:'npm'},
    {label:'Yarn', value:'yarn'}
  ]}>
<TabItem value="npm">

```bash
npm install @rnmapbox/navigation@next @rnmapbox/maps
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add @rnmapbox/navigation@next @rnmapbox/maps
```

</TabItem>
</Tabs>

# Configure @rnmapbox/navigation

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

With React Native 0.87+ and Xcode 26, also add the Navigation SDK's binary frameworks to `rnmapbox-maps`' framework search paths, see [Troubleshooting](troubleshooting.md#xcode-26-unable-to-resolve-module-dependency-turf).

### Info.plist

Add `NSLocationWhenInUseUsageDescription`. For `<NavigationView>`, also add `audio` to `UIBackgroundModes`: the SDK's voice controller asserts on it in debug builds.

### Versions

Set these before `use_native_modules!` if you need to:

```ruby
# Navigation SDK version, defaults to 3.23.1. Nav 3.N pins Maps 11.N.
$RNMapboxNavigationVersion = '3.23.1'
# Don't add the Swift package; add mapbox-navigation-ios (products MapboxNavigationCore and
# MapboxNavigationUIKit) yourself.
$RNMapboxNavigationSwiftPackageManager = 'manual'
```

`@rnmapbox/maps`' package requirement comes from `$RNMapboxMapsVersion` (default `~> 11.23.1`) and must be compatible with the Maps version the Navigation SDK pins, otherwise Xcode reports a package resolution error. With a newer Navigation SDK, set `$RNMapboxMapsVersion = '= 11.N.x'` to match.

</TabItem>
<TabItem value="android">

### Adding mapbox maven repo and versions

Add the Mapbox Maven repository, the same one `@rnmapbox/maps` uses, and set the Maps version the Navigation SDK pins:

```groovy
// android/build.gradle
buildscript {
    ext {
        // Nav 3.23.1 pins Maps 11.23.1. Both packages must resolve the same Maps.
        RNMapboxMapsVersion = '11.23.1'
        // Optional, defaults to 3.23.1.
        RNMapboxNavigationVersion = '3.23.1'
    }
}

allprojects {
    repositories {
        maven { url 'https://api.mapbox.com/downloads/v2/releases/maven' }
    }
}
```

`@rnmapbox/navigation` adds a strict constraint on the Maps version its Navigation SDK is built against, so a different `RNMapboxMapsVersion` fails dependency resolution instead of silently mixing versions.

With `targetSdkVersion` 35 or higher both libraries use the `-ndk27` artifacts (16 KB pages). Keep `targetSdkVersion` in the root project `ext`, where both libraries read it.

</TabItem>
<TabItem value="expo">

Use a [development build](https://docs.expo.dev/develop/development-builds/introduction/); Expo Go doesn't include the native SDKs. Add both config plugins to `app.json`:

```json
{
  "expo": {
    "plugins": [
      ["@rnmapbox/maps", { "RNMapboxMapsVersion": "11.23.1" }],
      "@rnmapbox/navigation"
    ]
  }
}
```

The `@rnmapbox/navigation` plugin only changes iOS:

- sets `$RNMapboxMapsSwiftPackageManager = { link: false }` in the Podfile, see the iOS tab;
- adds the Navigation SDK's binary frameworks to `rnmapbox-maps`' framework search paths, which Xcode 26 needs with React Native 0.87+;
- sets `NSLocationWhenInUseUsageDescription`, unless `locationWhenInUsePermission` is `false`.

On Android the `@rnmapbox/maps` plugin already adds the Mapbox Maven repository, and the Navigation SDK's manifest adds the location, foreground service and notification permissions.

### Options

```json
["@rnmapbox/navigation", {
  "RNMapboxNavigationVersion": "3.23.1",
  "locationWhenInUsePermission": "Shows your location during navigation."
}]
```

| Option                        | Description                                                                                                  |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `RNMapboxNavigationVersion`   | Navigation SDK version on both platforms. Set the maps plugin's `RNMapboxMapsVersion` to the matching 11.N. |
| `locationWhenInUsePermission` | iOS `NSLocationWhenInUseUsageDescription`, or `false` to leave it unset.                                     |

For `<NavigationView>` on iOS, also add the `audio` background mode, which the plugin doesn't set:

```json
{
  "expo": {
    "ios": {
      "infoPlist": { "UIBackgroundModes": ["audio"] }
    }
  }
}
```

### Build

```bash
npx expo prebuild --clean
npx expo run:ios
npx expo run:android
```

Rerun `prebuild` after changing plugin options.

</TabItem>
</Tabs>

# Access token

Pass your public access token to both libraries before requesting routes. Navigation is billed to this token.

```tsx
import Mapbox from '@rnmapbox/maps';
import Navigation from '@rnmapbox/navigation';

Mapbox.setAccessToken('pk....');
Navigation.setAccessToken('pk....');
```

Next: [Getting started](getting-started.md).
