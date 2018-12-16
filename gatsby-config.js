module.exports = {
  siteMetadata: {
    baseRoutes: ['Code', 'Food', 'FI', 'About',],
    copyrightYear: 2018,
    email: 'atareshawty@gmail.com',
    githubUrl: 'https://github.com/atareshawty',
    twitterUrl: 'https://twitter.com/atareshawty',
  },
  plugins: [
    'gatsby-plugin-react-svg',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};
