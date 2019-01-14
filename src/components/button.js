import React from 'react';

import styles from './button.module.css';

export default props => (
  <button className={styles.button} onClick={props.onClick}>
    {props.children}
  </button>
);
