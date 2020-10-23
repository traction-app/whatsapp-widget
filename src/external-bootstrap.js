import Vue from 'vue'
import App from './App.vue'
import '@/assets/main.css'

class WppWidget {

  constructor(args) {
    this.config = {
      ...args
    }
    this.baseUrl = '//d2st9y38zyzf5b.cloudfront.net/'
    this.init()
  }

  bootCss() {
    const head = document.getElementsByTagName('head')[0]
    const css = document.createElement('link')
    css.rel = "stylesheet"
    css.type = "text/css"
    css.href = this.baseUrl + "app.css"
    head.appendChild(css)
  }

  bootDOM() {
    const body = document.getElementsByTagName('body')[0]
    const div = document.createElement("div")
    div.id = "wpp-widget"
    body.appendChild(div)  
  }

  bootVue (config = {}) {
    Vue.config.productionTip = false
    Vue.prototype.$wppConfig = config
    new Vue({
      render: h => h(App),
    }).$mount('#wpp-widget')
  }

  init() {
    this.bootDOM()
    this.bootCss()
    this.bootVue(this.config)
  }
}

window.WppWidget = WppWidget

