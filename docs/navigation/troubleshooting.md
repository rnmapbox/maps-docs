---
id: troubleshooting
sidebar_position: 6
title: "Troubleshooting @rnmapbox/navigation"
sidebar_label: Troubleshooting
description: "Fixes for common @rnmapbox/navigation build problems on iOS and Android, such as duplicate MapboxMaps symbols and Maps SDK version conflicts."
---

## iOS: duplicate MapboxMaps symbols

The app fails to link with `duplicate symbol` errors for MapboxMaps symbols, or logs `Class … is implemented in both …` for MapboxMaps classes at launch.

The Navigation SDK is a Swift package that links MapboxMaps into the app. If `@rnmapbox/maps` links its own MapboxMaps too, the app has two copies. Make `@rnmapbox/maps` compile against the Navigation SDK's copy only, before `target` in `ios/Podfile`:

```ruby
$RNMapboxMapsSwiftPackageManager = { link: false }
```

Then run `pod install`. Keep `$RNMapboxMaps.pre_install(installer)` and `$RNMapboxMaps.post_install(installer)` in the Podfile hooks, see [Install](install.md). The Expo config plugin sets this for you.

## Xcode 26: unable to resolve module dependency 'Turf'

```
RNMBXCamera.swift:3:8: error: compilation search paths unable to resolve module dependency: 'Turf'
error: compilation search paths unable to resolve module dependency: 'MapboxCommon'
error: compilation search paths unable to resolve module dependency: 'MapboxCoreMaps'
```

React Native 0.87+ no longer turns off Xcode 26's explicit Swift modules. With `link: false`, `rnmapbox-maps` then only finds the binary frameworks of the Navigation SDK package on a framework search path. Add it in the Podfile's `post_install`:

```ruby
post_install do |installer|
  installer.pods_project.targets.select { |t| t.name == 'rnmapbox-maps' }.each do |target|
    target.build_configurations.each do |config|
      paths = Array(config.build_settings['FRAMEWORK_SEARCH_PATHS'] || '$(inherited)')
      config.build_settings['FRAMEWORK_SEARCH_PATHS'] = paths | ['${SYMROOT}/${CONFIGURATION}${EFFECTIVE_PLATFORM_NAME}/']
    end
  end
  # ...
end
```

The `@rnmapbox/navigation` Expo config plugin already adds this. [rnmapbox/maps#4376](https://github.com/rnmapbox/maps/pull/4376) fixes it in `@rnmapbox/maps` itself; once you're on a release with it, the snippet is redundant but harmless.

## iOS: Swift package resolution error for MapboxMaps

Navigation SDK 3.N pins Maps SDK 11.N exactly, and `@rnmapbox/maps`' package requirement (`$RNMapboxMapsVersion`, default `~> 11.23.1`) must allow it. With a different Navigation SDK version, set `$RNMapboxMapsVersion = '= 11.N.x'` to match.

## Android: Maps version resolution conflict

Gradle fails with an error like:

```
Cannot find a version of 'com.mapbox.maps:android' that satisfies the version constraints
```

`@rnmapbox/navigation` adds a strict constraint on the Maps SDK version its Navigation SDK is built against (Nav 3.N → Maps 11.N), so a different version fails dependency resolution instead of silently mixing versions. Set `@rnmapbox/maps`' version to match, in `android/build.gradle`:

```groovy
buildscript {
    ext {
        RNMapboxMapsVersion = '11.23.1' // matches Navigation SDK 3.23.1
    }
}
```

With Expo, set `RNMapboxMapsVersion` in the `@rnmapbox/maps` plugin options. To override the derived Maps version, set `RNMapboxNavigationMapsVersion`.

Both libraries pick the `-ndk27` artifacts with `targetSdkVersion` 35 or higher. Keep `targetSdkVersion` in the root project `ext`, where both read it, otherwise one of them can pick the other variant.

## iOS: assertion about UIBackgroundModes audio

`<NavigationView>` crashes in a debug build with an assertion from the Navigation SDK's voice controller about the `audio` background mode. Add it to `Info.plist`:

```xml
<key>UIBackgroundModes</key>
<array>
  <string>audio</string>
</array>
```

With Expo, add `"UIBackgroundModes": ["audio"]` to `ios.infoPlist` in `app.json` and run `npx expo prebuild` again.
