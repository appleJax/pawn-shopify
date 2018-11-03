const babelOptions = {
  presets: ['babel-preset-gatsby', '@babel/preset-react', '@babel/preset-env'],
}

module.exports = require('babel-jest').createTransformer(babelOptions)
