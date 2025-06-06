<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { slideType } from "./../common/dataType.ts";

const props = defineProps<{ slides: Array<slideType> }>();

const slideNumber = ref(0);
const status = ref("");
let timeout = 0;

onMounted(() => {
  startSlideshow();
});

onUnmounted(() => {
  pauseSlideshow();
});

function showSlides(): void {
  if (props.slides.length - 1 <= slideNumber.value) {
    slideNumber.value = 0;
  } else {
    slideNumber.value += 1;
  }
}

function startSlideshow(): void {
  status.value = "";
  if (props.slides.length) {
    timeout = setInterval(showSlides, 2000);
  }
}

function pauseSlideshow(): void {
  status.value = "Paused";
  clearInterval(timeout);
}

function getImage(image?: string): string {
  if (!image) return "";
  return new URL(`../assets/${image}`, import.meta.url).href;
}
</script>

<template>
  <div class="slideshow">
    <div
      class="slideshow__inner"
      @mouseenter="pauseSlideshow"
      @mouseleave="startSlideshow"
    >
      <p v-if="!slides.length" class="slideshow__placeholder">
        <span>Click over an event to see more info here.</span>
      </p>
      <div
        v-if="slides.length"
        v-for="(slide, index) in slides"
        v-show="slideNumber == index"
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
        <img v-else-if="slide.type == 'image'" :src="getImage(slide.image)" />
      </div>
    </div>
    <div class="slideshow__footer" v-if="slides.length">
      <p>{{ status }}</p>
      <p>{{ slideNumber + 1 }} / {{ slides.length }}</p>
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
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: unset;
    }
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

    &__footer {
      bottom: 1rem;
      left: 5%;
      width: 90%;
    }
  }
}
</style>
