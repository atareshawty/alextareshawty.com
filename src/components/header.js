import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

import styles from './header.module.css';
import Navbar from './navbar';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const renderHeader = ({ site: { siteMetadata } }) => (
  <header className={styles.header}>
    <div className={styles.contentWrapper}>
      <Link to="/" className={styles.titleLink}>
        <h1 className={styles.titlebar}>
          {siteMetadata.title}
        </h1>
      </Link>
      <Navbar />
    </div>
  </header>
);

export default () => (
  <StaticQuery
    query={query}
    render={renderHeader}
  />
);
