__[参考文章](https://juejin.cn/post/6847902222328528903)__

https://juejin.cn/post/6844904035628122120

package包配置：http://nodejs.cn/learn/the-package-json-guide
vue-cli配置：https://cli.vuejs.org/zh/guide/webpack.html#%E5%AE%A1%E6%9F%A5%E9%A1%B9%E7%9B%AE%E7%9A%84-webpack-%E9%85%8D%E7%BD%AE
webpack学习：https://webpack.docschina.org/loaders/html-loader/

1、Error: Loading PostCSS Plugin failed: Unknown browser query dead
   browserslis 去掉“not dead”
2、Loading PostCSS "cssnano" plugin failed: Cannot load preset "advanced". Please check your configuration for errors and try again.
    yarn add cssnano-preset-advanced --save-dev
3、Can't resolve 'zmjUI' in 'D:\personal\zmj-ui\examples\components'