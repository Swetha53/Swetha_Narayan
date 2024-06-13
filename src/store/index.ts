import { createStore } from 'vuex'

export default createStore({
    state: {
        isMobile: <boolean>false
    },
    getters: {
        getLayoutValue: (state: { isMobile: boolean }) => {
            return state.isMobile
        }
    },
    mutations: {
        setLayoutValue (state: { isMobile: boolean }) {
            console.log(window.screen.width)
            if (window.screen.width <= 900) {
                state.isMobile = true
            } else {
                state.isMobile = false
            }
        }
    }
})