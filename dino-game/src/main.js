import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import VueResource from 'vue-resource';
/* 等校 var VueResource = require('vue-resource'); */
import VueQRCodeComponent from 'vue-qrcode-component'
Vue.component('qr-code', VueQRCodeComponent)

import VueCookie from 'vue-cookie'

Vue.use(VueCookie)
Vue.use(VueResource);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')

