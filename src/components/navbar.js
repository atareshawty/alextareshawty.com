import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';

import styles from './navbar.module.css';

const query = graphql`
  query {
    site {
      siteMetadata {
        baseRoutes
      }
    }
  }
`;

const renderNavbar = ({ site: { siteMetadata } }) => (
  <nav>
    {siteMetadata.baseRoutes.map((route) => (
      <Link
        key={route}
        to={`/${route.toLowerCase()}`}
        className={styles.link}
      >
        <span className={styles.linkText}>{route}</span>
      </Link>
    ))}
  </nav>
);

export default () => (
  <StaticQuery
    query={query}
    render={renderNavbar}
  />
);
