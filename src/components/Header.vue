<script setup lang="ts">
    import {reactive} from 'vue'
    import {useRouter, useRoute} from 'vue-router'
    import Menu from "./Menu.vue"
    import store from "./../store"

    const router = useRouter()
    const route = useRoute()
    const state = reactive({
        toggleMenu: 'none',
        activeSection: 'Home'
    })

    function receiveToggleData(toggleState: string) {
        state.toggleMenu = toggleState
        if (toggleState == 'open' && route.name) {
            state.activeSection = <string>route.name
        }
    }
    function redirectToPage(section: string) {
        state.activeSection = section
        router.push({ name: section })
    }
</script>

<template>
    <div class="header monofett" :class="state.toggleMenu == 'open' ? 'header__open' : 'header__close'">
        <div class="header__cell">
            <Menu @sendToggleData="receiveToggleData"></Menu>
        </div>
        <div class="header__cell" :class="{'header__cell-active': state.activeSection == 'Home', 'header__cell-mobile': store.getters.getLayoutValue}"
            v-if="state.toggleMenu == 'open'"
            @click="redirectToPage('Home')">
            <img class="header__image" src="./../assets/home.svg" alt="Home">
            <p v-if="!store.getters.getLayoutValue">Home</p>
        </div>
        <div class="header__cell" :class="{'header__cell-active': state.activeSection == 'About', 'header__cell-mobile': store.getters.getLayoutValue}"
            v-if="state.toggleMenu == 'open'" 
            @click="redirectToPage('About')">
            <img class="header__image" src="./../assets/profile.svg" alt="About Me">
            <p v-if="!store.getters.getLayoutValue">About Me</p>
        </div>
        <div class="header__cell" :class="{'header__cell-active': state.activeSection == 'Portfolio', 'header__cell-mobile': store.getters.getLayoutValue}"
            v-if="state.toggleMenu == 'open'"
            @click="redirectToPage('Portfolio')">
            <img class="header__image" src="./../assets/website.svg" alt="Portfolio">
            <p v-if="!store.getters.getLayoutValue">Portfolio</p>
        </div>
        <div class="header__cell" :class="{'header__cell-active': state.activeSection == 'Contact', 'header__cell-mobile': store.getters.getLayoutValue}"
            v-if="state.toggleMenu == 'open'" 
            @click="redirectToPage('Contact')">
            <img class="header__image" src="./../assets/contact.svg" alt="Contact">
            <p v-if="!store.getters.getLayoutValue">Contact</p>
        </div>
        <div v-if="state.toggleMenu == 'none'" class="header__info">
            <i v-for="i in 3" :key="i" class="header__info-arrow"></i>
            <p>Click here to open the menu</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    .header {
        display: grid;
        font-size: 32px;
        min-height: 118px; //TODO: change to %age
        position: relative;
        &__open {
            grid: auto / repeat(5, minmax(0, 1fr));
        }
        &__close {
            grid: auto / 1fr 4fr;
        }
        &__cell {
            cursor: pointer;
            place-items: center;
            display: grid;
            grid: auto / 1fr 3fr;
            border-left: 2px solid $secondary;
            &:first-child {
                display: flex;
                justify-content: center;
                align-items: center;
                border-left: none;
            }
            &-active {
                border: 3px solid $tertiary;
                background-image: radial-gradient(farthest-corner at 0% 0%, $tertiary-10 10%, $tertiary-50 70%, $tertiary 100%);
            }
            &-mobile {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        &__image {
            height: 32px;
            width: 32px;
        }
        &__info {
            position: relative;
            font-family: "Tapestry", system-ui, Avenir, Helvetica, Arial, sans-serif;
            font-size: 22px;
            place-self: center;
            animation: 2s infinite normal move;
            animation-fill-mode: forwards;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            &-arrow {
                border: solid $secondary;
                border-width: 0 10px 10px 0;
                display: inline-block;
                padding: 14px;
                transform: rotate(135deg);
                -webkit-transform: rotate(135deg);
            }
        }
    }
    @media (max-width: 900px) {
        .header {
            &__info {
                font-size: 14px;
                &-arrow {
                    border-width: 0 5px 5px 0;
                    padding: 7px;
                }
            }
        }
    }
    @keyframes move {
        0% {
            right: -20%;
        }
        100% {
            right: 20%;
        }
    }
</style>
