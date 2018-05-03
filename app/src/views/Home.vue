<template>
  <!-- <img src="../assets/logo.png"> -->
  <div id="page">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <TrabalhoModal></TrabalhoModal>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header'
  import Main from '@/components/Main'
  import Footer from '@/components/Footer'
  import TrabalhoModal from '@/components/TrabalhoModal'

  export default {
    name: 'home',
    components: {
      Header,
      Main,
      Footer,
      TrabalhoModal
    }
  }
</script>
