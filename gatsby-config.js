require('dotenv').config()
const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')
const fullConfig = resolveConfig(tailwindConfig)

const env = process.env.NODE_ENV || "development"
const apiUrl = JSON.parse(process.env.API_URL)[env]
const recaptchaKey = process.env.RECAPTCHA_KEY
const apiKey = process.env.API_KEY

console.log(process.env.API_KEY)
module.exports = {
  siteMetadata: {
    title: `Audiotext Portal`,
    description: `Platforma tranzactionare audiobook-uir`,
    author: `@AUDIOBOOK MARKET SRL`,
    apiKey: apiKey,
    recaptchaKey: recaptchaKey
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
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: apiUrl,
        queryLimit: 1000, // Default to 100
        contentTypes: ['section', 'article'],
        loginData: {
          identifier:'',
          password: ''
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `audiotext-portal`,
        short_name: `bbs`,
        start_url: `/`,
        theme_color: fullConfig.theme.colors.primary,
        background_color: fullConfig.theme.colors.secondary,
        display: `minimal-ui`,
        icon: `src/assets/img/icon_light.png`
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : [])
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/assets/css/style.css`]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lato`,
          `open sans:200,400,400i,700`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-offline`
  ]
}
