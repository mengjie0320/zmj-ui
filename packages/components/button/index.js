// 配置对外引用
import Button from './index.vue';
import './index.css';

// 提供install方法
// 这里提供一次install是为了便于单独引入buttton组件时进行注册
Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

// 默认导出方式导出
export default Button;
