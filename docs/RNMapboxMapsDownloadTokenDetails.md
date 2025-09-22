Please read this before using *RNMapboxMapsDownloadToken* in your expo plugin config.

`RNMapboxMapsDownloadToken`: was designed for `eas` service, where builds are executed. If you build locally, just set in your .netrc (iOS) or in `~/.gradle/gradle.properties` (android). Note that if you build on eas, the download token will be part of your .apk.
