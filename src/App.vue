<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'app',
  components: {
    HelloWorld
  }
});
</script>

<style lang="less">
  *{
    padding:0;margin:0;
  }
  @fontColor:#333;
  #app{
    max-width:900px;
    width:100%;
    margin:0 auto;
  }
  body{
    font-family: "Microsoft YaHei UI";
    color:@fontColor;
  }
  a{
    color:@fontColor;
  }
</style>
