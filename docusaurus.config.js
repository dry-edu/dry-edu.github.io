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
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'computer-and-mobile-applications',
        path: 'computer-and-mobile-applications',
        routeBasePath: 'computer-and-mobile-applications',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/cahs-cs/cahs-cs.github.io/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'three-techniques',
        path: 'three-techniques',
        routeBasePath: 'three-techniques',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/cahs-cs/cahs-cs.github.io/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'information-technology',
        path: 'information-technology',
        routeBasePath: 'information-technology',
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
            to: '/computer-and-mobile-applications/', 
            label: 'Computer and Mobile Applications',
            position: 'left',
            activeBaseRegex: `/computer-and-mobile-applications/`,
          },
          {
            to: '/three-techniques/',    
            label: '3D Techniques',
            position: 'left',
            activeBaseRegex: `/three-techniques/`,
          },
          {
            to: '/information-technology/',  
            label: 'Information Technology',
            position: 'left',
            activeBaseRegex: `/information-technology/`,
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
                label: 'Computer and Mobile Applications',
                to: '/computer-and-mobile-applications/',
              },
              {
                label: '3D Techniques',
                to: '/three-techniques/',
              },
              {
                label: 'Information Technology',
                to: '/information-technology/',
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
