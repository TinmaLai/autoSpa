// src/store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isShowCart: false
    };
  },
  mutations: {
    // increment(state) {
    //   state.count++;
    // },
    // decrement(state) {
    //   state.count--;
    // },
    // setMessage(state, newMessage) {
    //   state.message = newMessage;
    // },
  },
  actions: {
    // incrementAsync({ commit }) {
    //   setTimeout(() => {
    //     commit('increment');
    //   }, 1000);
    // },
  },
  getters: {
    // count: (state) => state.count,
    // message: (state) => state.message,
  },
});

export default store;
