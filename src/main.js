import Vue from 'vue'
import App from './App.vue'
import '@/assets/main.css'

if(process.env.NODE_ENV === 'development') {  
  Vue.config.productionTip = false  
  Vue.prototype.$wppConfig = {
    phone: '+5516982364540',
    endpoint: 'https://new-traction.test/webhook/lead/zd0f0ks8wjo'
  }  
  new Vue({
    render: h => h(App),
  }).$mount('#wpp-widget')

} else {
  require('./external-bootstrap.js')
}
