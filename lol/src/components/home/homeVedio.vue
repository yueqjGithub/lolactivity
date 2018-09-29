<template>
  <div>
    <div class="cont2">
      <div class="cont_tit2">{{titName}}</div>
      <!--http://www.w3school.com.cn/i/movie.ogg-->
      <player src="/static/video/movie.mp4"></player>
    </div>
    <router-link class="more_vedio" to="/moreVideo">
      <img src="@/assets/homepic/morev.png" alt="">
    </router-link>
  </div>
</template>

<script>
// 首页的视频模块
// 引入视频播放组件 player.vue
import Player from '@/components/home/player'
export default {
  name: 'homeVideo',
  props: ['titName'],
  data () {
    return {}
  },
  components: {
    player: Player
  }
}
</script>

<style scoped>
  .cont_tit2{
    width: 46%;
    height: 45px;
    line-height: 42px;
    background-image: url("../../assets/homepic/tit_btn.png");
    background-size: 100% 100%;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    position: absolute;
    top: -14px;
    font-family: siyuan-bold;
    font-size: 14px;
    z-index: 999;
    left: 27%;
  }
  .more_vedio {
    display: block;
    width:96%;
    text-align: center;
    margin:17px auto;
  }
  .more_vedio img {
    width: 40%;
  }
</style>
