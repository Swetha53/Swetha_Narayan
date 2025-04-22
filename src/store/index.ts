import { createStore } from "vuex";

export default createStore({
  state: {
    isMobile: <boolean>false,
    isDarkMode: <boolean>false,
  },
  getters: {
    getLayoutValue: (state: { isMobile: boolean }) => {
      return state.isMobile;
    },
    getTheme: (state: { isDarkMode: boolean }) => {
      return state.isDarkMode;
    },
  },
  mutations: {
    setLayoutValue(state: { isMobile: boolean }) {
      if (window.screen.width <= 900) {
        state.isMobile = true;
      } else {
        state.isMobile = false;
      }
    },
  },
});
