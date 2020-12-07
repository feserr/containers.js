const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env, argv) => {
  const libraryName = 'extra-containers';
  let outputName = libraryName;
  if (env.dist) {
    outputName += '.min';
  }
  outputName += '.js';

  const configuration = {
    entry: {
      main: path.resolve(__dirname, './src/index.js'),
    },

    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js'],
    },

    plugins: [new ESLintPlugin()],

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: outputName,
      library: libraryName,
      libraryTarget: 'umd',
      globalObject: 'typeof self !== \'undefined\' ? self : this',
    },
  };

  if (env.debug) {
    configuration.mode = 'development';
    configuration.devtool = 'source-map';
  } else if (env.dist) {
    configuration.mode = 'production';
  }

  return configuration;
};
