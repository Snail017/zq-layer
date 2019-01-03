import Vue from 'vue'
import App from './App.vue'
import layer from './lib/index'
Vue.use(layer)
new Vue({
  el: '#app',
  render: h => h(App)
})
