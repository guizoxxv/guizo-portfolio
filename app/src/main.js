import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMoment from 'vue-moment'
import VModal from 'vue-js-modal'
import { ucFirst, tagLink } from './helpers/filters'
import './assets/css/app.scss'

Vue.config.productionTip = false

Vue.use(VueMoment)
Vue.use(VModal)

Vue.filter('ucfirst', ucFirst)
Vue.filter('tagLink', tagLink)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
