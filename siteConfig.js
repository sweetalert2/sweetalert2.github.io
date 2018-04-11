const remarkablePluginExampleCode = require('remarkable-plugin-example-code')

const repoUrl = 'https://github.com/sweetalert2/sweetalert2'

const siteConfig = {
  repoUrl,
  organizationName: 'SweetAlert2',
  title: 'SweetAlert2',
  projectName: 'SweetAlert2',
  tagline: 'A beautiful, responsive, customizable and accessible (WAI-ARIA) replacement for JavaScript\'s popup boxes',
  url: 'https://sweetalert2.github.io',
  baseUrl: '/',
  link: path => siteConfig.baseUrl + path,
  customDocsPath: 'sweetalert2.github.io/docs',
  headerLinks: [
    {doc: 'examples-basic', label: 'Examples'},
    {doc: 'installing', label: 'Guides'},
    {doc: 'options', label: 'API'},
    {page: 'help', label: 'Help'},
    {href: repoUrl, label: 'GitHub'}
  ],
  headerIcon: 'img/sweetalert2-logo.png',
  footerIcon: 'img/sweetalert2-icon.png',
  favicon: 'img/favicon.png',
  ogImage: 'img/sweetalert2-logo.png',
  colors: {
    primaryColor: '#4F5E75',
    secondaryColor: '#FD7871'
  },
  /* fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  }, */
  copyright: '❤',
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default'
  },
  onPageNav: 'separate',
  disableHeaderTitle: true,
  markdownPlugins: [remarkablePluginExampleCode],
  gaTrackingId: 'UA-83618163-1'
}

module.exports = siteConfig
