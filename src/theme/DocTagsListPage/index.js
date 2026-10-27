import React from 'react';
import Head from '@docusaurus/Head';
import Original from '@theme-original/DocTagsListPage';

export default function DocTagsListPageWrapper(props) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Original {...props} />
    </>
  );
}
