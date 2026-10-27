import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {PageMetadata} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Metadata from '@theme-original/DocItem/Metadata';

const NAVIGATION_PACKAGE = '@rnmapbox/navigation';

function NavigationMetadata() {
  const {metadata, frontMatter, assets} = useDoc();
  const {siteConfig} = useDocusaurusContext();
  const title = metadata.title.includes(NAVIGATION_PACKAGE)
    ? metadata.title
    : `${metadata.title} ${siteConfig.titleDelimiter} ${NAVIGATION_PACKAGE}`;
  return (
    <>
      <PageMetadata
        image={assets.image ?? frontMatter.image ?? '/img/navigation/social-card.jpg'}
      />
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
    </>
  );
}

export default function MetadataWrapper(props) {
  const {metadata} = useDoc();
  return (
    <>
      <Metadata {...props} />
      {metadata.permalink.startsWith('/docs/navigation/') && <NavigationMetadata />}
    </>
  );
}
