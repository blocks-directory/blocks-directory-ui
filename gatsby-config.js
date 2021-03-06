// const path = require('path')

const env = process.env.REACT_APP_ENV || 'dev'

module.exports = {
  siteMetadata: {
    title: 'blocks.directory Blog',
    description: 'We believe in reusable microservices.',
    env,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'UA-158078359-1',
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
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
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
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

    // Temporary disabled https://github.com/gatsbyjs/gatsby/issues/11006
    // `gatsby-plugin-offline`,
    'gatsby-plugin-remove-serviceworker',

    // 'gatsby-plugin-sitemap',
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
      options: { prefixes: ['/projects/*', '/project/*'] },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'quicksand:300,400,500,600,700',
        ],
        display: 'block',
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-layout',
  ],
}
