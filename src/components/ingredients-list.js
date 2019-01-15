import React from 'react';
import PropTypes from 'prop-types';

import RecipeIngredient from '../components/recipe-ingredient';
import RecipeIngredientAmount from '../models/recipe-ingredient-amount';
import ToggleSwitch from '../components/toggle-switch';
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

  handleMeasurementHalving = () => {
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
          <ToggleSwitch
            offText="Half"
            on={!this.state.measurementsHalved}
            onClick={this.handleMeasurementHalving}
            onText="Full"
          />
        </div>
        <div>
          {this.props.ingredients.map(ingredient => (
            <RecipeIngredient
              key={`${ingredient.name}-${Math.random()}`}
              halved={this.state.measurementsHalved}
              {...ingredient}
            />
          ))}
        </div>
      </div>
    );
  }
}
