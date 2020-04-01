import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios';


Vue.config.productionTip = false

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://sj8r3633nc.execute-api.us-east-1.amazonaws.com/dev';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
