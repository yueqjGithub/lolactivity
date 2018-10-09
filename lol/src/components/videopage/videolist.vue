<template>
  <div class="videoList">
    <div class="cont2">
      <player src="/static/video/game1.mp4"></player>
    </div>
    <div class="cont2">
      <player src="/static/video/game2.mp4"></player>
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
