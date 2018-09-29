<template>
  <div class="bonus_msg">
    <div class="bonus_tit">事业群</div>
    <p class="bonus_num">总奖金</p>
    <p class="bonus_num">{{goldNum}}元</p>
  </div>
</template>

<script>
export default {
  name: 'bonus',
  props: ['goldNum'],
  data () {
    return {}
  }
}
</script>

<style scoped>
  .bonus_msg{
    width:30%;
    flex: 1;
    background: #fffbf3;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    height: 50px;
    margin:0 7px;
    -webkit-box-shadow: 2px 2px 4px #999 inset;
    -moz-box-shadow: 2px 2px 4px #999 inset;
    box-shadow: 2px 2px 4px #999 inset;              /* For Latest Opera */
  }
  .bonus_tit{
    background-image: url("../../assets/homepic/bonus_tit.png");
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    width:63%;
    margin-left:auto;
    margin-right:auto;
    margin-top: -7px;
    height: 17px;
    line-height: 17px;
    color: #ffffff;
    font-size: 12px;
  }
  .bonus_num{
    font-size: 14px;
  }
</style>
