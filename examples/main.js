import { createApp } from 'vue'
import App from './App.vue'
import zmjUI from '../packages'
console.log('zmjUI', zmjUI)

// Vue.config.productionTip = false
createApp(App).use(zmjUI).mount('#app')

