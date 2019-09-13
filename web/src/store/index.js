import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigator: {
      strict: true,
      namespaced: true,
      state: {
        stack: [],
        options: {}
      },
      mutations: {
        push(state, page) {
          state.stack.push(page);
        },
        pop(state) {
          if (state.stack.length > 1) {
            state.stack.pop();
          }
        },
        replace(state, page) {
          state.stack.pop();
          state.stack.push(page);
        },
        reset(state, page) {
          state.stack = [page || state.stack[0]];
        }
      }
    },
    tabbar: {
      strict: true,
      namespaced: true,
      state: {
        index: 0
      },
      mutations: {
        set(state, index) {
          state.index = index;
        }
      }
    },
    movieTabbar: {
      strict: true,
      namespaced: true,
      state: {
        index: 0
      },
      mutations: {
        set(state, index) {
          state.index = index;
        }
      }
    },
    selectPage: {
      strict: true,
      namespaced: true,
      state: {
        city: {
          value: localStorage.getItem("city") || "北京",
          trueValue: false
        }
      },
      mutations: {
        changeCity(state, payload) {
          localStorage.setItem("city", payload.value);
          state.city = {
            value: payload.value,
            trueValue: payload.trueValue
          };
        }
      }
    }
  }
});
