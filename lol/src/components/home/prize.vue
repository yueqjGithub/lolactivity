<template>
  <div class="prize_cont">
    <img src="@/assets/homepic/prize.png" alt="" class="prize_pic">
    <router-link class="prize_btn" to="/prize">
      <img src="@/assets/homepic/join_prize.png" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'prize',
  data () {
    return {}
  }
}
</script>

<style scoped>
.prize_cont {
  width: 100%;
}
  .prize_pic{
    width: 100%;
  }
  .prize_btn {
    display: block;
    width:96%;
    text-align: center;
    margin:17px auto;
  }
  .prize_btn img {
    width: 40%;
  }
</style>
