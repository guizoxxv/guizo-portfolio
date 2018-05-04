<template>
  <div id="app">
    <!-- <router-view/> -->
    <Home></Home>
  </div>
</template>

<script>
  import Home from './views/Home.vue'

  export default {
    name: 'App',
    created() {
      this.$moment.locale('pt-BR');
    },
    components: {
      Home
    }
  }
</script>