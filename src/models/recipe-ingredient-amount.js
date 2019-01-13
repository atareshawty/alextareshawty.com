import PropTypes from 'prop-types';

import gcd from '../utils/gcd';

export default class RecipeIngredientAmount {
  constructor(amount) {
    this._isDecimal = typeof amount === 'number';

    if (this._isDecimal) {
      this._isWholeNumber = amount % 1 === 0;
      this._amount = amount
    } else {
      this._amount = this._initializeFraction(amount);
    }
  }

  static propType() {
    return PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({ numerator: PropTypes.number, denominator: PropTypes.number }),
    ]);
  }

  half() {
    if (this._isDecimal && this._isWholeNumber) {
      return new RecipeIngredientAmount(this._halfFraction(this._initializeFraction({
        numerator: this._amount,
        denominator: 1,
      })));
    } else if (this._isDecimal && !this._isWholeNumber) {
      return new RecipeIngredientAmount(this._amount / 2);
    } else if (this._isFraction(this._amount)) {
      return new RecipeIngredientAmount(this._halfFraction(this._amount));
    } else {
      throw new Error(`Can't half RecipeIngredientAmount: ${this}`);
    }
  }

  toString() {
    if (this._isDecimal) return this._amount.toString();

    let { numerator, denominator } = this._amount;
    const wholeNumber = Math.floor(numerator / denominator);
    const newNumerator = numerator - (wholeNumber * denominator);
    let output = '';

    if (wholeNumber !== 0) {
      output += `${wholeNumber} `
    }

    if (newNumerator !== 0) {
      const simplifiedFraction = this._simplifyFraction(newNumerator, denominator);

      output += `${simplifiedFraction.numerator}/${simplifiedFraction.denominator}`
    }

    return output.trim();
  }

  _simplifyFraction(numerator, denominator) {
    const greatestCommonDenominator = gcd(numerator, denominator);
    return {
      numerator: numerator / greatestCommonDenominator,
      denominator: denominator / greatestCommonDenominator,
    };
  }

  _halfFraction(amount) {
    return {
      numerator: amount.numerator,
      denominator: amount.denominator * 2,
    };
  }

  _initializeFraction(amount) {
    if (this._isFraction(amount)) {
      return { numerator: amount.numerator, denominator: amount.denominator };
    } else {
      throw new Error(`Unexpected amount ${amount}`);
    }
  }

  _isFraction(amount) {
    return 'numerator' in amount && 'denominator' in amount;
  }
}
