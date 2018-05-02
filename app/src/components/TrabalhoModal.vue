<template>
  <modal name="trabalho-modal" @before-open="beforeOpen" :adaptive="true" height="auto" width="1024px" :scrollable="true" transition="nice-modal-fade">
    <div v-if="trabalho" class="modal">
      <h3>{{ trabalho.nome }}</h3>
      <h4>Cliente: <span>{{ trabalho.cliente ? trabalho.cliente : 'Pessoal' }}</span></h4>
      <h4>Data: <span>{{ trabalho.data | moment('DD [de] MMMM [de] YYYY') }}</span></h4>
      <img :src="'static/img/' + trabalho.imagem.arquivo" :alt="trabalho.imagem.alt">
      <h4>Descrição</h4>
      <p class="descricao" v-html="trabalho.descricao.completa"></p>
      <h4>Etiquetas</h4>
      <ul class="tags">
        <li v-for="(etiqueta, index) in trabalho.etiquetas" :key="index">
          <a :href="etiqueta | tagLink('url')" target="_blank">{{ etiqueta | tagLink('nome') }}</a>
        </li>
      </ul>
      <h4>Links</h4>
      <ul class="links">
        <li v-for="(link, index) in trabalho.links" :key="index">
          <a :href="link.url" target="_blank">{{ link.nome }}</a>
        </li>
      </ul>
    </div>
    <div class="close" slot="top-right" @click="$modal.hide('trabalho-modal')">
      <i class="fa fa-times-circle fa-3x" aria-hidden="true"></i>
    </div>
  </modal>
</template>

<script>
  export default {
    name: 'TrabalhoModal',
    data() {
      return {
        trabalho: null
      }
    },
    methods: {
      beforeOpen(event) {
        this.trabalho = event.params.trabalho;
      }
    }
  }
</script>

<style lang="scss" scoped>
  $green: #16A085;

  .modal {
    margin: 20px;
    color: black;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    h3 {
      font-size: 25px;
    }
    h4 {
      font-size: 18px;
      span {
        font-weight: normal;
      }
    }
    a {
      text-decoration: underline;
      &:hover {
        color: $green;
      }
    }
    img {
      display: block; // Remove space bellow
      width: 100%;
      border: 5px solid gray;
    }
    ul {
      padding-left: 0;
      li {
        display: inline-block;
      }
    }
  }
  .descricao {
    text-align: left;
  }
  .tags {
    li {
      border: 1px solid black;
      margin: 5px;
      a {
        display: inline-block;
        padding: 5px;
        text-decoration: none;
        &:hover {
          color: inherit;
          background: lightgray;
        }
      }
    }
  }
  .links {
    margin-top: 20px;
    font-size: 20px;
    li {
      margin: 5px 10px;
    }
  }
  .close {
    margin: 10px;
    color: gray;
    z-index: 999;
    transition: 0.3s;
    &:hover {
      cursor: pointer;
      color: tomato;
      transition: 0.3s;
    }
  }
</style>