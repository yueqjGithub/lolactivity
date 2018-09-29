import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
// 战队信息填写页面组件
import Team from '@/components/team/team'
// 领取福利页面
import Prize from '@/components/prizepage/prizepage'
// 更多视频页面
import videoList from '@/components/videopage/videolist'
// 非微信打开页面
import NotM from '@/components/pages/notMicroMsg'

Vue.use(Router)

let auth = (to, from, next) => {
  // var ua = navigator.userAgent.toLowerCase()
  // var isWeixin = ua.indexOf('micromessenger') !== -1
  // if (isWeixin) {
  //   return next()
  // } else {
  //   return router.push({path: 'notMicroMsg'})
  // }
  return next()
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      alias: '/index',
      component: Home,
      beforeEnter: auth
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
      beforeEnter: auth
    },
    {
      path: '/prize',
      name: 'prize',
      component: Prize,
      beforeEnter: auth
    },
    {
      path: '/moreVideo',
      name: 'videoList',
      component: videoList,
      beforeEnter: auth
    },
    {
      path: '/notMicroMsg',
      name: 'notMicroMsg',
      component: NotM
    }
  ]
})

export default router
