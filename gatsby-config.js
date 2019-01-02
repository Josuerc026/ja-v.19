module.exports = {
 pathPrefix: "/favicons",
 siteMetadata: {
  title: "Josue Arce"
 },
 plugins: [
   'gatsby-plugin-typography',
   'gatsby-plugin-styled-components',
   'gatsby-plugin-react-helmet',
   `gatsby-transformer-remark`,
   {
    resolve: 'gatsby-plugin-sharp',
    options: {
     useMozJpeg: false,
     stripMetadata: true,
    }
   },
   `gatsby-transformer-sharp`,
   {
    resolve: `gatsby-source-filesystem`,
    options: {
     name: `src`,
     path: `${__dirname}/src/`,
    },
  },
 ]
}