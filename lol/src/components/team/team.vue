<template>
  <div class="team">
    <p class="team_info">
      <img src="@/assets/teampic/t1.png" alt="" class="tPic1">请填写战队信息和成员信息，成员人数达5人才可组队，替补成员如有
      可填写，没有则无需填写。
    </p>
    <p class="teamMsg">战队信息</p>
    <div class="part team_xx">
      <span class="label">战队名称</span>
      <input type="text" id="t_name" class="t_input" required v-model="teamName" maxlength="8">
      <img src="@/assets/teampic/t4.png" alt="" class="checkName" @click="checkTeamName">
    </div>
    <div class="part team_xx">
      <span class="label">所属园区</span>
      <input class="part_sel" required>
    </div>
    <p class="teamMsg">队员信息</p>
    <detail duty="队长姓名"></detail>
    <detail duty="队员姓名"></detail>
    <detail duty="队员姓名"></detail>
    <detail duty="队员姓名"></detail>
    <detail duty="队员姓名"></detail>
    <div class="sub">
      <img src="@/assets/teampic/submit.png" alt=""  @click = 'sub'>
    </div>
    <div class="name_fa" v-if="nameDouble">
      <h2 style="color: #ffffff;text-align: right;padding-right: 15px;font-family: siyuan;" @click="close">X</h2>
      <img src="@/assets/teampic/named.png" alt="">
    </div>
  </div>
</template>

<script>
import Detail from '@/components/team/detail'
import url from '@/components/api/api.js'
import {Toast} from 'mint-ui'
export default {
  name: 'team',
  data () {
    return {
      mention: '',
      // 战队名字重复则为 true，控制重复提示的弹窗
      nameDouble: false,
      // 需要传输的信息
      teamName: ''
    }
  },
  components: {
    detail: Detail
  },
  methods: {
    sub: function () {
      let vm = this
      let data = {}
      let msg1 = ''
      data.teamName = $('#t_name').val()
      data.address = $('.part_sel').val()
      data.data = []
      var len = $('.detail').length
      for (let i = 0; i < len; i++) {
        let val = $('.detail').eq(i).find('.finalVal').text()
        val = JSON.parse(val)
        if (i === 0) {
          val.is_captain = 1
        } else {
          val.is_captain = 0
        }
        if (val.name !== '' && val.work_number !== '' && val.qq !== '' && val.mobile !== '' && val.ascription !== '') {
          data.data.push(val)
        } else {
          msg1 += '选手' + (i + 1) + '信息未填写完整'
        }
      }
      if (data.data.length === 5 && data.teamName !== '') { // 信息收集完毕时
        data.data = JSON.stringify(data.data)
        this.axios.post(url.saveTeamData, data).then(function (res) {
          Toast(res.data.msg)
          setTimeout(function () {
            vm.$router.push({path: '/index'})
          }, 3000)
        })
      } else { // 有选手信息未填写完整
        vm.mention = msg1
        Toast(vm.mention)
      }
    },
    checkTeamName: function () {
      let vm = this
      let data = {
        teamName: this.teamName
      }
      let ret = url.turnCode(data)
      this.axios.post(url.checkTeamName, ret).then(function (res) {
        if (res.data.code === 200) {
          Toast(res.data.msg)
          vm.nameDouble = false
        } else if (res.data.code === 401) {
          vm.nameDouble = true
        } else {
          Toast(res.data.msg)
        }
      })
    },
    close: function () {
      let vm = this
      vm.nameDouble = false
    }
  }
}
</script>

<style scoped>
  .teamMsg{
    width:100%;
    font-size: 14px;
    text-align: center;
    color: #ffffff;
    margin-top: 33px;
    margin-bottom: 20px;
  }

  .t_input{
    width:45%;
    height: 33px;
    line-height: 33px;
  }

  .checkName{
    max-height: 33px;
    width:21%;
    margin-left: 3px;
    vertical-align: middle;
  }

  .part_sel{
    width:68%;
    height: 33px;
  }
  .sub{
    width:96%;
    text-align: center;
    margin:17px auto;
  }
  .sub img{
    width:40%;
  }
  .name_fa {
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    left: 0;
  }
  .name_fa img {
    width: 80%;
    margin: 170px auto 0 auto;
    display: block;
  }
</style>
