<script setup lang="ts">
import { ref } from "vue";
import themes from "./../common/themes";
import store from "./../store";

type ThemeName = keyof typeof themes;

const currentTheme = ref<ThemeName>(store.getters.getTheme);

function updateTheme(): void {
  store.commit("setTheme", currentTheme.value);
  const colors = themes[currentTheme.value];
  const root = document.querySelector(":root") as HTMLElement;

  for (const [key, value] of Object.entries(colors)) {
    if (key.includes("--")) {
      root.style.setProperty(key, value);
    }
  }
}
</script>

<template>
  <select v-model="currentTheme" @change="updateTheme()" class="dropdown">
    <option v-for="theme in Object.keys(themes)" :key="theme" :value="theme">
      {{ theme }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
@import "./../style.scss";

.dropdown {
  width: 80%;
  background: var(--primary);
  background-image: linear-gradient(
    45deg,
    var(--primary) 33%,
    var(--secondary) 66%,
    var(--tertiary) 100%
  );
  color: var(--tertiary);
  font-weight: 800;
  border: 1px solid var(--secondary);
  border-radius: 8px;
  outline: var(--tertiary) outset 1px;
  padding: 0.25rem;
}
</style>
