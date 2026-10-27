const path = require('path');

// Snackager caches npm metadata for ~1h, so pin the release the docs were generated from.
// Example sources are loaded from the same tag, so the Snack runs code written for that release.
const RNMAPBOX_MAPS_VERSION = '10.3.14';

const EXAMPLE_SRC_URL = `https://raw.githubusercontent.com/rnmapbox/maps/v${RNMAPBOX_MAPS_VERSION}/example/src`;

const TOKEN_URL =
  'https://raw.githubusercontent.com/rnmapbox/ci-config/main/mapbox-snack-token.txt';

// Versions from the example app's package.json; unlisted packages get Snack's default.
const DEPENDENCY_VERSIONS = {
  '@rnmapbox/maps': RNMAPBOX_MAPS_VERSION,
  '@rneui/base': '4.0.0-rc.8',
  '@turf/bbox': '6.5.0',
  '@turf/helpers': '6.5.0',
  // 6.5.0 needs @babel/runtime, which Snackager can't bundle.
  '@turf/length': '6.3.0',
  '@turf/meta': '6.5.0',
  '@mapbox/geo-viewport': '0.5.0',
};

// Dependencies Snackager leaves out of the bundles of these packages.
const PEER_DEPENDENCIES = {
  '@rneui/base': ['@expo/vector-icons'],
  '@turf/bbox': ['@turf/helpers', '@turf/meta'],
  '@turf/length': ['@turf/meta'],
};

const BUILTIN_MODULES = new Set(['react', 'react-native']);

// Relative imports of the examples, resolved to the files at the pinned tag.
const SHARED_FILES = {
  'examples/common/Bubble': {file: 'examples/common/Bubble.js', dependencies: ['prop-types']},
  'examples/common/BaseExamplePropTypes': {
    file: 'examples/common/BaseExamplePropTypes.ts',
    dependencies: ['prop-types'],
  },
  'examples/common/ExampleMetadata': {file: 'examples/common/ExampleMetadata.ts'},
  'styles/sheet': {file: 'styles/sheet.js'},
  'styles/colors': {file: 'styles/colors.js'},
  utils: {file: 'utils/index.js'},
};

const IMPORT_RE = /^import\s+(type\s+)?([\s\S]*?)\s+from\s+'([^']+)';?/gm;

const REQUIRE_RE = /require\('([^']+)'\)/g;

function isTypeOnlyClause(clause) {
  return /^\{[^}]*\}$/.test(clause) && clause.slice(1, -1).split(',').every((s) => /^\s*(type\s|$)/.test(s));
}

function parseImports(code) {
  return [
    ...[...code.matchAll(IMPORT_RE)].map(([, typeOnly, clause, source]) => ({
      source,
      typeOnly: !!typeOnly || isTypeOnlyClause(clause),
    })),
    ...[...code.matchAll(REQUIRE_RE)].map(([, source]) => ({source, typeOnly: false})),
  ];
}

function appCode(exampleModule, safeArea) {
  const [Root, rootImport] = safeArea
    ? ['SafeAreaProvider', "import { SafeAreaProvider } from 'react-native-safe-area-context';\n"]
    : ['View', ''];
  return `import React, { useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';
${rootImport}import Mapbox from '@rnmapbox/maps';
import mapboxgl from 'mapbox-gl';

import Example from './${exampleModule}';

// Public token restricted to the Snack web player, rotated in rnmapbox/ci-config.
const TOKEN_URL = '${TOKEN_URL}';

if (Platform.OS === 'web') {
  const worker = \`importScripts('https://api.mapbox.com/mapbox-gl-js/v\${mapboxgl.version}/mapbox-gl-csp-worker.js');\`;
  Mapbox.setWorkerUrl(
    URL.createObjectURL(new Blob([worker], { type: 'text/javascript' })),
  );
}

export default function App() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const token = atob((await (await fetch(TOKEN_URL)).text()).trim());
        Mapbox.setAccessToken(token);
        setReady(true);
      } catch (e) {
        setError(String(e));
      }
    })();
  }, []);
  if (error) return <Text>{error}</Text>;
  if (!ready) return <Text>Loading access token…</Text>;
  return (
    <${Root} style={{ flex: 1 }}>
      <Example label="Example" onDismissExample={() => {}} />
    </${Root}>
  );
}
`;
}

/**
 * Builds an unsaved snack.expo.dev URL running the example on web, or returns null when the
 * example imports something the Snack can't provide.
 *
 * The example is referenced by URL rather than inlined: snack.expo.dev rejects URLs over ~15k
 * characters with HTTP 431.
 *
 * @param {string} relPath example path relative to example/src/examples, e.g. `Map/ShowMap.tsx`
 * @param {string} code example source as shown in the docs, used to find its imports
 */
function snackUrl(relPath, code) {
  const exampleFile = `src/examples/${relPath}`;
  const exampleDir = path.posix.dirname(exampleFile);

  const files = {
    [exampleFile]: {type: 'CODE', url: `${EXAMPLE_SRC_URL}/examples/${relPath}`},
  };
  const dependencies = new Set(['@rnmapbox/maps', 'mapbox-gl']);

  for (const {source, typeOnly} of parseImports(code)) {
    if (typeOnly || BUILTIN_MODULES.has(source)) continue;
    if (!source.startsWith('.')) {
      dependencies.add(source.startsWith('@') ? source.split('/').slice(0, 2).join('/') : source.split('/')[0]);
      continue;
    }
    const target = path.posix.join(exampleDir, source).replace(/^src\//, '');
    // Snack evaluates binary files given by URL as code, so only JSON assets work.
    if (target.startsWith('assets/') && target.endsWith('.json')) {
      files[`src/${target}`] = {type: 'CODE', url: `${EXAMPLE_SRC_URL}/${target}`};
      continue;
    }
    const shared = SHARED_FILES[target];
    if (!shared) return null;
    files[`src/${shared.file}`] = {type: 'CODE', url: `${EXAMPLE_SRC_URL}/${shared.file}`};
    (shared.dependencies || []).forEach((d) => dependencies.add(d));
  }

  for (const dependency of [...dependencies]) {
    (PEER_DEPENDENCIES[dependency] || []).forEach((d) => dependencies.add(d));
  }

  files['App.js'] = {
    type: 'CODE',
    contents: appCode(
      exampleFile.replace(/\.[jt]sx?$/, ''),
      dependencies.has('react-native-safe-area-context'),
    ),
  };

  const params = new URLSearchParams({
    platform: 'web',
    supportedPlatforms: 'web',
    name: `@rnmapbox/maps ${path.posix.basename(relPath).replace(/\.[jt]sx?$/, '')} example`,
    dependencies: [...dependencies]
      .map((d) => (DEPENDENCY_VERSIONS[d] ? `${d}@${DEPENDENCY_VERSIONS[d]}` : d))
      .join(','),
    files: JSON.stringify(files),
  });
  return `https://snack.expo.dev/?${params.toString().replace(/\+/g, '%20')}`;
}

module.exports = {snackUrl};
