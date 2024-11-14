// src/store.js
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  state() {
    return {
      isShowCart: true
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
    updateIsShowCart(state, isShowCart){
      state.isShowCart = isShowCart;
    }
  },
  actions: {
    // incrementAsync({ commit }) {
    //   setTimeout(() => {
    //     commit('increment');
    //   }, 1000);
    // },
    updateIsShowCart({commit}, isShowCart){
      commit('updateIsShowCart', isShowCart);
    }
  },
  getters: {
    // count: (state) => state.count,
    // message: (state) => state.message,
    getIsShowCart(state) {
      return state.isShowCart;
    },
  },
  plugins: [createPersistedState()],
});

export default store;
