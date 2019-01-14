import PropTypes from 'prop-types';

import gcd from '../utils/gcd';

class ExactIntegerAmount {
  constructor(amount) {
    this._amount = amount;
  }

  half() {
    return new ExactFractionalAmount({ numerator: this._amount, denominator: 2 });
  }

  toString() {
    return this._amount.toString();
  }
}

class ExactDecimalAmount {
  constructor(amount) {
    this._amount = amount;
  }

  half() {
    this._amount /= 2;
    return this;
  }

  toString() {
    return this._amount.toString();
  }
}

class ExactFractionalAmount {
  constructor(amount) {
    this._numerator = amount.numerator;
    this._denominator = amount.denominator;
  }

  half() {
    this._denominator *= 2;
    return this;
  }

  toString() {
    const wholeNumber = Math.floor(this._numerator / this._denominator);
    const newNumerator = this._numerator - (wholeNumber * this._denominator);
    let output = '';

    if (wholeNumber !== 0) {
      output += `${wholeNumber} `;
    }

    if (newNumerator !== 0) {
      const simplifiedFraction = this._simplifyFraction(newNumerator, this._denominator);

      output += `${simplifiedFraction.numerator}/${simplifiedFraction.denominator}`;
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
}

export default class RecipeIngredientAmount {
  constructor(amount) {
    if (typeof amount === 'number' && amount % 1 === 0) {
      this._amount = new ExactIntegerAmount(amount);
    } else if (typeof amount === 'number') {
      this._amount = new ExactDecimalAmount(amount);
    } else if ('numerator' in amount && 'denominator' in amount) {
      this._amount = new ExactFractionalAmount(amount);
    } else {
      throw new Error(`Invalid RecipeIngredientAmount ${amount}`);
    }
  }

  static propType() {
    return PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({ numerator: PropTypes.number, denominator: PropTypes.number }),
    ]);
  }

  half() {
    return this._amount.half();
  }

  toString() {
    return this._amount.toString();
  }
}
