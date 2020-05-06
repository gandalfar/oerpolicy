const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `OE Policy Hub`,
    description: `The Open Education Policy Hub`,
    author: `@hbz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/svgs/icon-globe.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: false, // Enable tailwindcss support
        // whitelistPatterns: [/[\w-/.:]+(?<!:)/g, /[\w-/:\.]+(?<!:)/g],
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        extractors: [
          {
            extractor: (content) => {
              return content.match(/[\w-/.:]+(?<!:)/g) || []
            },
            extensions: ["js", "ts", "jsx", "tsx", "md", "mdx"],
          },
        ],
      },
    },
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-loadable-components-ssr`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  developMiddleware: (app) => {
    app.use(
      "/api/",
      createProxyMiddleware({
        changeOrigin: true,
        target: "https://oerworldmap.org/",
        pathRewrite: {
          "/api/": "/",
        },
      })
    )
  },
}
