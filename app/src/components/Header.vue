<template>
  <header>
    <img src="static/img/guizo_logo.png" width="100" alt="logo">
    <h1>guizo</h1>
    <h2>Desenvolvedor Web</h2>
    <div class="social">
      <a href="mailto:oliveira.gsd@gmail.com" target="_blank" title="E-mail"><i class="fa fa-envelope" aria-hidden="true"></i></a>
      <a href="https://linkedin.com/in/g-oliveira" target="_blank" title="LinkedIn"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
      <a href="https://github.com/guizoxxv" target="_blank" title="GitHub"><i class="fa fa-github-alt" aria-hidden="true"></i></a>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss" scoped>
  $green: #16A085;

  header {
    margin: 50px;
    margin-bottom: 0;
    text-align: center;
    h1 {
      margin: 10px;
      font-family: 'Exo', sans-serif;
      font-size: 70px;
      font-weight: normal;
      letter-spacing: 10px;
    }
    h2 {
      margin: 10px;
      font-size: 30px;
      font-family: 'Open Sans', sans-serif;
      color: $green;
    }
  }
  .social {
    margin: 50px;
    i {
      border-radius: 100%;
      margin: 0 5px;
      padding: 10px;
      font-size: 30px;
      transition: 0.3s;
      &:hover {
        background: $green;
        transition: 0.3s;
      }
    }
}
</style>
