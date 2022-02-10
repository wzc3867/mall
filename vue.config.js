const path = require('path');
module.exports = {
  // 安装 style-resources-loader 与 vue-cli-plugin-style-resources-loader
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 这三种 patterns 写法都是可以的
      // patterns: ["./src/assets/reset1.less", "./src/assets/reset2.less"]
      // patterns: "./src/assets/reset.less"
      patterns: [
        // 两种路径写法都可以，这里的路径不能使用 @ 符号，否则会报错
        // path.resolve(__dirname, './src/assets/reset.less')
        path.resolve(__dirname, 'src/assets/css/base.less')
      ]
    }
  }
};
