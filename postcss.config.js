module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        "postcss-aspect-ratio-mini": {},
        // to edit target browsers: use "browserslist" field in package.json
        "postcss-write-svg": {
            uft8: false
        },
        "postcss-cssnext": {},
        "postcss-px-to-viewport-opt": {
            viewportWidth: 750,                      // 设计稿宽度
            // viewportHeight: 1230,                 // 设计稿高度，可以不指定
            unitPrecision: 3,                        // px to vw无法整除时，保留几位小数
            viewportUnit: 'vw',                      // 转换成vw单位
            selectorBlackList: ['.ignore', '.hairlines', '.vux-number-selector-plus', '.vux-number-selector-sub'], // 不转换的类名
            minPixelValue: 1,                        // 小于1px不转换
            mediaQuery: false,                       // 允许媒体查询中转换
            exclude: /(\/|\\)(node_modules)(\/|\\)/,
            keepComment: 'no'
        },
        "postcss-viewport-units": {},
        "cssnano": {
            preset: "advanced",
            autoprefixer: false,                     // 和cssnext同样具有autoprefixer，保留一个
            "postcss-zindex": false,
            reduceIdents: false,                    // 解决了 animation-name 被重写的 bug  https://github.com/cssnano/cssnano/issues/247
        }
    }
}
