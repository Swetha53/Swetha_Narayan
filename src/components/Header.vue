<script setup lang="ts">
    import {ref} from 'vue'
    const activeSection = ref(0)
</script>

<template>
    <div class="grid">
        <div class="grid__cell"></div>
        <div class="grid__cell" :class="{'grid__active': activeSection == 0}" @click="activeSection=0">
            <img src="./../assets/home.svg" alt="Home">
            <p>Home</p>
        </div>
        <div class="grid__cell" :class="{'grid__active': activeSection == 1}" @click="activeSection=1">
            <img src="./../assets/profile.svg" alt="About Me">
            <p>About Me</p>
        </div>
        <div class="grid__cell" :class="{'grid__active': activeSection == 2}" @click="activeSection=2">
            <img src="./../assets/website.svg" alt="Portfolio">
            <p>Portfolio</p>
        </div>
        <div class="grid__cell" :class="{'grid__active': activeSection == 3}" @click="activeSection=3">
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
        font: "Monofett", monospace;
        &__cell {
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
            background-image: radial-gradient(farthest-corner at 0% 0%, rgba(248, 181, 0, 0.1) 10%, rgba(248, 181, 0, 0.5) 70%, rgba(248, 181, 0, 1) 100%);
        }
    }
</style>

<!-- <script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
</style> -->
