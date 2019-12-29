// const path = require('path')

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: path.join(__dirname, 'static', 'images'),
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: config.siteTitle,
    //     short_name: config.siteTitle,
    //     start_url: '/',
    //     background_color: config.background_color,
    //     theme_color: config.theme_color,
    //     display: config.display,
    //     icon: config.icon,
    //   },
    // },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'UA-148833799-1',
    //     head: true,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //   },
    // },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://eugene-draitsev.surge.sh/',
    //     sitemap: 'https://eugene-draitsev.surge.sh//sitemap.xml',
    //     env: {
    //       development: {
    //         policy: [{ userAgent: '*', disallow: ['/'] }],
    //       },
    //       production: {
    //         policy: [{ userAgent: '*', allow: '/' }],
    //       },
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/projects/*'] },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'quicksand:300,400,500,600,700',
        ],
        display: 'swap',
      },
    },
  ],
}
