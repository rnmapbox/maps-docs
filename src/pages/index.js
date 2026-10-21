import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div style={{}}>
          <img src="/img/intro-examples.png" alt="rnmapbox screenshots" />
        </div>
        <div style={{margin: "1rem 0"}}>
          <Link className="button button--secondary" to="/docs/navigation/overview">
            Turn-by-turn navigation: @rnmapbox/navigation (alpha)
          </Link>
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          <img src="/img/react-native-logo.svg" alt="React-Native logo" style={{height: "100px", marginRight: "40px"}} />
          <img src="/img/mapbox-logo.svg" alt="Mapbox logo" style={{height: "100px"}} />
        </div>
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`React Native Mapbox`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
