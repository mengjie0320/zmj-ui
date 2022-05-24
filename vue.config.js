const { defineConfig } = require('@vue/cli-service')
const path = require('path')
console.log('path.resolve(examples)', path.resolve('examples'));
module.exports = defineConfig({
  // 重置pages入口
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  transpileDependencies: true,
  // 扩展webpack配置
  chainWebpack: config => {
    // 配置别名
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))
    // 配置打包编译
    config.module
      .rule('js')
      .include.add(/packages/).end()
      .include.add(/examples/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项
        return options
      })
  }
})
