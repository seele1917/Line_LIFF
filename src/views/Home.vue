<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Manager msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Manager from '@/components/Manager.vue'

export default {
  name: 'Home',
  components: {
    Manager
  }
}
</script>
