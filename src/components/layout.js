import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';
import Header from './header';
import SEO from './seo';
import styles from './layout.module.css';

// prettier-ignore
const Layout = ({ children, isBlogPost, title }) => (
  <div className={styles.applicationContainer}>
    <SEO secondaryTitle={title} isBlogPost={isBlogPost} />{' '} {/* eslint-disable-line react/jsx-pascal-case */}
    <Header />
    <div className={styles.contentWrapper}>
      <div className={styles.content}>{children}</div>
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isBlogPost: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
