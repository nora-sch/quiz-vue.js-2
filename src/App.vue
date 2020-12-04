<template>
  <div id="app">
    <div id="nav">

      <router-link to="/">Quiz</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/particles">Particles</router-link> |
      <router-link to="/countries">Countries</router-link>

    </div>
    <router-view/>
  </div>
</template>

<script>
export default{
  watch:{
    '$route'(to){
      document.title=to.meta.title || "Quiz-2"
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Katibeh&display=swap');

body{
  background-color: #2c3e50;
  color:white !important;
  font-family: 'Katibeh', cursive !important;
  font-size:1.5rem !important;
}
/*
@font-face {
  font-family: 'Shadows Into Light', cursive;
  src: local("Shadows"),
  url(https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap) format("truetype");
}*/
#app {
 /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;


}

#nav {
  padding: 30px;
  background-color: transparent;
  color: white;
}

#nav a {
  text-decoration-line: none;
  color: white;
}

#nav a.router-link-exact-active {
  color: white;
  text-decoration-line: blink;
  font-weight: bold;
}

</style>
