import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";


Vue.use(Vuex)


export default new Vuex.Store({
    // on met les var
    state: {
        quizs: []
    },
    // on met les methode dans mutations et actions
    mutations: {
        setQuizzData(state, quizzdata) {
            //console.log(data);
            state.quizs = quizzdata;
        }
    },
    actions: {
        // context = contient toutes les props et method de la biblio ;
        // c'est l'objet principal de vueex;
        // objet instancié quand on utilise vueex
        async getQuizzData(context) {
            let quizzdata = (await Axios.get("http://localhost:3000/quizs")).data
            context.commit("setQuizzData", quizzdata);
        }
    }
})









