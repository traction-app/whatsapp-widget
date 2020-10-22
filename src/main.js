import Vue from 'vue'
import App from './App.vue'
import '@/assets/main.css'


if(process.env.NODE_ENV == 'dev') {  
  Vue.config.productionTip = false  
  Vue.prototype.$wppConfig = {}  
  new Vue({
    render: h => h(App),
  }).$mount('#wpp-widget')

} else {
  require('./external-bootstrap.js')
}





