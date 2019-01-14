import React from 'react';
import PropTypes from 'prop-types';

import RecipeIngredientAmount from '../models/recipe-ingredient-amount';
import measurementUnitAbbreviations from '../utils/measurement-unit-abbreviations';
import styles from './recipe-ingredient.module.css';

const renderIndividualAmount = (amt, halved) => {
  let amount = new RecipeIngredientAmount(amt);
  if (halved) amount = amount.half();
  return amount.toString();
};

const renderAmount = (amount, halved) => {
  if (Array.isArray(amount)) {
    const firstAmount = renderIndividualAmount(amount[0], halved);
    const secondAmount = renderIndividualAmount(amount[1], halved);
    return `${firstAmount} to ${secondAmount}`;
  } else {
    return renderIndividualAmount(amount, halved);
  }
};

const RecipeIngredient = ({ amount, halved, name, unit }) => (
  <div className={styles.ingredient}>
    <div className={styles.amount}>
      {renderAmount(amount, halved)} {measurementUnitAbbreviations(unit)}
    </div>
    <div className={styles.name}>{name}</div>
  </div>
);

RecipeIngredient.propTypes = {
  amount: PropTypes.oneOfType([
    PropTypes.arrayOf(RecipeIngredientAmount.propType()),
    RecipeIngredientAmount.propType(),
  ]),
  halved: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};
export default RecipeIngredient;
