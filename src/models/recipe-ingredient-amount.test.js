import RecipeIngredientAmount from './recipe-ingredient-amount';

describe('#toString', () => {
  describe('when the amount is an integer', () => {
    it('returns the number as a string', () => {
      const amount = new RecipeIngredientAmount(50);

      expect(amount.toString()).toBe('50');
    });

    describe('and the amount is halved', () => {
      describe('and the number is divisible by 2', () => {
        it('returns the half of the number as a string', () => {
          const amount = new RecipeIngredientAmount(50);

          expect(amount.half().toString()).toBe('25');
        });
      });

      describe('and the number is not divisible by 2', () => {
        it('returns the half of the number as a mixed number', () => {
          const amount = new RecipeIngredientAmount(5);

          expect(amount.half().toString()).toBe('2 1/2');
        });
      });
    });
  });

  describe('when the amount is a decimal', () => {
    it('returns the number as a string', () => {
      const amount = new RecipeIngredientAmount(1.3);

      expect(amount.toString()).toBe('1.3');
    });

    describe('and the amount is halved', () => {
      it('returns the half of the number as a string', () => {
        const amount = new RecipeIngredientAmount(1.3);

        expect(amount.half().toString()).toBe('0.65');
      });
    });
  });

  describe('when the amount has a numerator and denominator', () => {
    describe('and the numerator is bigger than the denominator', () => {
      describe('and the amount is halfed', () => {
        it('returns the corresponding mixed fraction as a string', () => {
          const amount = new RecipeIngredientAmount({ numerator: 8, denominator: 3 });

          expect(amount.half().toString()).toBe('1 1/3');
        });
      });

      it('returns the corresponding mixed fraction as a string', () => {
        const amount = new RecipeIngredientAmount({ numerator: 8, denominator: 3 });

        expect(amount.toString()).toBe('2 2/3');
      });
    });

    describe('and the numerator is smaller than the denominator', () => {
      describe('and the amount is halfed', () => {
        it('returns the corresponding mixed fraction as a string', () => {
          const amount = new RecipeIngredientAmount({ numerator: 2, denominator: 3 });

          expect(amount.half().toString()).toBe('1/3');
        });
      });

      it('returns the corresponding mixed number as a string', () => {
        const amount = new RecipeIngredientAmount({ numerator: 2, denominator: 3 });

        expect(amount.toString()).toBe('2/3');
      });
    });

    describe('and the numerator is divisible by the denominator', () => {
      describe('and the amount is halfed', () => {
        it('returns the corresponding mixed fraction as a string', () => {
          const amount = new RecipeIngredientAmount({ numerator: 4, denominator: 2 });

          expect(amount.half().toString()).toBe('1');
        });
      });

      it('returns the corresponding mixed number as a string', () => {
        const amount = new RecipeIngredientAmount({ numerator: 4, denominator: 2 });

        expect(amount.toString()).toBe('2');
      });
    });

    describe('and the resulting fraction can be simplified', () => {
      describe('and the amount is halfed', () => {
        it('returns the corresponding mixed fraction as a string', () => {
          const amount = new RecipeIngredientAmount({ numerator: 6, denominator: 4 });

          expect(amount.half().toString()).toBe('3/4');
        });
      });

      it('returns the corresponding mixed number as a string', () => {
        const amount = new RecipeIngredientAmount({ numerator: 6, denominator: 4 });

        expect(amount.toString()).toBe('1 1/2');
      });
    });
  });
});
