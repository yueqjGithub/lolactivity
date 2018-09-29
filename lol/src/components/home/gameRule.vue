<template>
  <div class="game_rule" @click = 'showTog'>
    <div class="rule_mode">
      <div class="cont1">
        <div class="cont_tit">{{titName}}</div>
        <p class="cont2_p first_rule"> 1、比赛以5V5团体赛进行；</p>
        <p class="cont2_p"> 2、每局比赛以三局两胜制进行；</p>
        <p class="cont2_p"> 3、比赛赛程按事业群级海选、园区级海选、园区决赛、全国总决赛进行；</p>
        <p class="cont2_p">4、事业群级冠军晋级园区级海选赛并角逐出冠亚季军，各园区级冠军战队抽签进行园区决赛，角逐出前三名晋级全国总决赛；</p>
        <p class="cont2_p last_rule">5、全国总决赛巅峰对决将在郑州园区举行，届时将进行盛大的线下比赛和颁奖盛典，同时将进行线上赛事直播。</p>
      </div>
    </div>
  </div>
</template>

<script>
// 赛事规则详情模块
export default {
  name: 'game_rule',
  props: ['titName'],
  data () {
    return {}
  },
  mounted: function () {
    let w = $(window).width()
    let h = $(window).height()
    console.log(w + '/' + h)
    $('.game_rule').css({'width': w + 'px', 'height': h + 'px'})
  },
  methods: {
    showTog: function () {
      this.$emit('childclick')
    }
  }
}
</script>

<style scoped>
.game_rule {
  background-color: rgba(0,0,0,0.8);
  position: fixed;
  top: 0;
  left:0;
  z-index:10000;
}
  .rule_mode{
    width:79%;
    margin:200px auto;
  }
  .cont2_p{
    width: 95%;
    margin: 2px auto;
    font-size: 12px;
    color: #ffffff;
    text-align: left;
  }
  .first_rule{
    margin-top: -9px;
  }
  .last_rule{
    margin-bottom: 9px;
  }
</style>
