import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

import CookieSvg from '../../assets/images/cookie-bite-solid.svg';
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
  <Layout>
    <h3>
      Here are some of my go-to recipes!
    </h3>
    <ul className={styles.list}>
      {edges.sort(compareEdges).map(({ node }) => (
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

export default () => (
  <StaticQuery
    query={query}
    render={renderRecipeIndex}
  />
);
