<template>
  <div id="app">
    <h3>1、组件的注册与使用</h3>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <hr>
    <h3>2、局部组件的注册与使用</h3>
    <input type="text" />
    <hello-vue></hello-vue>
    <hr>
    <h3>3、组件间数据传递</h3>
    <h4>3.1 父组件--->子组件</h4>
    <co<h4>3.1 父组件--->子组件</h4>mpentent2 :outer='pt'></compentent2>
    <h4>3.2 子组件--->父组件</h4>
    <div :style="{fontSize: size+'px'}">大</div>
    <compentent3 v-on:enlarge-text='handle1'></compentent3>
  </div>
</template>

<script>
  var HelloVue = {
    data() {
      return {

      }
    },
    template: `
      <input type="text" />
    `
  }
  var Compentent2 = {
    props: ['outer'],
    data() {
      return {
        inner: '子组件内部数据'
      }
    },
    template:`
      <p>{{inner+'---'+outer}}</p>
    `
  }
  var Compentent3 = {
    data() {
      return {}
    },
    template:`<input type="button" value="子向父传递消息" @click="$emit('enlarge-text', 30)" />`
  }
export default {
  name: 'App',
  data() {
    return {
      pt: '父组件中内容xxx',
      size: 5
    }
  },
  components: {
     'hello-vue': HelloVue,
     'compentent2': Compentent2,
     'compentent3': Compentent3
  },
  methods: {
    handle1(args) {
      this.size += args
      console.log(this.size)
    }
  }
}
</script>

<style>
#app {

}
</style>
