<template>
  <div class="cont1">
    <div class="cont_tit">{{titName}}</div>
    <p class="cont1_p">2018英雄联盟富士康企业杯正式开赛，快召集你的兄弟一起组队报名吧！获胜队伍还有丰富的现金奖励哦</p>
    <img src="@/assets/homepic/gz.png" alt="" class="gz" @click="showRuleSon">
    <div class="bonus">
      <bonus goldNum = '3999'></bonus>
      <bonus goldNum = '5999'></bonus>
      <bonus goldNum = '8999'></bonus>
    </div>
    <img src="@/assets/homepic/jj.png" alt="" class="join_tit">
    <router-link class="join" to="/team">
      <img src="@/assets/homepic/join_game.png" alt="" class="join_btn">
    </router-link>
  </div>
</template>

<script>
// 引入赛事奖金组件 bonus
import bonus from '@/components/home/bonus'
export default {
  name: 'cont1',
  props: ['titName'],
  components: {
    bonus: bonus
  },
  data () {
    return {}
  },
  methods: {
    showRuleSon: function () {
      this.$emit('childclick')
    }
  }
}
</script>

<style scoped>
.cont1_p{
  width: 95%;
  margin: 0 auto;
  font-size: 12px;
  color: #ffffff;
  text-align: left;
  margin-top: -6px;
}
  .gz{
    width:33%;
    margin:5px auto;
  }
.bonus{
  display: flex;
  width: 86%;
  margin:7px auto;
}
  .join_tit{
    width:68%;
    margin:7px auto;
  }
  .join{
    display: block;
    width: 100%;
  }
  .join_btn{
    width: 40%;
    margin:0 auto;
  }
</style>
