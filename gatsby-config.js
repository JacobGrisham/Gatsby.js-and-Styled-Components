module.exports = {
  siteMetadata: {
    title: "Star Wars 3D Models and Blueprints",
    siteUrl: 'https://www.example.com',
    description: 'View iconic Star Wars space ships like the Millennium Falcon and a Tie Fighter as an interactive 3D model and as a blueprint.',
    author: 'Jacob Grisham'
  },
  plugins: [
    `gatsby-plugin-portal`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-36KQSD0BWH",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/icon.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Star Wars 3D Models and Blueprints`,
        short_name: `Star Wars`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#FFF`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
