module.exports = {
  siteMetadata: {
    title: `Misha Osinovskiy`,
    description: `Web Designer, DJ, Musician, Media Arts in San Diego CA.`,
    author: `Misha Osinovskiy`,
  },
  plugins: [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  /* WordPress Plugin */
  {
    resolve: "gatsby-source-wordpress",
    options: {
      baseUrl: "mynameismisha.com",
      protocol: "https",
      hostingWPCOM: false,
      useACF: true,
    },
  },
  /* Images Plugin */
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#000`,
      display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      // Google Fonts 
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
        {
          family: `Oswald`,
          variants: [`400`, `700`],
        },
        {
          family: `Open Sans`,
          variants: [`400`, `700`],
        },
        ],
      },
    },
    // {
    //   /* Responsive Iframes */
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [`gatsby-remark-responsive-iframe`],
    //   },
    // },
    /* Generates Robots.txt File */
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://www.example.com',
    //     sitemap: 'https://www.example.com/sitemap.xml',
    //     policy: [{ userAgent: '*', allow: '/' }]
    //   }
    // }
    ],
  }
