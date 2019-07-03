<style lang="scss" scoped>
  .box{
    width: 100px;
    height: 100px;
    background-color: pink;
  }
</style>
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="box"></div>
    <van-button type="default">默认按钮</van-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
