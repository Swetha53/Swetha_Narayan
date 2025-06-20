<script setup lang="ts">
import DownloadButton from "./../components/DownloadButton.vue";
</script>

<template>
  <div class="home">
    <div class="home__frame" />
    <div class="home__summary">
      <h2 class="home__title">
        Hi, I'm Swetha
        <div class="home__title__icon" />
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
  margin-inline: auto;
  display: grid;
  grid-template-areas:
    "frame summary"
    "frame button";
  grid-template-columns: 13vw 73vw;

  &__frame {
    grid-area: frame;
    width: 25vw;
    aspect-ratio: 2/3;
    background: var(--primary);
    background-image: url("./../assets/profile.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 1.3vw solid var(--secondary);
    border-radius: 50%;
    position: relative;
  }

  &__summary {
    grid-area: summary;
    border: 1px solid var(--secondary);
    border-radius: 8px 8px 0 8px;
    padding: 1vw 3vw 1vw 18vw;
  }

  &__title {
    display: flex;
    align-items: center;

    &__icon {
      margin-left: 0.5rem;
      width: 1.5rem;
      height: 1.5rem;
      background-color: var(--secondary);
      mask-image: url("./../assets/hand.svg");
      -webkit-mask-image: url("./../assets/hand.svg");
      mask-size: 100%;
      mask-repeat: no-repeat;
      mask-position: center;
    }
  }

  &__button {
    grid-area: button;
    margin-left: auto;
    width: 55vw;
  }
}

@media (max-width: 900px) {
  .home {
    width: 100%;
    grid-template-areas:
      "frame"
      "summary"
      "button";
    grid-template-columns: 1fr;

    &__frame {
      z-index: 2;
      margin: auto;
      top: 2rem;
      width: 60vw;
      border-width: 15px;
    }

    &__summary {
      width: 90vw;
      margin-inline: auto;
      padding: 3vw 2vw;
      position: relative;
      border-bottom-right-radius: 8px;
      transform: none;
    }

    &__button {
      width: 80vw;
      margin: auto;
    }
  }
}
</style>
