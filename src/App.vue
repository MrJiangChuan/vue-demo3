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
    <h4>3.3 兄弟组件间传值</h4>
    <input type="button" value="销毁" @click="destroy"/><br>
    <tom-component></tom-component>
    <jerry-component></jerry-component>
    <h4>3.4 组件插槽</h4>
     <slot-component>系统出现严重错误</slot-component>
     <slot-component></slot-component>
  </div>
</template>

<script>
  import Vue from 'vue'
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

  var hub = new Vue()
  var TomComponent = {
    data() {
      return {
        count_tom: 0
      }
    },
    template: `<div><input type="button" value="Tom" @click="handle" /><span>{{count_tom}}</span></div>`,
    mounted() {
      hub.$on('tom-envent', (val) => {
        this.count_tom += val
      })
    },
    methods: {
      handle() {
        hub.$emit('jerry-event',1)
      }
    }
  }
  var JerryComponent = {
    data() {
      return {
        count_jerry: 0
      }
    },
    template: `<div><input type="button" value="Jerry" @click="handle" /><span>{{count_jerry}}</span></div>`,
    mounted() {
      hub.$on('jerry-event', (val) => {
        this.count_jerry += val
      })
    },
    methods: {
      handle() {
        hub.$emit('tom-envent',2)
      }
    }
  }

  var SlotComponent = {
    data() {
      return {}
    },
    template: `
      <div>
         <strong>ERROR</strong><br>
         <slot>默认内容</slot>
      </div>
    `
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
     'compentent3': Compentent3,
     'tom-component': TomComponent,
     'jerry-component': JerryComponent,
     'slot-component': SlotComponent
  },
  methods: {
    handle1(args) {
      this.size += args
      console.log(this.size)
    },
    destroy() {
      hub.$off('tom-envent')
      hub.$off('jerry-event')
    }
  }
}
</script>

<style>
#app {

}
</style>
