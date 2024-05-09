// const { inDev } = require('./webpack.helpers');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    // typescript
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    // css
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  },
  // {
  //todo: remove
  //   // scss
  //   test: /\.s[ac]ss$/i,
  //   use: [
  //     { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
  //     { loader: 'css-loader' },
  //     { loader: 'sass-loader' },
  //   ],
  // },
  {
    // assets
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
    type: 'asset',
    generator: {
      filename: 'assets/[hash][ext][query]',
    },
  },
];
