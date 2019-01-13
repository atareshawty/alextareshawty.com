import React from 'react';

import styles from './layout.module.css';
import Header from './header';
import Footer from './footer';

export default ({ children }) => (
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
