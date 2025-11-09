---
id: install
sidebar_position: 1
title: Install
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Note that those instructions applies to the 10.2.* versions of @rnmapbox/maps.
# Configure credentials

Before installing @rnmapbox/maps you'll need to get your Mapbox access token.

To grab your token, open up a browser and go to your account's tokens page: https://console.mapbox.com/account/access-tokens/

On the top of your token list, copy your **Default Public Token**. The public token starts with `pk.ey`.

For more details, see [Configure Credentials](https://docs.mapbox.com/ios/maps/guides/install/#part-1-create-and-configure-your-credentials) on mapbox.com.

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
        }
    }
}
// highlight-end
```

</TabItem>
<TabItem value="expo">

### Plugin configuration

Add the @rnmapbox/maps [config plugin](https://docs.expo.io/guides/config-plugins/) to the [`plugins`](https://docs.expo.io/versions/latest/config/app/#plugins) array of your `app.{json,config.js,config.ts}`:

```json
{
  "expo": {
    "plugins": [
// highlight-start
      "@rnmapbox/maps"
// highlight-end
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
(cd ios && pod install)
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

## Customizing Mapbox Version

@rnmapbox/maps 10.2 defaults to Mapbox Maps SDK `11.0.*`.

> **Note:** Mapbox Maps SDK v10 is now deprecated. We recommend using v11 for new projects and upgrading existing projects to v11.

### Using V10 (Deprecated)

If you need to use the deprecated `10.16.*` version, you can configure it according to your platform:

<Tabs groupId="v10-instructions" queryString defaultValue="expo" values={[
    {label:'iOS', value:'ios'},
    {label:'Android', value:'android'},
    {label:'Expo', value: 'expo'}
  ]}>
<TabItem value="ios">

Add the following to your `ios/Podfile`

```ruby
$RNMapboxMapsVersion = '~> 10.16.0'
```

</TabItem>
<TabItem value="android">

Set `RNMapboxMapsVersion` in `android/build.gradle` > `buildscript` > `ext` section

```gradle
buildscript {
    ext {
// highlight-start
        RNMapboxMapsVersion = '10.16.4'
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
          "RNMapboxMapsVersion": "10.16.4"
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

It's possible to overwrite the native SDK version with `RNMapboxMapsVersion`. However, you should revise this when upgrading `@rnmapbox/maps` as future releases might not support the version you set.

To use a specific v11 version, follow the instructions above [for customizing the Mapbox version](#customizing-mapbox-version), specifying your desired `11.*` version (e.g., `11.0.0`, `11.1.0`, etc.).

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
