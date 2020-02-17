<template>
  <div id="score">
    <h1>This is a score page</h1>
    <RankingBoard/>
  </div>
</template>
<script>
  import RankingBoard from '../components/RankingBoard.vue'
  export default {
  name: 'score',
  components: {
    RankingBoard
  },
}
</script>