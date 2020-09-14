<template>
  <div id="app">
    <h3>1、组件的注册与使用</h3>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <!-- <input type="button" v-bind:value="count" v-on:click="count++" /> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {

    }
  }
}
</script>

<style>
#app {

}
</style>
