module.exports = {
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
        icon: 'src/assets/img/icon-light.png'
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
