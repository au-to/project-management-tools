const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  // 添加对 SCSS 文件的支持
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  })
);