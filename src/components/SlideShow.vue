<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from "vue";
import { slideType } from "./../common/dataType.ts";
import store from "./../store";
const props = defineProps<{ slides: Array<slideType> }>();
const state = reactive({
  slideNumber: 0,
});

let timeout = 0;

function showSlides() {
  if (props.slides.length - 1 <= state.slideNumber) {
    state.slideNumber = 0;
  } else {
    state.slideNumber += 1;
  }
}

onMounted(() => {
  if (props.slides.length) {
    timeout = setInterval(showSlides, 2000);
  }
});

onUnmounted(() => {
  clearInterval(timeout);
});
</script>

<template>
  <div class="slideshow">
    <div class="slideshow__inner">
      <p v-if="!slides.length" class="slideshow__placeholder monofett">
        <span v-if="!store.getters.getLayoutValue"
          >Hover over an event to see more info here.</span
        >
        <span v-else>Click over an event to see more info here.</span>
      </p>
      <div
        v-if="slides.length"
        v-for="(slide, index) in slides"
        v-show="state.slideNumber == index"
        class="slideshow__slide"
      >
        <p v-if="slide.type == 'text'">
          {{ slide.text }}
        </p>
        <h1 v-else-if="slide.type == 'header'">{{ slide.text }}</h1>
        <div v-else-if="slide.type == 'list'">
          <h3>{{ slide.title }}</h3>
          <ul>
            <li v-for="item in slide.listItems">{{ item }}</li>
          </ul>
        </div>
        <img
          v-else-if="slide.type == 'image'"
          :src="`src/assets/${slide.image}`"
        />
      </div>
    </div>
    <div class="slideshow__footer" v-if="slides.length">
      {{ state.slideNumber + 1 }} / {{ slides.length }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../style.scss";
.slideshow {
  width: 18rem;
  aspect-ratio: 5 / 6;
  background-color: var(--secondary);
  border-radius: 8px;
  position: relative;
  &__inner {
    width: 16rem;
    aspect-ratio: 1;
    background-color: var(--primary);
    position: absolute;
    left: 1rem;
    top: 1rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__placeholder {
    width: 80%;
    text-align: center;
  }
  &__slide {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      width: 80%;
      text-align: center;
    }
    img {
      height: 100%;
      width: 100%;
      border-radius: 8px;
    }
  }
  &__footer {
    position: absolute;
    bottom: 3rem;
    left: 1rem;
    width: 16rem;
    color: var(--primary);
    text-align: right;
  }
}
@media (max-width: 900px) {
  .slideshow {
    aspect-ratio: 3 / 2.25;
    width: 100%;
    &__inner {
      width: 90%;
      aspect-ratio: 3 / 2;
      left: 5%;
      top: 5%;
    }
  }
}
</style>
