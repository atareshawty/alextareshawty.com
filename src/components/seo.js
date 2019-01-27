import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    site {
      siteMetadata {
        siteDescription
        title
        twitterUrl
        url
      }
    }
  }
`;

const RenderSEO = ({ isBlogPost, secondaryTitle }) => ({ site }) => { // eslint-disable-line react/display-name, react/prop-types
  const title = `${site.siteMetadata.title} · ${secondaryTitle}`
  const description = site.siteMetadata.siteDescription;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {isBlogPost && <meta property="og:type" content="article" />}

      <meta name="twitter:creator" content={site.siteMetadata.twitterUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

const SEO = props => <StaticQuery query={query} render={RenderSEO(props)} />;

SEO.propTypes = {
  isBlogPost: PropTypes.bool.isRequired,
  secondaryTitle: PropTypes.string.isRequired,
};

export default SEO;
