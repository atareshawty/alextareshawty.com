import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import styles from './footer.module.css';
import GitHubLogo from '../assets/images/github-brands.svg';
import MailIcon from '../assets/images/envelope-regular.svg';
import TwitterIcon from '../assets/images/twitter-brands.svg';

const query = graphql`
  query {
    site {
      siteMetadata {
        copyrightYear
        email
        githubUrl
        twitterUrl
      }
    }
  }
`;

const renderFooter = ({ site: { siteMetadata } }) => (
  <footer className={styles.footer}>
    <div>
      <span className={styles.iconLogo}>
        &#169; {siteMetadata.copyrightYear}
      </span>
      <a
        href={siteMetadata.githubUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        <GitHubLogo className={styles.iconLogo} />
      </a>
      <a
        href={siteMetadata.twitterUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        <TwitterIcon className={styles.iconLogo} />
      </a>
      <a
        href={`mailto:${siteMetadata.email}`}
      >
        <MailIcon className={styles.iconLogo} />
      </a>
    </div>
  </footer>
);

export default () => (
  <StaticQuery
    query={query}
    render={renderFooter}
  />
);
