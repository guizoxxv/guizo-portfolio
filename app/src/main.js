import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMoment from 'vue-moment'
import VModal from 'vue-js-modal'
import { ucFirst, getTag } from './helpers/filters'
import './assets/css/app.scss'

Vue.config.productionTip = false

Vue.use(VueMoment)
Vue.use(VModal)

Vue.filter('ucfirst', ucFirst)
Vue.filter('getTag', getTag)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
