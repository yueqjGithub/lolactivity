<template>
  <div class="videoList">
    <div class="cont2">
      <player src="http://www.w3school.com.cn/i/movie.ogg"></player>
    </div>
  </div>
</template>

<script>
import Player from '@/components/home/player'
export default {
  name: 'videoList',
  data () {
    return {}
  },
  components: {
    player: Player
  }
}
</script>

<style scoped>

</style>
