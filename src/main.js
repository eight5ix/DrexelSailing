import Vue from 'vue'
import './plugins/vuetify'

import firebase from './firebase'
import auth from './auth'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import store from './store/index'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDvtlS-BvR04ynE81tIkW3pQEbC5-ay5xw", //API KEY
    libraries: "places" // necessary for places input
  }
});

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')
