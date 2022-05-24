exports = {
  "name": "zmj-ui",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "babel-loader": "^8.2.5",
    "core-js": "^3.8.3",
    "cssnano": "^5.1.9",
    "postcss-aspect-ratio-mini": "^1.1.0",
    "postcss-cssnext": "^3.1.1",
    "postcss-import": "^14.1.0",
    "postcss-px-to-viewport-opt": "^0.0.4",
    "postcss-url": "^10.1.3",
    "postcss-viewport-units": "^0.1.6",
    "postcss-write-svg": "^3.0.1",
    "vue": "^3.2.13"
  },
  "devDependencies": {
    "@babel/core": "^7.12.16",
    "@babel/eslint-parser": "^7.12.16",
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-eslint": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "eslint": "^7.32.0",
    "eslint-plugin-vue": "^8.0.3"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/vue3-essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "@babel/eslint-parser"
    },
    "rules": {}
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    // "not dead",
    "not ie 11"
  ]
}
