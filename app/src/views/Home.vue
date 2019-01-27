<template>
  <!-- <img src="../assets/logo.png"> -->
  <div id="page">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header'
  import Main from '@/components/Main'
  import Footer from '@/components/Footer'

  export default {
    name: 'home',
    components: {
      Header,
      Main,
      Footer,
    }
  }
</script>
