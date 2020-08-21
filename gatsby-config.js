/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `David Cha's Portfolio`,
    titleTemplate: "%s · Software Engineer",
    author: `David Cha`,
    description: `Software Engineer and Full-Stack Web Developer with a background in customer service and communication hoping to improve our lives`,
    url: ``,
    image: ``
  },
  // siteMetadata allows the application to be dynamic when you're scaling this S.P.A 
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src', 
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark'
    // {
    // resolve: `gatsby-plugin-typography`,
        // options: {
            // pathToConfigModule: `src/utils/typography`,
        // },
    // }
  ],
}
