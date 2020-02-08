module.exports = { // eslint-disable-line import/no-commonjs
  siteMetadata: {
    baseRoutes: ['Tech', 'Food', 'FI', 'About'],
    email: 'website@alextareshawty.com',
    githubUrl: 'https://github.com/atareshawty',
    siteDescription: `
      Alex Tareshawty is a professional software developer and amateur everything else.
      He enjoys building everything from scalable cloud infrastructure to beautiful UI.
    `,
    title: 'Alex Tareshawty',
    twitterUrl: 'https://twitter.com/atareshawty',
    url: 'https://alextareshawty.com',
  },
  plugins: [
    'gatsby-plugin-react-svg',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
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
  ],
};
