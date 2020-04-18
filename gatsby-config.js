module.exports = {
  pathPrefix: `my-blog2`,
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-emojis`,
            options: {
              // Deactivate the plugin globally (default: true)
              active : true,
              // Add a custom css class
              class  : 'emoji-icon',
              // In order to avoid pattern mismatch you can specify
              // an escape character which will be prepended to the
              // actual pattern (e.g. `#:poop:`).
              escapeCharacter : '#', // (default: '')
              // Select the size (available size: 16, 24, 32, 64)
              size   : 64,
              // Add custom styles
              styles : {
                display      : 'inline',
                margin       : '0',
                'margin-top' : '1px',
                position     : 'relative',
                top          : '5px',
                width        : '25px'
              }
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            }
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Blog (Round 2)`,
        short_name: `My Blog2`,
        start_url: `/my-blog2/`,  // specific to gh-pages?
        background_color: `#0d4e8c`,
        theme_color: `#2876C0`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My Blog (Round 2)`,
    author: `Al Piepho`,
    description: `My first blog, well actually 2nd`,
    social: [
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/al-piepho-fw-sw-engineer/`,
      },
      {
        name: `github`,
        url: `https://github.com/alpiepho`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/apiepho1`,
      },
    ],
  },
}
