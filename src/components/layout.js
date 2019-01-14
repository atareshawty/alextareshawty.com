import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';
import Header from './header';
import styles from './layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.applicationContainer}>
    <Header />
    <div className={styles.contentWrapper}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
