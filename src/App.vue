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
    <h4>3.5 具名插槽</h4>
    <slot-name-component>
        <p slot="top">111111</p>
        <p>2222222</p>
        <p slot="bottom">333333</p>
    </slot-name-component>

    <slot-name-component>
      <template slot="top">
        <h1>1111</h1>
        <h2>2222</h2>
      </template>
      <template>
        <h1>嗯嗯嗯嗯</h1>
        <h2>啊啊啊啊</h2>
      </template>
      <template slot="bottom">
        <h1>aaaa</h1>
        <h2>bbbb</h2>
      </template>
    </slot-name-component>
    <h4>3.6 作用域插槽</h4>
    <fruit-list v-bind:list="info">
     <template slot-scope="slotProps">
        <strong style="color: red;" v-if="slotProps.item.id%2==0">{{slotProps.item.name}}</strong>
      </template>
    </fruit-list>
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
  var SlotNameComponent = {
    data() {
      return {}
    },
    template: `
      <div>
         <div id="top" style="color: red">
          <slot name="top"></slot>
         </div>
         <div id="mid" style="color: green">
         <slot></slot>
         </div>
         <div id="bottom" style="color: blue">
         <slot name="bottom"></slot>
         </div>
      </div>
    `
  }
  var  FruitList = {
    props:['list'],
    data() {
      return {}
    },
    template: `
        <div>
          <ol>
            <li :key="item.id"  v-for="item in list" >
              <slot :item="item">{{item.name}}</slot>
            </li>
          </ol>
        </div>
    `
  }
export default {
  name: 'App',
  data() {
    return {
      pt: '父组件中内容xxx',
      size: 5,
      info: [
        {
          id: 1,
          name: '橘子'
        },
        {
          id: 2,
          name: '橙子'
        },
        {
          id: 3,
          name: '香蕉'
        },
        {
          id: 4,
          name: '桃子'
        }
      ]
    }
  },
  components: {
     'hello-vue': HelloVue,
     'compentent2': Compentent2,
     'compentent3': Compentent3,
     'tom-component': TomComponent,
     'jerry-component': JerryComponent,
     'slot-component': SlotComponent,
     'slot-name-component': SlotNameComponent,
     'fruit-list': FruitList
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
