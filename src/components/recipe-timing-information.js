import React from 'react';
import PropTypes from 'prop-types';
import titleize from 'titleize';

import formatMinutes from '../utils/recipe-timing-information';
import styles from './recipe-timing-information.module.css';

const renderTimingInformationCell = (cell) => (
  <div key={cell.name} className={styles.cell}>
    <div className={styles.cellText}>{titleize(`${cell.name} time`)}</div>
    <div className={styles.cellText}>{formatMinutes(cell.minutes)}</div>
  </div>
);

const renderTimingInformationCells = (cells) => {
  const renderedCells = cells.map(renderTimingInformationCell);

  if (cells.length > 1) {
    const totalTime = cells.reduce((acc, { minutes }) => acc + minutes, 0);
    const totalTimeInfo = { name: 'total', minutes: totalTime };

    renderedCells.push(renderTimingInformationCell(totalTimeInfo));
  }

  return renderedCells;
};

const RecipeTimingInformation = ({ timingInformation }) => (
  <div className={styles.container}>
    <h5 className={styles.header}>Timing Information</h5>
    <div className={styles.cells}>
      {renderTimingInformationCells(timingInformation)}
    </div>
  </div>
);

RecipeTimingInformation.propTypes = {
  timingInformation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      minutes: PropTypes.number.isRequired,
    })
  ),
};

export default RecipeTimingInformation;
