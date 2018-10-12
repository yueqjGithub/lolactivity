<template>
  <div class="home">
    <div class="distance"></div>
    <cont1 titName="报名进行时ing" @childclick="showRule"></cont1>
    <prize></prize>
    <promotion titName="海 选 赛"></promotion>
    <home-vedio titName="总决赛巅峰对决"></home-vedio>
    <div class="bottomPic">
      <img src="@/assets/homepic/bottom.png" alt="">
    </div>
    <game-rule titName="企业杯赛事规则" v-if="ruleShow" @childclick="showRule"></game-rule>
  </div>
</template>

<script>
// 第一块信息组件 cout1 bonus
import Cont from './cont_1.vue'
// 第二块信息组件 prize
import Prize from '@/components/home/prize'
// 第三块信息  promotion
import Promotion from '@/components/home/promotion'
// 视频快的信息 homeVedio
import HomeVedio from '@/components/home/homeVedio'
// 赛事规则弹窗组件
import GameRule from '@/components/home/gameRule'
export default {
  name: 'home',
  data () {
    return {
      //      赛事规则是否显示
      ruleShow: false
    }
  },
  components: {
    cont1: Cont,
    prize: Prize,
    promotion: Promotion,
    homeVedio: HomeVedio,
    gameRule: GameRule
  },
  methods: {
    showRule: function () { // 更改this.ruleShow控制赛事规则面板显示
      console.log(this.ruleShow)
      if (this.ruleShow) {
        this.ruleShow = false
      } else {
        this.ruleShow = true
      }
    }
  }
}
</script>

<style scoped>
.home {
  background-image: url("../../assets/homepic/bg.jpg");
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
  width: 100%;
  /*min-height后面需要取消*/
  padding-bottom: 25px;
}
/*大屏 plus */
@media screen and (min-width: 400px) {
  .distance {
    min-height: 275px;
  }
}
/*中屏幕 iphone6 */
@media screen and (min-width: 320px) and (max-width: 399px) {
  .distance {
    min-height: 255px;
  }
}
/*小屏幕 <320*/
@media screen and (max-width: 320px) {
  .distance {
    min-height: 235px;
  }
}
  .distance{
    /*height: 252px;*/
    width: 100%;
  }
  .bottomPic{
    width:83%;
    margin: 16px auto;
  }
</style>
