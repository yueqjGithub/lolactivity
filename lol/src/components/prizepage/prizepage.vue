<template>
  <div class="prize">
    <!--间距隔块-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
    <div class="distance"></div>
    <!--抽取标题-->
    <div class="cont_tit2">
      iphone8抽取
    </div>
    <!--奖品图片-->
    <div class="phonepic">
      <img src="@/assets/prizepic/phone.png" alt="">
    </div>
    <!--登录注册按钮-->
    <div class="user_btn" v-if="!isLogin">
      <div class="u_div">
        <img src="@/assets/prizepic/sign.png" alt="" class="u_btn" @click="checkNav">
      </div>
      <div class="u_div">
        <img src="@/assets/prizepic/login.png" alt="" class="u_btn" @click="login">
      </div>
    </div>
    <h3 class="priz_h" v-if="isLogin">恭喜您已获得抽奖资格，</h3>
    <!--步骤提示-->
    <div class="cont1">
      <img src="@/assets/prizepic/word.png" alt="" class="infopic">
      <h4 class="priz_h">IOS用户</h4>
      <p class="priz_p">ios用户点击注册,成功后并登录即可获得抽奖资格</p>
      <h4 class="priz_h">安卓用户</h4>
      <p class="priz_p">安卓用户请点击注册后下载对应app并在app内完成注册,返回本页成功登录即可获得抽奖资格</p>
    </div>
    <!--登录框-&#45;&#45;-->
    <sign-mod class="sign_mod" v-if="signIn === 1" @closeregister="closeR"></sign-mod>
    <login-mod  class="sign_mod" v-if="signIn === 2" @closeregister="closeR" @loginsuc = "loginsuc"></login-mod>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
// 引入注册框
import SignMod from '@/components/prizepage/sign'
// 登录框
import LoginMod from '@/components/prizepage/login'
export default {
  name: 'prizePage',
  data () {
    return {
      //      控制注册面板显示 0-不显示 1-显示注册面板 2-显示登录面板
      signIn: 0,
      isLogin: false
    }
  },
  components: {
    signMod: SignMod,
    loginMod: LoginMod
  },
  methods: {
    checkNav: function () {
      let vm = this
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        // alert(navigator.userAgent);
        vm.signIn = 1
      } else if (/(Android)/i.test(navigator.userAgent)) {
        // alert(navigator.userAgent);
        window.location.href = 'http://static.flf.flnet.com/download/index.html?ADTAG=wx'
      } else {
        Toast('请在微信浏览器中打开')
      }
    },
    closeR: function () {
      this.signIn = 0
    },
    loginsuc: function () {
      this.isLogin = true
      this.signIn = 0
    },
    login: function () {
      let vm = this
      vm.signIn = 2
    }
  }
}
</script>

<style scoped>
.distance {
  height: 371px;
}
.phonepic {
  margin-top: -55px;
}
.u_div {
  width:100%;
  text-align: center;
}
  .u_btn{
    width:40%;
    margin:0 auto;
  }
  .infopic{
    display: inline-block;
    width: 96%;
    margin:17px auto;
  }
  .priz_h{
    width:96%;
    margin:0 auto;
    color: #ffffff;
  }
  .cont1{
    width: 96%;
    margin: 15px auto 0 auto;
    background-image: url('../../assets/homepic/contbg1.png');
    background-size: 100% 100%;
    /* min-height: 250px; */
    text-align: center;
    /* border-top: 0px solid; */
    padding-bottom: 1px;
  }
  .priz_p {
    width:96%;
    margin:5px auto;
    color: #ffffff;
    text-align: left;
    font-size: 12px;
  }
  /*注册框样式------*/
.sign_mod{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
}
</style>
