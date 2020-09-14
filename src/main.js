import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//注册全局组件
Vue.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template:`
  <input type="button" v-bind:value="count" v-on:click="count++" />
  `
})

new Vue({
  render: h => h(App)
}).$mount('#app')
