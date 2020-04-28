module.exports = {
  siteMetadata: {
    title: "fullstack-bootcamp",
    author: "Arturas Kalandarisvili",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
