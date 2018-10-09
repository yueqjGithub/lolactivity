<template>
  <div>
    <div class="sign_login_mode">
      <h2 style="color: #ffffff;text-align: right;padding-right: 15px;font-family: siyuan;" @click="close">X</h2>
      <h2 style="text-align: center;color: #ffffff;">员工认证</h2>
      <div class="team_xx">
        <label for="login_number" class="label">手机号</label>
        <input type="tel" id="login_number" class="l_input" v-model.trim="tel">
      </div>
      <div class="team_xx">
        <label for="login_jobnumber" class="label">职位编号</label>
        <input type="text" id="login_jobnumber" class="l_input" placeholder="" v-model.lazy.trim="jobNumber">
      </div>
      <div class="team_xx">
        <label for="login_idcard" class="label">身份证号码</label>
        <input type="text" id="login_idcard" class="l_input" placeholder="" v-model.lazy.trim="peopleId">
      </div>
      <div class="btngroup">
        <img src="@/assets/prizepic/rz.png" alt="" @click="identity">
      </div>
    </div>
  </div>
</template>

<script>
import url from '@/components/api/api.js'
import { Toast } from 'mint-ui'
export default {
  name: 'identity',
  data () {
    return {
      tel: '',
      jobNumber: '',
      peopleId: ''
    }
  },
  methods: {
    close: function () { // 关闭登录框
      this.$emit('closeregister')
    },
    identity: function () {
      let vm = this
      let data = {
        mobile: this.tel,
        jobNumber: this.jobNumber,
        peopleId: this.peopleId
      }
      let ret = url.turnCode(data)
      this.axios.post(url.personnelAuth, ret).then(function (res) {
        console.log(res)
        if (res.data.code === 200) {
          Toast(res.data.msg)
          vm.$emit('checksuc')
        } else {
          Toast(res.data.msg)
        }
      })
    }
  }
}
</script>

<style scoped>
  .btngroup {
    width:100%;
  }
  .btngroup img {
    display: inline-block;
    width: 40%;
    margin: 14px 14px 0 14px;
  }
</style>
