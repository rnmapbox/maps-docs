// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '@rnmapbox/maps',
  tagline: 'Community-supported, open-source React Native library for building maps using Mapbox native maps SDK for iOS and Android',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rnmapbox.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rnmapbox', // Usually your GitHub org/user name.
  projectName: 'rnmapbox.github.io', // Usually your repo name.
  deploymentBranch: 'main', // The branch of your docs repo that you are publishing to GitHub pages
  trailingSlash: false,


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: (url) => {
            console.log('url', url);
            if (url.docPath.startsWith('examples/')) {
              return `https://github.com/rnmapbox/maps/tree/main/example/src/examples/${url.docPath.replace('examples/', '').replace('.md', '.tsx')}`
            } else {
              console.log('url', url);
              return url.docPath.replace('components/','').replace('.md', '.tsx');
            }
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '@rnmapbox/maps',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'examplesSidebar',
            position: 'left',
            label: 'Examples',
          },
          {
            type: 'docSidebar',
            sidebarId: 'componentSidebar',
            position: 'left',
            label: 'Components',
          },
          {
            href: 'https://github.com/rnmapbox/maps',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Examples',
                to: '/docs/examples/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/react-native+mapbox',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/channels/1004826913229000704/1092426983696248893',
              },
              {
                label: 'Gitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/rnmapbox/maps',
              },
            ],
          },
        ],
        /* copyright: `Copyright © ${new Date().getFullYear()}. All trademarks and copyrights belong to their respective owners.`, */
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      algolia: {
        appId: 'DSWU223Y1Q',
        apiKey: '23c8b4e45fe8708ecd43e32bdd8ed258',
        indexName: 'rnmapboxio',
        contextualSearch: true,
      }
    }),
};

module.exports = config;
