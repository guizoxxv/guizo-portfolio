<template>
  <main>
    <div class="etiquetas-wrapper">
        <ul id="etiquetas-list">
          <li v-for="(tag, index) in etiquetas" :key="index">
            {{ tag.nome }}
          </li>
        </ul>
    </div>
    <div id="trabalhos-wrapper">
      <div v-for="(trabalho, index) in trabalhos" :key="index" class="card">
        <img :src="trabalho.imagem.arquivo" :alt="trabalho.imagem.alt">
        <div class="card-hover" @click="showModal(index)">
          <div class="card-hover-content">
            <h3>{{ trabalho.nome }}</h3>
            <p class="date">{{ trabalho.data | moment('MMM, YYYY') | ucfirst }}</p>
            <p>{{ trabalho.descricao.breve }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import db from '../firebase/firebaseInit'

  export default {
    name: 'Main',
    data() {
      return {
        trabalhos: [],
        etiquetas: [],
        etiquetasFilters: [],
      }
    },
    created() {
      db.collection('trabalhos').orderBy('data', 'desc').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let data = {
            'id': doc.id,
            'nome': doc.data().nome,
            'imagem': doc.data().imagem,
            'descricao': doc.data().descricao,
            'data': doc.data().data.seconds,
            'etiquetas': doc.data().etiquetas.sort(),
            'links': doc.data().links,
            'cliente': doc.data().cliente,
          }

          this.trabalhos.push(data)
        })
      })
      db.collection('etiquetas').orderBy('ordem', 'asc').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let data = {
            'id': doc.id,
            'codigo': doc.data().codigo,
            'nome': doc.data().nome,
            'url': doc.data().url,
            'ordem': doc.data().ordem,
          }

          this.etiquetas.push(data)
        })
      })
    },
    methods: {
      showModal(index) {
        this.$modal.show('trabalho-modal', { trabalho: this.trabalhos[index] })
      }
    }
  }
</script>

<style lang="scss" scoped>
  $green: #16A085;

  main {
    margin: 50px 80px;
  }
  .etiquetas-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
  }
  #etiquetas-list {
    list-style-type: none;
    text-align: center;
    padding-left: 0;
    li {
      display: inline;
      margin: 0 0.5rem;
      border: 1px solid white;
      padding: 0.5rem;
      text-align: center;
      &:hover {
        background-color: grey;
        cursor: pointer;

      }
    }
  }
  #trabalhos-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    img {
      display: block; // Remove space bellow
      width: 100%;
    }
  }
  .card {
    position: relative;
    border: 5px solid gray;
    border-radius: 5px;
  }
  .card-hover {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 15px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    opacity: 0;
    transition: 0.3s;
    &:hover {
      background: rgba(0, 0, 0, 0.7);
      cursor: pointer;
      opacity: 1;
      transition: 0.3s;
    }
    h3 {
      font-size: 25px;
      margin: 0 0 5px 0;
    }
    .card-hover-content {
      width: 100%;
    }
    .date {
      margin: 0 0 10px 0;
      color: $green;
    }
    .brief {
      margin: 0;
    }
  }

  @media (max-width: 425px) {
    main {
      margin: 15px;
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
  }

  @media (max-width: 768px) and (min-width: 426px) {
    main {
      margin: 30px;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }
  }
</style>
