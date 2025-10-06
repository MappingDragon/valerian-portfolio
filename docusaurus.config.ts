import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Theadora Valerian',
  tagline: 'Senior Technical Writer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mappingdragon.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/valerian-portfolio/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MappingDragon', // Usually your GitHub org/user name.
  projectName: 'valerian-portfolio', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    navbar: {
      title: 'Theadora\'s Portfolio',
      logo: {
        alt: '',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/work_samples',
          type: 'docSidebar',
          sidebarId: 'portfolioSidebar',
          position: 'left',
          label: 'Work Samples',
        },
        {
          to: 'docs/resume',
          position: 'left',
          label: 'Resume',
        },
        {
          to: 'docs/recommendations',
          position: 'left',
          label: 'Recommendations',
        },
        {
          href: 'https://www.linkedin.com/in/theadora-valerian/',
          position: 'right',
          label: 'LinkedIn',
          className: 'navbar--linkedin-link',
          'arial-label': 'LinkedIn Profile',
        },
        {
          href: 'https://github.com/MappingDragon/valerian-portfolio',
          position: 'right',
          className: 'navbar--github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/theadora-valerian/',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/MappingDragon/',
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
