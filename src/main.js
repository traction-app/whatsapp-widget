import Vue from 'vue'
import App from './App.vue'
import '@/assets/main.css'

if(process.env.NODE_ENV === 'development') {  
  Vue.config.productionTip = false  
  Vue.prototype.$wppConfig = {
    phone: '+551111111111',
    endpoint: '#'
  }  
  new Vue({
    render: h => h(App),
  }).$mount('#wpp-widget')

} else {
  require('./external-bootstrap.js')
}
