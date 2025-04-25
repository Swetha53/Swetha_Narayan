<script setup lang="ts">
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import Menu from "./Menu.vue";
import store from "./../store";
import Dropdown from "./Dropdown.vue";

const router = useRouter();
const route = useRoute();
const state = reactive({
  toggleMenu: "none",
  activeSection: "Home",
});

function receiveToggleData(toggleState: string) {
  state.toggleMenu = toggleState;
  if (toggleState == "open" && route.name) {
    state.activeSection = <string>route.name;
  }
}
function redirectToPage(section: string) {
  state.activeSection = section;
  router.push({ name: section });
}
</script>

<template>
  <div
    class="header monofett"
    :class="state.toggleMenu == 'open' ? 'header-open' : 'header-close'"
  >
    <div class="header__cell">
      <Menu @sendToggleData="receiveToggleData"></Menu>
    </div>
    <div
      class="header__cell"
      :class="{
        'header__cell-active': state.activeSection == 'Home',
        'header__cell-mobile': store.getters.getLayoutValue,
      }"
      v-if="state.toggleMenu == 'open'"
      @click="redirectToPage('Home')"
    >
      <div class="header__icon" />
      <p v-if="!store.getters.getLayoutValue">Home</p>
    </div>
    <div
      class="header__cell"
      :class="{
        'header__cell-active': state.activeSection == 'About',
        'header__cell-mobile': store.getters.getLayoutValue,
      }"
      v-if="state.toggleMenu == 'open'"
      @click="redirectToPage('About')"
    >
      <div class="header__icon header__icon-profile" />
      <p v-if="!store.getters.getLayoutValue">About Me</p>
    </div>
    <div
      class="header__cell"
      :class="{
        'header__cell-active': state.activeSection == 'Portfolio',
        'header__cell-mobile': store.getters.getLayoutValue,
      }"
      v-if="state.toggleMenu == 'open'"
      @click="redirectToPage('Portfolio')"
    >
      <div class="header__icon header__icon-website" />
      <p v-if="!store.getters.getLayoutValue">Portfolio</p>
    </div>
    <div
      class="header__cell"
      :class="{
        'header__cell-active': state.activeSection == 'Contact',
        'header__cell-mobile': store.getters.getLayoutValue,
      }"
      v-if="state.toggleMenu == 'open'"
      @click="redirectToPage('Contact')"
    >
      <div class="header__icon header__icon-contact" />
      <p v-if="!store.getters.getLayoutValue">Contact</p>
    </div>
    <div v-if="state.toggleMenu == 'none'" class="header__info">
      <i v-for="i in 2" :key="i" class="header__info-arrow"></i>
      <p v-if="!store.getters.getLayoutValue">Click here to open the menu</p>
      <p v-else>Open Menu</p>
    </div>
    <div v-else-if="state.toggleMenu == 'close'" class="header__info"></div>
    <div class="header__dropdown"><Dropdown /></div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../style.scss";
.header {
  display: grid;
  font-size: 1.5rem;
  min-height: 118px;
  position: relative;
  margin-bottom: 2rem;
  &-open {
    grid: auto / repeat(6, minmax(0, 1fr));
  }
  &-close {
    grid: auto / 1fr 4fr 1fr;
  }
  &__cell {
    cursor: pointer;
    place-items: center;
    display: grid;
    grid: auto / 1fr 3fr;
    border-left: 1px solid var(--secondary);
    &:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      border-left: none;
    }
    &-active {
      border: 2px solid var(--tertiary);
      background-image: linear-gradient(
        135deg,
        var(--tertiary) 0%,
        var(--tertiary-50) 50%,
        var(--tertiary-10) 100%
      );
    }
    &-mobile {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &__dropdown {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__icon {
    mask-size: 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    mask-position: center;
    width: 1.5rem;
    height: 1.5rem;
    mask-image: url("./../assets/home.svg");
    -webkit-mask-image: url("./../assets/home.svg");
    background-color: var(--secondary);
    &-profile {
      mask-image: url("./../assets/profile.svg");
      -webkit-mask-image: url("./../assets/profile.svg");
    }
    &-website {
      mask-image: url("./../assets/website.svg");
      -webkit-mask-image: url("./../assets/website.svg");
    }
    &-contact {
      mask-image: url("./../assets/contact.svg");
      -webkit-mask-image: url("./../assets/contact.svg");
    }
  }
  &__info {
    position: relative;
    font-family: "Tapestry", system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.25rem;
    place-self: center;
    animation: 3s infinite normal move;
    animation-fill-mode: forwards;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    &-arrow {
      border: solid var(--secondary);
      border-width: 0 0.5rem 0.5rem 0;
      display: inline-block;
      padding: 0.5rem;
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }
  }
}
@media (max-width: 900px) {
  .header {
    &__info {
      &-arrow {
        border-width: 0 0.25rem 0.25rem 0;
        padding: 0.25rem;
      }
    }
  }
}
@keyframes move {
  0% {
    right: 0%;
  }
  100% {
    right: 30%;
  }
}
</style>
