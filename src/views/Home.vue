<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/quizz.png">
    <Quizzs msg="Let's solve the quiz!"/>
  </div>
</template>

<script>
// @ is an alias to /src

import Quizzs from '@/components/Quizzs.vue'

export default {
  name: 'Home',
  components: {
    Quizzs

  }
}
</script>
<style>
body{
  background-color: #2c3e50 !important;
  color:white;}
.home>img{
  max-width:400px;
}
</style>