import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.use(BootstrapVueIcons)

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
