import Vue from 'vue'
import App from './App.vue'
import '@/assets/main.css'

if(process.env.NODE_ENV === 'development') {  
  Vue.config.productionTip = false  
  Vue.prototype.$wppConfig = {
    phone: '5516982394540',
    endpoint: 'https://webhook.site/2174205b-64fa-4c90-978d-8ec7918ae861',
    message: 'Olá, gostaria de saber mais informações!'
  }  
  new Vue({
    render: h => h(App),
  }).$mount('#wpp-widget')

} else {
  require('./external-bootstrap.js')
}
