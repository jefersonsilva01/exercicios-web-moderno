import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msg'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkplZmVyc29uIFNpbHZhIiwiZW1haWwiOiJqZWZlcnNvbi5zaWx2YUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjg5MDg4NjE4LCJleHAiOjE2ODkzNDc4MTh9.iwQMzhBIL6GSK_jGKIfo9q-GiyT8VI5p-AahqiBuY14'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')