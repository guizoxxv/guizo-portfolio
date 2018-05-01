<template>
  <div>
    <p>Main</p>
    <p v-for="trabalho in trabalhos">
      {{ trabalho.nome }} - {{ trabalho.data }}
    </p>
  </div>
</template>

<script>
import db from './firebaseInit'
import * as moment from 'moment'

export default {
  name: 'Main',
  data() {
    return {
      trabalhos: []
    }
  },
  created() {
    db.collection('trabalhos').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'nome': doc.data().nome,
          'data': moment.unix(doc.data().data.seconds).format("DD/MM/YYYY"),
        }

        this.trabalhos.push(data)
      })
    })
  }
}
</script>
