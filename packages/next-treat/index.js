const TreatPlugin = require('treat/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.plugins.push(
        new TreatPlugin({
          outputLoaders: [MiniCssExtractPlugin.loader],
          outputCSS: !options.isServer,
        }),
        new MiniCssExtractPlugin(),
      );
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }
      return config;
    },
  });
};
