import React from 'react';
import PropTypes from 'prop-types';

import styles from './toggle-switch.module.css';

export default class ToggleSwitch extends React.Component {
  static propTypes = {
    offText: PropTypes.string.isRequired,
    on: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onText: PropTypes.string.isRequired,
  };

  render() {
    const toggleableContainerStyle = this.props.on
      ? styles.toggleableContainerOn
      : styles.toggleableContainerOff;

    return (
      <div className={styles.container} onClick={this.props.onClick}>
        <div className={styles.innerContainer}>
          <div className={styles.toggleable}>
            <div className={styles.text}>{this.props.offText}</div>
          </div>
          <div className={styles.toggleable}>
            <div className={styles.text}>{this.props.onText}</div>
          </div>
        </div>
        <div
          className={`${styles.innerContainer} ${styles.secondInnerContainer} ${toggleableContainerStyle}`}
        >
          <div className={styles.toggleable}>
            <div className={styles.text}>{this.props.offText}</div>
          </div>
          <div className={styles.toggleable}>
            <div className={styles.text}>{this.props.onText}</div>
          </div>
        </div>
      </div>
    );
  }
}
