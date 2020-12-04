<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="centre-wrapper">
      <b-card header="Choisissez un quiz" header-tag="header">
        <b-list-group>
          <b-list-group-item
              button
              v-for="(item, index) in quizs"
              :key="item.id"
              @click="action(index)">
            {{ item.nom }}
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Quizzs',
  props: {
    msg: String
  },
  methods: {
    action: function (index) {
      this.$router.push({name: 'Single quizz', params: {id: index}})
    }
  },
  computed: {
    quizs() {
      return this.$store.state.quizs;
    }
  },
  created() {
    this.$store.dispatch('getQuizzData');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.hello{
  color:white;
}
.centre-wrapper{
  text-align: center;
  margin-top:2em;
  justify-content: center;
  display: flex;
}
.card {
  color: #2c3e50 !important;
  min-width: 400px;
  max-width: 600px;
  background-color: #d4af82;
}
</style>
