import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import styles from './footer.module.css';
import GitHubLogo from '../images/github-brands.svg';
import MailIcon from '../images/envelope-regular.svg';
import TwitterIcon from '../images/twitter-brands.svg';

const query = graphql`
  query {
    site {
      siteMetadata {
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
      <span className={styles.iconLogo}>&#169; {new Date().getFullYear()}</span>
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
      <a href={`mailto:${siteMetadata.email}`}>
        <MailIcon className={styles.iconLogo} />
      </a>
    </div>
  </footer>
);

renderFooter.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      copyrightYear: PropTypes.string,
      email: PropTypes.string,
      githubUrl: PropTypes.string,
      twitterUrl: PropTypes.string,
    }),
  }),
};

const Footer = () => <StaticQuery query={query} render={renderFooter} />;

export default Footer;
