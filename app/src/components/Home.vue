<template>
  <div id="page">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <TrabalhoModal></TrabalhoModal>
  </div>
</template>

<script>
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import TrabalhoModal from './TrabalhoModal'

export default {
  name: 'Home',
  components: {
    Header,
    Main,
    Footer,
    TrabalhoModal
  }
}
</script>