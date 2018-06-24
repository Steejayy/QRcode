import '@babel/polyfill'
import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store/index'
import components from './components'

Vue.config.productionTip = false

const messages = {
  en: require(`../i18n/en.json`),
  fr: require(`../i18n/fr.json`)
}

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
