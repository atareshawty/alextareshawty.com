import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

const Button = props => (
  <button
    className={styles.button}
    onClick={props.onClick}
    type="button"
  >
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
