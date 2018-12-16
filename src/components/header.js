import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.css';
import Navbar from './navbar';

export default () => (
  <header className={styles.header}>
    <div className={styles.contentWrapper}>
      <Link to="/" className={styles.titleLink}>
        <h1 className={styles.titlebar}>
          Alex Tareshawty
        </h1>
      </Link>
      <Navbar />
    </div>
  </header>
);
