import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';

import CookieSvg from '../../images/cookie-bite-solid.svg';
import Layout from '../../components/layout';
import styles from './recipes.module.css';

const query = graphql`
  query {
    allRecipesJson {
      edges {
        node {
          metadata {
            path
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const compareEdges = (a, b) => a.node.metadata.title.localeCompare(b.node.metadata.title);

const renderRecipeIndex = ({ allRecipesJson: { edges } }) => (
  <Layout title="Recipes" isBlogPost={false} >
    <h3>
      Here are some of my go-to recipes!
    </h3>
    <ul className={styles.list}>
      {edges.sort(compareEdges).map(({ node }) => (// eslint-disable-line react/prop-types
        <div key={node.metadata.path} className={styles.listItem}>
          <CookieSvg className={styles.listIcon} />
          <Link to={`${node.fields.slug}${node.metadata.path}`}>
            {node.metadata.title}
          </Link>
        </div>
      ))}
    </ul>
  </Layout>
);

renderRecipeIndex.propTypes = {
  allRecipesJson: PropTypes.shape({
    edges: PropTypes.shape({
      node: PropTypes.shape({
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }),
        metadata: PropTypes.shape({
          path: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }),
      }),
    }),
  }),
};

const Recipes = () => (
  <StaticQuery
    query={query}
    render={renderRecipeIndex}
  />
);

export default Recipes;
