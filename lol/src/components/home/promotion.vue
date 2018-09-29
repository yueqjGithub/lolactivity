<template>
  <div class="cont1">
    <div class="cont_tit">{{titName}}</div>
    <p class="cont1_p">
      报名结束后将进入事业群海选、园区海选阶段，最终各园区及冠军队伍角逐出前三名参加全国总决赛。
    </p>
    <img src="@/assets/homepic/vs.png" alt="" class="vspic">
    <!--<router-link class="promotion_btn" to="/promotionPic">-->
      <!---->
    <!--</router-link>-->
    <div class="promotion_btn">
      <img src="@/assets/homepic/promotion_btn.png" alt="">
    </div>
  </div>
</template>

<script>
// 海选赛晋级图模块-主页
export default {
  name: 'promotion',
  props: ['titName'],
  data () {
    return {}
  }
}
</script>

<style scoped>
.vspic{
  width: 18%;
  margin: 30px auto;
}
  .promotion_btn{
    display: block;
    width:96%;
    text-align: center;
    margin:2px auto;
  }
  .promotion_btn img{
    width: 40%;
  }
</style>
