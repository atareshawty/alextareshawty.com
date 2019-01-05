import React from 'react';
import titleize from 'titleize';

import { formatMinutes } from '../utils/recipe-timing-information';
import styles from './recipe-timing-information.module.css';

const renderTimingInformationCell = cell => (
  <div key={cell.name} className={styles.cell}>
    <div className={styles.cellText}>{titleize(`${cell.name} time`)}</div>
    <div className={styles.cellText}>{formatMinutes(cell.value)}</div>
  </div>
);

const renderTimingInformationCells = cells => {
  const renderedCells = cells.map(renderTimingInformationCell);

  if (cells.length > 1) {
    const totalTime = cells.map(({ value }) => value).reduce((prev, curr) => prev + curr, 0);
    const totalTimeInfo = { name: 'total', value: totalTime };

    renderedCells.push(renderTimingInformationCell(totalTimeInfo));
  }

  return renderedCells;
};

export default ({ timingInformation }) => (
  <div className={styles.container}>
    <h5 className={styles.header}>Timing Information</h5>
    <div className={styles.cells}>
      {renderTimingInformationCells(timingInformation)}
    </div>
  </div>
);
