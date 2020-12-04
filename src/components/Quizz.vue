<template>
  <div class="container">
    <h1 class="mb-4">{{ nom }}</h1>
    <div class="centre-wrapper">
    <b-alert v-if="fin" show>Votre score est : {{ score }} / {{ questions.length }}</b-alert>
    <b-card :header="questions[index].question"
            header-tag="header">
      <b-list-group>
        <b-list-group-item
            button
            v-for="(item, index) in questions[index].answers"
            :key="item.id"
            @click="action(index)"
            :variant="variants[index]">
          {{ item }}
        </b-list-group-item>
      </b-list-group>
      <b-button v-if="fin" @click="recommencer" class="mt-4">Recommencer !</b-button>
      <b-button v-if="fin" to="/" class="mt-4 ml-2">Choisir un autre quiz !</b-button>
      <b-button v-if="voirReponse && !fin" @click="continuer" class="mt-4">Continuer !</b-button>
    </b-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Quiz',
  data: function () {
    return {
      id: 0,
      fin: false,
      index: 0,
      score: 0,
      variants: [...Array(4)],
      voirReponse: false,
    }
  },
  methods: {
    action: function(index) {
      if(index == this.questions[this.index].ok) {
        this.score++;
      } else {
        this.variants[index] = 'danger';
      }
      this.voirReponse = true;
      this.variants[this.questions[this.index].ok] = 'success';
      if(this.index == this.questions.length - 1) {
        this.fin = true;
      }
    },
    recommencer: function() {
      this.voirReponse = this.fin = this.index = this.score = 0;
      this.variants = [...Array(4)];
    },
    continuer: function() {
      this.voirReponse = false;
      this.variants = [...Array(4)];
      this.index++;
    }
  },
  computed: {
    nom () {
      return this.$store.state.quizs[this.id].nom;
    },
    questions () {
      return this.$store.state.quizs[this.id].questions;
    }
  },
  created() {
    this.id = this.$route.params.id;
  }
}
</script>

<style>
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
  background-color: #d4af82!important;
}
</style>