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
    },
    chainWebpack: (config) => {
      // config.resolve.alias
      //     .set('@', resolve('src')) //3.0的写法 映射路径 @代表src 比如要写一个图片 <img src='@/assets/img/1.jpg'/>就会读取src下assets下img下的图片
      const svgRule = config.module.rule('svg');
      svgRule.uses.clear();
      svgRule
          .test(/\.svg$/)
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
              symbolId: 'icon-[name]'
          });
  },
  }
};
