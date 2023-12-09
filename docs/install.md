---
id: install
sidebar_position: 1
title: Install
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Note that those instructions applies to the 10.1 version (currently rc phase in @next channel). Please visit the installation guide for the released 10.0.15 which can be found on the [github v10.0 branch of the project](https://github.com/rnmapbox/maps/tree/v10.0#prerequisite
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
npm install @rnmapbox/maps@next
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add @rnmapbox/maps@next
```

</TabItem>
<TabItem value="expo">

```bash
expo install @rnmapbox/maps@next
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

