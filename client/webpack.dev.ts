const { merge: mergeDev } = require('webpack-merge');
const commonDev = require('./webpack.common.ts');

module.exports = mergeDev(commonDev, {
  mode: 'development',
  devServer: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'credentialless',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    },
    port: 8080,
    historyApiFallback: true,
  },
});
