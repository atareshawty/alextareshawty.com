module.exports = { // eslint-disable-line import/no-commonjs
  siteMetadata: {
    baseRoutes: ['Tech', 'Food', 'About'],
    copyrightYear: 2019,
    email: 'website@alextareshawty.com',
    githubUrl: 'https://github.com/atareshawty',
    title: 'Alex Tareshawty',
    twitterUrl: 'https://twitter.com/atareshawty',
  },
  plugins: [
    'gatsby-plugin-react-svg',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
  ],
};
