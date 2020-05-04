const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Audio Text Portal`,
    description: `Gatsby starter styled with Tailwind`,
    author: `@taylorbryant`,
  },
  plugins: [
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
    }
  ]
};
