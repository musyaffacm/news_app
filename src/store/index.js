import Vue from "vue";
import Vuex from "vuex";
import news from "./news";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    news: {
      namespaced: true,
      ...news,
    },
  },
});
