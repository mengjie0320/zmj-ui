// 引入编写的组件
// import { App } from 'vue';
import * as uiComponents from './components'
console.log('uiComponents', uiComponents);

const install = function (app, config) {
    Object.keys(uiComponents).forEach((key) => {
      /plugin/i.test(key) ? app.use(uiComponents[key]) : app.use(uiComponents[key], config);
    });
}
// // 定义 install 方法，接收 Vue 作为参数
// const install = function(Vue) {
//   // 判断是否安装，安装过就不继续往下执行
//   if (install.installed) return;
//   install.installed = true;
//   // 遍历注册所有组件
//   components.map(component => Vue.component(component.name, component));
//   // 下面这个写法也可以
//   // components.map(component => Vue.use(component))
// };

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}


export * from './components';
export default {
  install,
  version: typeof PKG_VERSION === 'undefined' ? '' : PKG_VERSION, // eslint-disable-line
};
