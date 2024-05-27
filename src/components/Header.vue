<script setup lang="ts">
    import {ref, watchEffect} from 'vue'
    import {useRouter} from 'vue-router'
    const router = useRouter()
    const activeSection = ref<string>('Home')
    watchEffect(() => {
      router.push({ name: activeSection.value })
    })
</script>

<template>
    <div class="grid monofett">
        <div class="grid__cell"></div>
        <div class="grid__cell" :class="{'grid__active': activeSection == 'Home'}" @click="activeSection='Home'">
            <img src="./../assets/home.svg" alt="Home">
            <p>Home</p>
        </div>
        <div class="grid__cell" :class="{'grid__active': activeSection == 'About'}" @click="activeSection='About'">
            <img src="./../assets/profile.svg" alt="About Me">
            <p>About Me</p>
        </div>
        <div class="grid__cell" :class="{'grid__active': activeSection == 'Portfolio'}" @click="activeSection='Portfolio'">
            <img src="./../assets/website.svg" alt="Portfolio">
            <p>Portfolio</p>
        </div>
        <div class="grid__cell" :class="{'grid__active': activeSection == 'Contact'}" @click="activeSection='Contact'">
            <img src="./../assets/contact.svg" alt="Contact">
            <p>Contact</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    .grid {
        display: grid;
        grid: auto / repeat(5, minmax(0, 1fr));
        font-size: 32px;
        &__cell {
            cursor: pointer;
            display: grid;
            grid: auto / 25% 75%;
            place-items: center;
            border-right: 2px solid $secondary;
            img {
                height: 32px;
                width: 32px;
            }
        }
        &__active {
            border: 3px solid $tertiary;
            background-image: radial-gradient(farthest-corner at 0% 0%, $tertiary-10 10%, $tertiary-50 70%, $tertiary 100%);
        }
    }
</style>
