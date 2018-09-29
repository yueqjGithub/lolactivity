/**
 2  * http配置
 3  */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import { Indicator, Toast } from 'mint-ui'
// 超时时间
axios.defaults.timeout = 8000
// http请求拦截器
axios.interceptors.request.use(config => {
  // element ui Loading方法
  Indicator.open('加载中...')
  return config
}, error => {
  Indicator.close()
  Toast({
    message: '加载超时'
  })
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
  Indicator.close()
  return data
}, error => {
  Indicator.close()
  Toast({
    message: '加载失败'
  })
  return Promise.reject(error)
})

export default axios
