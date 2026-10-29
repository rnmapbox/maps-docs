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

[rnmapbox/maps#4376](https://github.com/rnmapbox/maps/pull/4376) fixes it in `@rnmapbox/maps` 10.3.16, the minimum version `@rnmapbox/navigation` 0.1.0 supports, so you only see this error with an older `@rnmapbox/maps`; upgrading it fixes the error too. The `@rnmapbox/navigation` Expo config plugin also adds the path; with both, it appears once.

## iOS: Swift package resolution error for MapboxMaps

Navigation SDK 3.N pins Maps SDK 11.N exactly, and `@rnmapbox/maps`' package requirement (`$RNMapboxMapsVersion`, default `~> 11.33.0`) must allow it. With a different Navigation SDK version, set `$RNMapboxMapsVersion = '= 11.N.x'` to match.

## Android: Maps version resolution conflict

Gradle fails with an error like:

```
Cannot find a version of 'com.mapbox.maps:android' that satisfies the version constraints
```

`@rnmapbox/navigation` adds a strict constraint on the Maps SDK version its Navigation SDK is built against (Nav 3.N → Maps 11.N), so a different version fails dependency resolution instead of silently mixing versions. Set `@rnmapbox/maps`' version to match, in `android/build.gradle`:

```groovy
buildscript {
    ext {
        RNMapboxMapsVersion = '11.33.0' // matches Navigation SDK 3.33.0
    }
}
```

With Expo, set `RNMapboxMapsVersion` in the `@rnmapbox/maps` plugin options. To override the derived Maps version, set `RNMapboxNavigationMapsVersion`.

Both libraries pick the `-ndk27` artifacts with `targetSdkVersion` 35 or higher. Keep `targetSdkVersion` in the root project `ext`, where both read it, otherwise one of them can pick the other variant.

## iOS: assertion about UIBackgroundModes audio

Guidance crashes in a debug build, as soon as it starts or when the voice is muted, with an assertion from the Navigation SDK's voice controller about the `audio` background mode. The Expo config plugin always adds it. In a bare app, add it to `Info.plist`:

```xml
<key>UIBackgroundModes</key>
<array>
  <string>audio</string>
</array>
```

With Expo, check that the `@rnmapbox/navigation` plugin is in `app.json` and run `npx expo prebuild` again.
