const babelOptions = {
  presets: ['babel-preset-gatsby'],
};

module.exports = require('babel-jest').createTransformer(babelOptions); // eslint-disable-line import/no-commonjs
