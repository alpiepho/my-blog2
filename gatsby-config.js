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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },


        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My Blog (Round 2)`,
    author: `Al Piepho`,
    description: `My first blog, well actually @nd`,
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
