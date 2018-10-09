<template>
  <div>
    <div class="sign_login_mode">
      <h2 style="color: #ffffff;text-align: right;padding-right: 15px;font-family: siyuan;" @click="close">X</h2>
      <div class="team_xx">
        <label for="sign_number" class="label">手机号</label>
        <input type="tel" id="sign_number" class="l_input" v-model.trim="tel">
      </div>
      <div class="team_xx">
        <label for="pwd" class="label">密码</label>
        <input type="text" id="pwd" class="l_input" placeholder="" v-model.lazy.trim="pwd">
      </div>
      <div class="team_xx">
        <label for="checkCode" class="label">验证码</label>
        <input type="tel" id="checkCode" class="l_input" placeholder="请输入您收到的验证码" @blur="checkSMG" v-model.lazy="code">
      </div>
      <div class="btngroup">
        <img src="@/assets/prizepic/getCode.png" alt="" @click="sendCode">
        <img src="@/assets/prizepic/sign2.png" alt="" @click="registe">
      </div>
    </div>
  </div>
</template>

<script>
import url from '@/components/api/api.js'
import { Toast } from 'mint-ui'
export default {
  name: 'sign',
  data () {
    return {
      tel: '',
      code: '',
      pwd: ''
    }
  },
  methods: {
    sendCode: function () {
      let data = {
        mobile: this.tel
      }
      let ret = url.turnCode(data)
      //      console.log(ret)
      this.axios.post(url.sendSmg, ret).then(function (res) {
        console.log(res)
        Toast(res.data.msg)
      }, function (err) {
        console.log(err)
      })
    },
    checkSMG: function () { // 校对验证码
      let data = {
        mobile: this.tel,
        code: this.code
      }
      let ret = url.turnCode(data)
      this.axios.post(url.checkCode, ret).then(function (res) {
        console.log(res)
        Toast(res.data.msg)
      }, function (err) {
        Toast(err)
      })
    },
    registe: function () {
      let vm = this
      let data = {
        mobile: this.tel,
        password: this.pwd
      }
      let ret = url.turnCode(data)
      this.axios.post(url.register, ret).then(function (res) {
        if (res.data.code === 200) {
          Toast(res.data.msg)
          vm.$emit('closeregister')
        } else {
          Toast(res.data.msg)
        }
      })
    },
    close: function () { // 关闭注册框
      this.$emit('closeregister')
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
