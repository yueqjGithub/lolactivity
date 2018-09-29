<template>
  <div>
    <div class="sign_login_mode">
      <h2 style="color: #ffffff;text-align: right;padding-right: 15px;font-family: siyuan;" @click="close">X</h2>
      <div class="team_xx">
        <label for="login_number" class="label">手机号</label>
        <input type="tel" id="login_number" class="l_input" v-model.trim="tel">
      </div>
      <div class="team_xx">
        <label for="login_pwd" class="label">密码</label>
        <input type="text" id="login_pwd" class="l_input" placeholder="" v-model.lazy.trim="pwd">
      </div>
      <div class="btngroup">
        <img src="@/assets/prizepic/login2.png" alt="" @click="login">
      </div>
    </div>
  </div>
</template>

<script>
import url from '@/components/api/api.js'
import { Toast } from 'mint-ui'
export default {
  name: '',
  data () {
    return {
      tel: '',
      pwd: ''
    }
  },
  methods: {
    close: function () { // 关闭登录框
      this.$emit('closeregister')
    },
    login: function () {
      let data = {
        mobile: this.tel,
        password: this.pwd
      }
      let ret = url.turnCode(data)
      this.axios.post(url.login, ret).then(function (res) {
        console.log(res)
        if (res.data.code === 200) {
          Toast(res.data.msg)
          this.$emit('loginsuc')
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
