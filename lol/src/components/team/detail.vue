<template>
  <div class="detail">
    <div class="team_xx">
      <span class="label1">
        <img src="@/assets/teampic/t2.png" alt="" v-if="this.$props.duty == '队长姓名'" class="tPic2">
        <img src="@/assets/teampic/t3.png" alt="" v-if="this.$props.duty == '队员姓名'" class="tPic2">
        {{this.$props.duty}}
      </span>
      <input type="text" class="l_input" required v-model.trim.lazy="personInfo.name">
    </div>
    <div class="team_xx">
      <span class="label">工&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</span>
      <input type="text" class="l_input" required v-model.trim.lazy="personInfo.work_number">
    </div>
    <div class="team_xx">
      <span class="label">游戏QQ号</span>
      <input type="text" class="l_input" required v-model.trim.lazy="personInfo.qq">
    </div>
    <div class="team_xx">
      <span class="label">手机号码</span>
      <input type="tel" class="l_input" required v-model.trim.lazy="personInfo.mobile">
    </div>
    <div class="team_xx">
      <span class="label">所属事业群</span>
      <input type="text" class="l_input" required v-model.trim.lazy="personInfo.ascription">
    </div>
    <!--<p style="color: #ffffff;">is leader?  {{isLead}}</p>-->
    <p style="display: none;" class="finalVal">{{personInfo}}</p>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: ['duty'],
  data () {
    return {
      personInfo: {
        name: '',
        work_number: '',
        qq: '',
        mobile: '',
        ascription: ''
      }
    }
  }
}
</script>

<style scoped>
  .tPic2 {
    width: 14px;
    display: inline-block;
    position: relative;
    top: 2px;
    margin-right: 2px;
  }
</style>
