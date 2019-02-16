import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count:0,
    addEventConf: 1,
    message: "this is want change String!"
  },
  mutations: {
    increase () {
      this.state.count ++
    },
    addEventConf () {
      this.state.addEventConf += 2
    },
     changeString () {
      this.state.message = "this is change after string"
    }
  },
  actions: {

  },
});
