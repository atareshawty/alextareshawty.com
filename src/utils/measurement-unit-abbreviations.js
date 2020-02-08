const measurementUnitAbbreviations = {
  CUP: 'c',
  GRAM: 'g',
  KILOGRAM: 'kg',
  LITER: 'L',
  MILLILITER: 'ml',
  OUNCE: 'oz',
  PINT: 'p',
  POUND: 'lb',
  TABLESPOON: 'tbsp',
  TEASPOON: 'tsp',
};

export default (measurement) => {
  const abbreviation = measurementUnitAbbreviations[measurement];

  if (abbreviation) {
    return abbreviation;
  } else {
    throw new Error(`Unexpected measurement key: ${measurement}`);
  }
};
