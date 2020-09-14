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
    <compentent2 :outer='pt'></compentent2>
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
export default {
  name: 'App',
  data() {
    return {
      pt: '父组件中内容xxx'  
    }
  },
  components: {
     'hello-vue': HelloVue,
     'compentent2': Compentent2
  }
}
</script>

<style>
#app {

}
</style>
