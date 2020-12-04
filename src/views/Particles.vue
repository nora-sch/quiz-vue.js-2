<template>

  <div id="app">

    <vue-particles class="particles-js"
                   color="#dedede"
                   :particleOpacity="0.7"
                   :particlesNumber="80"
                   shapeType="circle"
                   :particleSize="10"
                   linesColor="#dedede"
                   :linesWidth="2"
                   :lineLinked="false"
                   :lineOpacity="0.4"
                   :linesDistance="150"
                   :moveSpeed="7"
                   :hoverEffect="true"
                   hoverMode="grab"
                   :clickEffect="true"
                   clickMode="push">
    </vue-particles>
    <div class="centred-position">
      <h1>Touch the particles!</h1>
      <h3>It's magic!</h3>
    </div>


  </div>
</template>

<script>

</script>

<style scoped>
body {
  color: white;
}

.particles-js {
  color: white;
  height: 100vh;
  width: 100vw;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-repeat: repeat;
  background-size: cover;
  z-index: -1;
}

h1 {
  color: white;
}

.centred-position {


}
</style>