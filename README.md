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