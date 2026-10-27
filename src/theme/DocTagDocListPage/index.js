import React from 'react';
import Head from '@docusaurus/Head';
import Original from '@theme-original/DocTagDocListPage';

export default function DocTagDocListPageWrapper(props) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Original {...props} />
    </>
  );
}
