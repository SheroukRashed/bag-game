import Vue from 'vue'
import App from './App.vue'
import Cone from './Cone.vue'

Vue.component('NinjaList',Cone);

new Vue({
  el: '#app',
  render: h => h(App)
})
