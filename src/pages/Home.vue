<script setup lang="ts">
import DownloadButton from "./../components/DownloadButton.vue";
</script>

<template>
  <div class="home">
    <div class="home__frame" />
    <div class="home__summary">
      <h2>
        Hello! I am Swetha Narayan, a passionate Full Stack Developer based in
        Canada.
      </h2>
      <!-- TODO Change as soon as I get a degree -->
      With 2 years of experience building and maintaining e-commerce platforms,
      I specialize in creating clean, responsive, and user-friendly web
      applications. I’m currently completing my Master’s in Computer Science at
      the University of Ottawa.<br />
      My journey into web development began back in middle school, when I first
      discovered HTML in a computer science class — and I’ve been hooked ever
      since. At the University of Ottawa, I was working on an exciting AR-based
      e-commerce platform as part of my capstone project. <br />
      Over the years, my love for problem-solving and my knack for organization
      have helped me tackle complex challenges and deliver projects efficiently
      and creatively. I thrive on solving tough problems and love thinking
      outside the box to craft innovative, reliable solutions.
    </div>
    <div class="home__button">
      <DownloadButton />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../style.scss";
.home {
  width: 90%;
  margin-left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid: auto auto / 15vw 75vw;
  grid-template-areas:
    "frame summary"
    "frame button";
  &__frame {
    grid-area: frame;
    position: relative;
    width: 28vw;
    aspect-ratio: 2/3;
    background: var(--primary);
    background-image: url("src/assets/profile.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 2vw solid var(--secondary);
    border-radius: 50%;
  }
  &__summary {
    grid-area: summary;
    border: 1px solid var(--secondary);
    border-radius: 8px;
    border-bottom-right-radius: 0px;
    padding: 5px;
    padding-left: 20vw;
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
      padding: 5px;
      padding-top: 2rem;
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
