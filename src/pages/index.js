import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import LiveMapDemo from '@site/src/components/LiveMapDemo';

import styles from './index.module.css';

const PLATFORMS = ['iOS', 'Android', 'Web (experimental)', 'Expo', 'New Architecture'];

const FEATURES = [
  {
    title: 'Native Mapbox SDK v11',
    to: '/docs/install',
    body: 'Maps are rendered by the Mapbox Maps SDK for iOS and Android, not a WebView, so gestures, 3D terrain and large datasets stay smooth.',
  },
  {
    title: 'Declarative sources and layers',
    to: '/docs/components/MapView',
    body: 'Compose ShapeSource, VectorSource, SymbolLayer, CircleLayer and more as React components, styled with Mapbox style-spec expressions.',
  },
  {
    title: 'Camera, markers and location',
    to: '/docs/examples',
    body: 'Animate the camera, place React views as markers, show the user location puck and query rendered features.',
  },
  {
    title: 'Offline maps',
    to: '/docs/examples/CacheOffline/OfflineExample',
    body: 'Download regions and tile packs for use without a connection, and manage the cache from JavaScript.',
  },
  {
    title: 'Expo config plugin',
    to: '/docs/install',
    body: 'Works with Expo prebuild and development builds. Built for the React Native New Architecture (0.79+).',
  },
  {
    title: 'Turn-by-turn navigation',
    to: '/docs/navigation/overview',
    body: '@rnmapbox/navigation (alpha) adds routing and guidance on top of the same map, powered by the Mapbox Navigation SDK.',
  },
];

const SNIPPET = `import Mapbox, {
  MapView,
  Camera,
  ShapeSource,
  CircleLayer,
} from '@rnmapbox/maps';

Mapbox.setAccessToken('<your public token>');

const QUAKES_URL = 'https://example.com/quakes.geojson';

export default function App() {
  return (
    <MapView style={{flex: 1}} styleURL={Mapbox.StyleURL.Dark}>
      <Camera zoomLevel={5} centerCoordinate={[-121.5, 38]} />
      <ShapeSource id="quakes" url={QUAKES_URL}>
        <CircleLayer
          id="quake-dots"
          style={{circleRadius: 6, circleColor: '#fbb03b'}}
        />
      </ShapeSource>
    </MapView>
  );
}`;

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>@rnmapbox/maps</p>
          <h1 className={styles.title}>Mapbox maps for React Native</h1>
          <p className={styles.subtitle}>
            A community-supported, open-source library for building interactive maps with the native Mapbox
            Maps SDK on iOS and Android.
          </p>
          <ul className={styles.platforms} aria-label="Supported platforms">
            {PLATFORMS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className={styles.ctas}>
            <Link className={clsx('button button--primary button--lg', styles.primary)} to="/docs/install">
              Get started
            </Link>
            <Link className="button button--secondary button--outline button--lg" to="/docs/examples">
              Browse examples
            </Link>
          </div>
          <pre className={styles.install}>
            <code>npm install @rnmapbox/maps</code>
          </pre>
        </div>
        <LiveMapDemo />
      </div>
    </header>
  );
}

function Features() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Everything you need to ship maps</h2>
        <div className={styles.features}>
          {FEATURES.map(({title, to, body}) => (
            <Link key={title} to={to} className={styles.feature}>
              <h3>{title}</h3>
              <p>{body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeAndShowcase() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className={clsx('container', styles.split)}>
        <div className={styles.splitText}>
          <h2 className={styles.sectionTitle}>Maps as React components</h2>
          <p>
            Sources and layers are plain components: change props and the native map updates. The same code runs
            on iOS, Android and, experimentally, the web.
          </p>
          <CodeBlock language="jsx">{SNIPPET}</CodeBlock>
        </div>
        <img
          className={styles.showcase}
          src={useBaseUrl('/img/home/intro-examples.webp')}
          width={1200}
          height={823}
          loading="lazy"
          decoding="async"
          alt="Three iPhone screenshots: a street map of New York, a topographic map of Yosemite Valley and a 3D terrain view"
        />
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className={styles.section}>
      <div className={clsx('container', styles.community)}>
        <h2 className={styles.sectionTitle}>Built by the community</h2>
        <p>
          @rnmapbox/maps is open source and maintained by the community. Questions, bug reports and pull requests
          are welcome.
        </p>
        <div className={styles.ctas}>
          <Link className={clsx('button button--primary', styles.primary)} href="https://github.com/rnmapbox/maps">
            GitHub
          </Link>
          <Link
            className="button button--secondary button--outline"
            href="https://discord.com/channels/1004826913229000704/1092426983696248893">
            Discord
          </Link>
          <Link
            className="button button--secondary button--outline"
            href="https://stackoverflow.com/questions/tagged/react-native+mapbox">
            Stack Overflow
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Mapbox maps and turn-by-turn navigation for React Native"
      description="@rnmapbox/maps is a community-supported React Native library for Mapbox maps on iOS and Android. @rnmapbox/navigation adds turn-by-turn navigation.">
      <Hero />
      <main>
        <Features />
        <CodeAndShowcase />
        <Community />
      </main>
    </Layout>
  );
}
