<script setup lang="ts">
    import {ref, watchEffect, reactive} from 'vue'
    import {useRouter} from 'vue-router'
    import Menu from "./Menu.vue"
    const router = useRouter()
    const activeSection = ref<string>('Home')
    watchEffect(() => {
      router.push({ name: activeSection.value })
    })

    const state = reactive({
        toggleMenu: 'none'
    })
    function receiveToggleData(toggleState: string) {
        state.toggleMenu = toggleState
    }
</script>

<template>
    <div class="grid monofett">
        <div class="grid__cell">
            <Menu @sendToggleData="receiveToggleData"></Menu>
        </div>
        <div v-if="state.toggleMenu == 'open'" class="grid__cell" :class="{'grid__active': activeSection == 'Home'}" @click="activeSection='Home'">
            <img src="./../assets/home.svg" alt="Home">
            <p>Home</p>
        </div>
        <div v-if="state.toggleMenu == 'open'" class="grid__cell" :class="{'grid__active': activeSection == 'About'}" @click="activeSection='About'">
            <img src="./../assets/profile.svg" alt="About Me">
            <p>About Me</p>
        </div>
        <div v-if="state.toggleMenu == 'open'" class="grid__cell" :class="{'grid__active': activeSection == 'Portfolio'}" @click="activeSection='Portfolio'">
            <img src="./../assets/website.svg" alt="Portfolio">
            <p>Portfolio</p>
        </div>
        <div v-if="state.toggleMenu == 'open'" class="grid__cell" :class="{'grid__active': activeSection == 'Contact'}" @click="activeSection='Contact'">
            <img src="./../assets/contact.svg" alt="Contact">
            <p>Contact</p>
        </div>
        <div v-if="state.toggleMenu == 'none'" class="menu__info">
            <i v-for="i in 3" :key="i" class="menu__info-arrow"></i>
            <p>Click here to open the menu</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    .grid {
        display: grid;
        grid: auto / repeat(5, minmax(0, 1fr));
        font-size: 32px;
        min-height: 118px;
        &__cell {
            cursor: pointer;
            place-items: center;
            img {
                height: 32px;
                width: 32px;
            }
        }
        &__cell:first-child {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__cell:not(:first-child) {
            display: grid;
            grid: auto / 25% 75%;
            border-left: 2px solid $secondary;
        }
        &__active {
            border: 3px solid $tertiary;
            background-image: radial-gradient(farthest-corner at 0% 0%, $tertiary-10 10%, $tertiary-50 70%, $tertiary 100%);
        }
    }
    .menu__info {
        font-size: 22px;
        place-self: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        animation: 2s infinite normal move;
        animation-fill-mode: forwards;
        width: 375px;
        &-arrow {
            border: solid $secondary;
            border-width: 0 10px 10px 0;
            display: inline-block;
            padding: 14px;
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
        }
        p {
            font-family: "Tapestry", system-ui, Avenir, Helvetica, Arial, sans-serif;
        }
    }
    @keyframes move {
        0% {
            right: -70%;
        }
        100% {
            right: 5%;
        }
    }
</style>
