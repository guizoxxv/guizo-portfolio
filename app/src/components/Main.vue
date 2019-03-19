<template>
  <main>
    <div class="loading-wrapper" v-show="loadingTags">
      <looping-rhombuses-spinner
        :animation-duration="2500"
        :rhombus-size="15"
        color="white"
      />
    </div>
    <div class="etiquetas-wrapper">
      <ul id="etiquetas-list">
        <li v-for="(tag, index) in etiquetas" :key="index" @click="filterEtiqueta(tag.codigo, $event)">
          {{ tag.nome }}
        </li>
      </ul>
    </div>
    <div class="loading-wrapper" v-show="loadingJobs">
      <looping-rhombuses-spinner
        :animation-duration="2500"
        :rhombus-size="15"
        color="white"
      />
    </div>
    <div class="jobs-count" v-show="!loadingJobs">
      <span>{{ countTrabalhos }}</span> / <span>{{ countTrabalhosAll }}</span>
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
    <TrabalhoModal :etiquetas="this.etiquetas"></TrabalhoModal>
  </main>
</template>

<script>
  import TrabalhoModal from '@/components/TrabalhoModal'
  import db from '../firebase/firebaseInit'
  import { LoopingRhombusesSpinner } from 'epic-spinners'

  export default {
    name: 'Main',
    components: {
      TrabalhoModal,
      LoopingRhombusesSpinner,
    },
    data() {
      return {
        loadingTags: true,
        loadingJobs: true,
        trabalhosAll: [],
        trabalhos: [],
        etiquetas: [],
        etiquetasFilters: [],
      }
    },
    created() {
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

          this.loadingTags = false
        })
      })

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

          this.trabalhosAll.push(data)
          this.trabalhos = this.trabalhosAll.slice(0, 9)
        })

        this.loadingJobs = false
      })
    },
    methods: {
      showModal(index) {
        this.$modal.show('trabalho-modal', { trabalho: this.trabalhos[index] })
      },
      filterEtiqueta(tagCode, event) {
        this.loadingJobs = true

        document.getElementById('trabalhos-wrapper').style.display = 'hide'

        let self = this

        if(this.etiquetasFilters.includes(tagCode)) {
          this.etiquetasFilters = this.etiquetasFilters.filter(function(etiqueta) {
            return etiqueta !== tagCode
          })

          event.target.classList.remove('active')
        } else {
          this.etiquetasFilters.push(tagCode)

          event.target.classList.add('active');
        }

        if(this.etiquetasFilters.length > 0) {
          this.trabalhos = this.trabalhosAll.filter(function(trabalho) {
            return self.etiquetasFilters.every(function(etiqueta) {
              return trabalho.etiquetas.includes(etiqueta)
            })
          })
        } else {
          this.trabalhos = this.trabalhosAll
        }

        setTimeout(() => {
          this.loadingJobs = false

          document.getElementById('trabalhos-wrapper').style.display = 'grid'
        }, 250);
      },
    },
    computed: {
      countTrabalhos() {
        return this.trabalhos.length
      },
      countTrabalhosAll() {
        return this.trabalhosAll.length
      }
    }
  }
</script>

<style lang="scss" scoped>
  $green: #16A085;

  .loading-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .jobs-count {
    text-align: center;
    margin: 2rem 0;
    span {
      font-weight: bold;
    }
  }
  main {
    margin: 25px 80px;
  }
  .etiquetas-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #etiquetas-list {
    list-style-type: none;
    text-align: center;
    padding-left: 0;
    li {
      display: inline-block;
      margin: 0.5rem;
      border: 1px solid white;
      padding: 0.5rem;
      text-align: center;
      &.active {
        background-color: grey;
      }
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
