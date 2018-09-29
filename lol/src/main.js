// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/allstyle.css'
import VideoPlayer from 'vue-video-player'
// axios
import axios from '@/components/http/http.js'
// import axios from 'axios'
// mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 加载video player
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
require('@/assets/css/playerCss.css')

Vue.use(VideoPlayer)
Vue.use(MintUI)

Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
