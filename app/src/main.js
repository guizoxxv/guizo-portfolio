// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
