import Vuex from "vuex";
const { createStore } = Vuex;

export default createStore({
  state: {
    isMobile: <boolean>false,
    theme: <string>"Café Tropic",
  },
  getters: {
    getLayoutValue: (state: { isMobile: boolean }) => {
      return state.isMobile;
    },
    getTheme: (state: { theme: string }) => {
      return state.theme;
    },
  },
  mutations: {
    setLayoutValue(state: { isMobile: boolean }) {
      if (window.innerWidth <= 900) {
        state.isMobile = true;
      } else {
        state.isMobile = false;
      }
    },
    setTheme(state: { theme: string }, newTheme: string) {
      state.theme = newTheme;
    },
  },
});
