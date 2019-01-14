import React from 'react';
import PropTypes from 'prop-types';

import Button from '../components/button';
import RecipeIngredient from '../components/recipe-ingredient';
import RecipeIngredientAmount from '../models/recipe-ingredient-amount';
import styles from './ingredients-list.module.css';

export default class IngredientsList extends React.Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.shape({
      amount: PropTypes.oneOfType([
        PropTypes.arrayOf(RecipeIngredientAmount.propType()),
        RecipeIngredientAmount.propType(),
      ]),
      name: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    })).isRequired,
  };

  state = {
    measurementsHalved: false,
  };

  toggleMeasurementHalving = () => {
    this.setState(({ measurementsHalved }) => ({
      measurementsHalved: !measurementsHalved,
    }));
  }

  render() {
    const buttonText = this.state.measurementsHalved ? 'Full' : 'Half';

    return (
      <div className={this.props.className}>
        <div className={styles.headerContainer}>
          <h4 className={styles.header}>Ingredients</h4>
          <Button onClick={this.toggleMeasurementHalving}>{buttonText}</Button>
        </div>
        <div>
          {this.props.ingredients.map((ingredient, index) => (
            <RecipeIngredient
              key={`${ingredient.name}-${index}`}
              halved={this.state.measurementsHalved}
              {...ingredient}
            />
          ))}
        </div>
      </div>
    );
  }
}
