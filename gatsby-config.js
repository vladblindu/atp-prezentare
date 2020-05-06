const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    description: `Gatsby starter styled with Tailwind`,
    author: `@taylorbryant`,
    apiKey: '9dd384a3-17a0-4fae-b6c6-7e979e6a982b',
    recaptchaKey:'6LdmSvEUAAAAAEzb7u2hvzONKBWfBkmIjf2BRfPb',
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`clients`],
        //If using single types place them in this array.
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
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
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : [])
        ]
      }
    }
  ]
};
