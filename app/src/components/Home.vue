<template>
  <div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default {
  name: 'Home',
  data () {
    return {
      // msg: 'Opa!'
    }
  },
  components: {
    Header,
    Main,
    Footer
  }
}
</script>