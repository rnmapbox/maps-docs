# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Example documentation process:

1.) Each example has metadata, that metadata is extracted by 

```
npx jest __tests__/exportTestInterface.js
# writes updates  docs/examples.json

yarn detox test --configuration ios.debug --debug-synchronization 500 --loglevel trace --record-logs all --take-screenshots all e2e/docScreenshots.e2e.js
# generates screenshots.json and screenshot.pngs



```

### Docosaurus update:

1. See https://docusaurus.io/changelog/3.5.0
2. Update the version

### Open in Snack

Example pages get "Run on web" and "Edit in Snack" buttons (`plugins/snack/remarkSnackLink.js`). "Edit in Snack" opens an unsaved Snack on the web platform with `@rnmapbox/maps` pinned to `RNMAPBOX_MAPS_VERSION` in `plugins/snack/snackUrl.js`; the example and its helpers are loaded from that release's tag, and the access token is fetched at runtime from rnmapbox/ci-config.

Which examples get the Snack button is decided in rnmapbox/maps: the example's `snackSupported` metadata, defaulting to `webSupported`, is written to the `snack_supported` front matter of its page. Pages generated without that field fall back to showing it wherever there is a "Try it on web" link. Examples importing binary assets or files not in `SHARED_FILES` can't be linked; the build fails if one has `snack_supported: true`. When bumping `RNMAPBOX_MAPS_VERSION`, recheck the Snack-enabled examples.
