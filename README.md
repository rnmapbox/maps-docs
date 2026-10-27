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

Example pages listed in `plugins/snack/allowlist.js` get an "Open in Snack" button (`plugins/snack/remarkSnackLink.js`). It opens an unsaved Snack on the web platform with `@rnmapbox/maps` pinned to `RNMAPBOX_MAPS_VERSION` in `plugins/snack/snackUrl.js`; the example and its helpers are loaded from that release's tag, and the access token is fetched at runtime from rnmapbox/ci-config.

To add an example, build the site, open its link from the built page and check that the map renders without errors in the Snack web preview, then add its `example_rel_path` to the allowlist. Examples importing binary assets or files not in `SHARED_FILES` can't be linked; the build fails if one is allowlisted. When bumping `RNMAPBOX_MAPS_VERSION`, recheck the allowlisted examples.
