const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: ``,
    description: `Gatsby starter styled with Tailwind`,
    author: `@taylorbryant`,
    apiKey: '9dd384a3-17a0-4fae-b6c6-7e979e6a982b',
    recaptchaKey:'6LdmSvEUAAAAAEzb7u2hvzONKBWfBkmIjf2BRfPb',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Audio Text Portal`,
        short_name: `ATP`,
        start_url: `/`,
        background_color: `#6D6E71`,
        theme_color: `#FBB040`,
        display: `standalone`,
        icon: 'src/assets/img/icon_light.png'
      },
    },
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options:{
        printRejected: false,
        develop: true,
        tailwind: true
      }
    }
  ]
}
