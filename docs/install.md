---
id: install
sidebar_position: 1
title: Install
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Note that those instructions applies to the 10.1 version. Please visit the installation guide for the older 10.0.15 which can be found on the [github v10.0 branch of the project](https://github.com/rnmapbox/maps/tree/v10.0#prerequisite
)
# Configure credentials

Before installing @rnmapbox/maps you'll need to get the proper credentials.
You'll need:
  - secret access token with (Downloads:Read) scope to download iOS and Android SDK from mapbox.
  - public token to use as accessToken when running the app

See [Configure Credential](https://docs.mapbox.com/ios/navigation/guides/get-started/install/#configure-credentials) on mapbox.com for details.

# Install

<Tabs groupId="install-module" queryString defaultValue="npm" values={[
    {label:'NPM', value:'npm'},
    {label:'Yarn', value:'yarn'},
    {label:'Expo', value: 'expo'}
  ]}>
<TabItem value="npm">

```bash
npm install @rnmapbox/maps
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add @rnmapbox/maps
```

</TabItem>
<TabItem value="expo">

```bash
expo install @rnmapbox/maps
```

</TabItem>
</Tabs>

# Configure @rnmapbox/maps

<Tabs groupId="configure-module" queryString defaultValue="ios" values={[
    {label:'iOS', value:'ios'},
    {label:'Android', value:'android'},
    {label:'Expo', value: 'expo'}
  ]}>
<TabItem value="ios">


### Update your podfile
Add the following to your `ios/Podfile`

```ruby
// highlight-start
pre_install do |installer|
  $RNMapboxMaps.pre_install(installer)
end
// highlight-end

post_install do |installer|
// highlight-start
  $RNMapboxMaps.post_install(installer)
// highlight-end
  # ... other post install hooks
end
```

### Verify .netrc
Make sure your `.netrc` is configured with your secret access token, as described by the [mapbox docs](https://docs.mapbox.com/ios/maps/guides/install/#configure-credentials). To verify execute:

```bash
grep -A 4 api.mapbox.com ~/.netrc
```

This should output something like:
```bash
machine api.mapbox.com
  login mapbox
  password sk.ey...
```

### Install dependencies
Run a `pod install` to install required dependencies.

**IMPORTANT: If you are using a new MAC with the M1 or M2 chip, you may run into this issue:**

```bash
[!] CocoaPods could not find compatible versions for pod "MapboxMaps":
  In Podfile:
    rnmapbox-maps (from `../node_modules/@rnmapbox/maps`) was resolved to 10.1.8, which depends on
      MapboxMaps (~> 10.16.4)

None of your spec sources contain a spec satisfying the dependency: `MapboxMaps (~> 10.16.4)`.

You have either:
 * out-of-date source repos which you can update with `pod repo update` or with `pod install --repo-update`.
 * mistyped the name or version.
 * not added the source repo that hosts the Podspec to your Podfile.
```
If this happens, run:

```bash
sudo arch -x86_64 gem install ffi
```
After this is complete, run:
```bash
arch -x86_64 pod repo update
```
Followed by:
```bash
arch -x86_64 pod install
```

</TabItem>
<TabItem value="android">

### Adding mapbox maven repo

Add the following to your android/build.gradle, into the section `allprojects/repositories`

```gradle
// android/build.gradle

// highlight-start
allprojects {
    repositories {
        maven {
            url 'https://api.mapbox.com/downloads/v2/releases/maven'
            authentication {
                basic(BasicAuthentication)
            }
            credentials {
                // Do not change the username below.
                // This should always be `mapbox` (not your username).
                username = 'mapbox'
                // Use the secret token you stored in gradle.properties as the password
                password = project.properties['MAPBOX_DOWNLOADS_TOKEN'] ?: ""
            }
        }
    }
}
// highlight-end
```

### Verify MAPBOX_DOWNLOADS_TOKEN in gradle.properties

Make sure your global `.gradle-properties` is configured with your secret access token, as described by the [mapbox docs](https://docs.mapbox.com/android/maps/guides/install/#configure-credentials). To verify execute:

```bash
grep -R MAPBOX_DOWNLOADS_TOKEN ~/.gradle/gradle.properties
```

This should output something like:
```bash
/Users/foo/.gradle/gradle.properties:MAPBOX_DOWNLOADS_TOKEN=sk.ey...
```

</TabItem>
<TabItem value="expo">

### Plugin configuration

Set `RNMapboxMapsDownloadToken` to your secret token. See the [credentials instructions](https://docs.mapbox.com/ios/maps/guides/install/#configure-credentials) on mapbox.com.

Add `RNMapboxMapsDownloadToken` to the @rnmapbox/maps [config plugin](https://docs.expo.io/guides/config-plugins/) in the [`plugins`](https://docs.expo.io/versions/latest/config/app/#plugins) array of your `app.{json,config.js,config.ts}`:


```json
{
  "expo": {
    "plugins": [
      [
// highlight-start
        "@rnmapbox/maps",
        {
          "RNMapboxMapsDownloadToken": "sk.ey.."
        }
// highlight-end
      ]
    ]
  }
}
```

</TabItem>
</Tabs>

## Rebuild

<Tabs groupId="rebuild" queryString defaultValue="expo" values={[
    {label:'iOS', value: 'ios'},
    {label:'Android', value: 'android'},
    {label:'Expo', value: 'expo'}
  ]}>
<TabItem value="ios">

```sh
npm run ios
```

</TabItem>
<TabItem value="android">

```sh
npm run android
```

</TabItem>
<TabItem value="expo">
React Native Mapbox Maps cannot be used in the "Expo Go" app, because it requires [custom native code](https://docs.expo.dev/workflow/customizing/).

Next, if you are not using EAS Build then you must rebuild your app as described in the ["Adding custom native code"](https://docs.expo.dev/workflow/customizing/) guide to include the config plugin changes. If this command isn't run, you'll not be able use `@rnmapbox/maps`.

```sh
expo prebuild --clean
```

</TabItem>
</Tabs>

## Using V11

@rnmapbox 10.1 supports both `10.16.*` and `11.0.*` versions, but defaults to `10.16.*`. To use `11.0.*` please configure according to your platform:

<Tabs groupId="v11-insructions" queryString defaultValue="expo" values={[
    {label:'iOS', value:'ios'},
    {label:'Android', value:'android'},
    {label:'Expo', value: 'expo'}
  ]}>
<TabItem value="ios">

Add the following to your `ios/Podfile`

```ruby
$RNMapboxMapsVersion = '= 11.0.0'
```

</TabItem>
<TabItem value="android">

Set `RNMapboxMapsVersion` in `android/build.gradle` > `buildscript` > `ext` section

```gradle
buildscript {
    ext {
// highlight-start
        RNMapboxMapsVersion = '11.0.0'
// highlight-end
    }
}
```

</TabItem>
<TabItem value="expo">

Add `RNMapboxMapsVersion` to the @rnmapbox/maps [config plugin](https://docs.expo.io/guides/config-plugins/) to the [`plugins`](https://docs.expo.io/versions/latest/config/app/#plugins) array of your `app.{json,config.js,config.ts}`:

```json
{
  "expo": {
    "plugins": [
      [
        "@rnmapbox/maps",
        {
          ...
// highlight-start
          "RNMapboxMapsVersion": "11.0.0"
// highlight-end
        }
      ]
    ]
  }
}
```

</TabItem>
</Tabs>


## Advanced - using non default version

It's possible to overwrite the native SDK version with `RNMapboxMapsVersion`. But you have to revise it when upgrading `@rnmapbox/maps` as future `@rnmapbox/maps` releases might not support he version you set today.

Follow the instructions above [on using v11](#using-v11), just use 10.* version you'd like.

## Configure permissions for location access

<Tabs groupId="location" queryString defaultValue="expo" values={[
    {label:'iOS', value:'ios'},
    {label:'Android', value:'android'},
    {label:'Expo', value: 'expo'}
  ]}>
<TabItem value="ios">


If you want to show the location puck on the map with the [LocationPuck](components/LocationPuck) component, you'll need to add the following property to your `Info.plist` (see [Mapbox iOS docs](https://docs.mapbox.com/ios/maps/guides/user-location/#request-temporary-access-to-full-accuracy-location) for more info):

```xml
 <key>NSLocationWhenInUseUsageDescription</key>
 <string>Show current location on map.</string>
 ```
</TabItem>
<TabItem value="android">
If you plan to display the user's location on the map or get the user's location information you will need to add the ACCESS_COARSE_LOCATION permission in your application's AndroidManifest.xml. You also need to add ACCESS_FINE_LOCATION permissions if you need access to precise location. You can check whether the user has granted location permission and request permissions if the user hasn't granted them yet using the PermissionsManager. See Mapbox android install [guides](https://docs.mapbox.com/android/maps/guides/install/) for more information.

`android/app/src/main/AndroidManifest.xml`

```xml
<manifest ... >
// highlight-start
  <!-- Always include this permission -->
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

  <!-- Include only if your app benefits from precise location access. -->
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
// highlight-end
</manifest>
```

</TabItem>
<TabItem value="expo">

If you want to show the location puck on the map with the [LocationPuck](components/LocationPuck) component, you can use the [expo-location](https://docs.expo.dev/versions/latest/sdk/location/) plugin to configure the required `NSLocationWhenInUseUsageDescription` property. Install the plugin with `npx expo install expo-location` and add its config plugin to the plugins array of your `app.{json,config.js,config.ts}`:

 ```json
 {
   "expo": {
     "plugins": [
// highlight-start
       [
         "expo-location",
         {
           "locationWhenInUsePermission": "Show current location on map."
         }
       ]
// highlight-end
     ]
   }
 }
 ```
</TabItem>
</Tabs>