<script setup lang="ts">
import DownloadButton from "./../components/DownloadButton.vue";
</script>

<template>
  <div class="home">
    <div class="home__frame" />
    <div class="home__summary">
      <h2 class="home__summary__title">
        Hi, I'm Swetha
        <div class="home__summary__title__icon" />
      </h2>
      I'm a Full Stack Developer based in Canada, passionate about building
      clean, responsive, and user-first web applications.<br />With over 2 years
      of experience working on e-commerce platforms, I enjoy crafting full-stack
      solutions that are both functional and visually engaging. <br />I recently
      completed my Master’s in Computer Science at the University of Ottawa,
      where I worked on an AR-based e-commerce platform as my capstone
      project.<br />
      My journey with code began in middle school with a simple HTML page — and
      I’ve been hooked ever since. I love solving complex problems, thinking
      creatively, and turning ideas into polished, real-world applications.
    </div>
    <div class="home__button">
      <DownloadButton />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../style.scss";
.home {
  width: 86vw;
  margin-left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid: auto auto / 13vw 73vw;
  grid-template-areas:
    "frame summary"
    "frame button";
  &__frame {
    grid-area: frame;
    position: relative;
    width: 25vw;
    aspect-ratio: 2/3;
    background: var(--primary);
    background-image: url("./../assets/profile.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 1.3vw solid var(--secondary);
    border-radius: 50%;
  }
  &__summary {
    grid-area: summary;
    border: 1px solid var(--secondary);
    border-radius: 8px;
    border-bottom-right-radius: 0px;
    padding: 1vw 3vw;
    padding-left: 18vw;
    &__title {
      display: flex;
      align-items: center;
      &__icon {
        margin-left: 0.5rem;
        mask-size: 100%;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        mask-position: center;
        width: 1.5rem;
        height: 1.5rem;
        mask-image: url("./../assets/hand.svg");
        -webkit-mask-image: url("./../assets/hand.svg");
        background-color: var(--secondary);
      }
    }
  }
  &__button {
    grid-area: button;
    margin-left: auto;
    margin-right: 0;
    width: 55vw;
  }
}
@media (max-width: 900px) {
  .home {
    position: relative;
    width: 100%;
    grid: auto auto auto / auto;
    grid-template-areas:
      "frame"
      "summary"
      "button";
    margin: unset;
    transform: unset;
    &__frame {
      z-index: 2;
      position: relative;
      margin: auto;
      top: 2rem;
      width: 60vw;
      border-width: 15px;
    }
    &__summary {
      width: 90vw;
      padding: 3vw 2vw;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      border-bottom-right-radius: 8px;
    }
    &__button {
      margin: auto;
      width: 80vw;
    }
  }
}
</style>
