<template>
  <footer>
    <i @click="scrollToTop" class="fa fa-arrow-up fa-2x" aria-hidden="true"></i>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    methods: {
      scrollToTop: function() {
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  $green: #16A085;

  footer {
    margin: 0 50px 10px 50px;
    text-align: center;
    i {
      border-radius: 100%;
      margin: 0 5px;
      padding: 10px;
      font-size: 30px;
      transition: 0.3s;
      &:hover {
        background: $green;
        cursor: pointer;
        transition: 0.3s;
      }
    }
  }
</style>
