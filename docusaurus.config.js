// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mr. Mankin\'s Classroom',
  tagline: 'Computer Science',
  url: 'https://cahs-cs.github.edu',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cahs-cs', // Usually your GitHub org/user name.
  projectName: 'cahs-cs.github.io', // Usually your repo name.

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
          editUrl: 'https://github.com/cahs-cs/cahs-cs.github.io/edit/main/',
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
        editUrl: 'https://github.com/cahs-cs/cahs-cs.github.io/edit/main/',
      },
      '@docusaurus/plugin-content-docs',
      {
        id: 'coding',
        path: 'coding',
        routeBasePath: 'coding',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/cahs-cs/cahs-cs.github.io/edit/main/',
      },
      '@docusaurus/plugin-content-docs',
      {
        id: 'computer-graphics',
        path: 'computer-graphics',
        routeBasePath: 'computer-graphics',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/cahs-cs/cahs-cs.github.io/edit/main/',
      },
      '@docusaurus/plugin-content-docs',
      {
        id: 'cybersecurity',
        path: 'cybersecurity',
        routeBasePath: 'cybersecurity',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/cahs-cs/cahs-cs.github.io/edit/main/',
      },
      '@docusaurus/plugin-content-docs',
      {
        id: 'game-design',
        path: 'game-design',
        routeBasePath: 'game-design',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/cahs-cs/cahs-cs.github.io/edit/main/',
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
            to: '/coding/', 
            label: 'Coding',
            position: 'left',
            activeBaseRegex: `/coding/`,
          },
          {
            to: '/cybersecurity/',    
            label: 'Cybersecurity',
            position: 'left',
            activeBaseRegex: `/cybersecurity/`,
          },
          {
            to: '/computer-graphics/',  
            label: 'Computer Graphics',
            position: 'left',
            activeBaseRegex: `/computer-graphics/`,
          },
          {
            to: '/game-design/',  
            label: 'Game Design',
            position: 'left',
            activeBaseRegex: `/game-design/`,
          },
          {
            href: 'https://github.com/cahs-cs/cahs-cs.github.io',
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
                label: 'Coding',
                to: '/coding/',
              },
              {
                label: 'Cybersecurity',
                to: '/cybersecurity/',
              },
              {
                label: 'Computer Graphics',
                to: '/computer-graphics/',
              },
              {
                label: 'Game Design',
                to: '/game-design/',
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
                href: 'https://github.com/cahs-cs/cahs-cs.github.io',
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
