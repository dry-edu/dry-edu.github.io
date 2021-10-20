// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mr. Mankin\'s Classroom',
  tagline: 'Computer Science',
  url: 'https://dry-edu.github.edu',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dry-edu', // Usually your GitHub org/user name.
  projectName: 'dry-edu.github.io', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs',
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/dry-edu/dry-edu.github.io/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'syllabus-template',
        path: 'syllabus-template',
        routeBasePath: 'syllabus-template',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/dry-edu/dry-edu.github.io/edit/main/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Mr. Mankin\'s Classroom',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/syllabus-template/',    // ./docs/Intro.md
            label: 'Syllabus Template',
            position: 'left',
            activeBaseRegex: `/syllabus-template/`,
          },
          {
            href: 'https://github.com/dry-edu/dry-edu.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Courses',
            items: [
              {
                label: 'Syllabus Template',
                to: '/syllabus-template/',
              },
            ],
          },
          {
            title: 'Personal Links',
            items: [
              {
                label: 'Personal Website',
                href: 'https://DryCreations.netlify.com',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/dry-edu/dry-edu.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hayden Mankin Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
