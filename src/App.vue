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
export default {
  name: 'App',
  data() {
    return {
     
    }
  },
  comments: {
     'hello-vue': HelloVue
  }
}
</script>

<style>
#app {

}
</style>
