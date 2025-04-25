<script setup lang="ts">
import Header from "./components/Header.vue";
import { onMounted, onUnmounted } from "vue";
import store from "./store/index";

onMounted(() => {
  window.addEventListener("resize", resizeEventHandler);
  resizeEventHandler();
});
onUnmounted(() => {
  window.removeEventListener("resize", resizeEventHandler);
});

function resizeEventHandler() {
  store.commit("setLayoutValue");
}
</script>

<template>
  <Header class="header" />
  <router-view></router-view>
</template>

<style lang="scss" scoped>
// .logo {
//   height: 6em;
//   padding: 1.5em;
//   will-change: filter;
//   transition: filter 300ms;
// }
// .logo:hover {
//   filter: drop-shadow(0 0 2em #646cffaa);
// }
// .logo.vue:hover {
//   filter: drop-shadow(0 0 2em #42b883aa);
// }
</style>
