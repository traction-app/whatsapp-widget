import Vue from 'vue'
import App from './App.vue'
import '@/assets/main.css'

class WppWidget {

  constructor(args, context) {
    this.config = {
      ...args
    }
    this.context = context
    this.init()
  }

  setCurrentPath () {
    const url = new URL(this.context.src)
    this.path = url.origin
  }

  bootCss() {
    const head = document.getElementsByTagName('head')[0]
    const css = document.createElement('link')
    css.rel = "stylesheet"
    css.type = "text/css"
    css.href = this.path + "/app.css"
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
    this.setCurrentPath()
    this.bootDOM()
    this.bootCss()    
    this.bootVue(this.config)
  }
}

window.WppWidget = WppWidget

