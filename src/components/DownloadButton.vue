<script setup lang="ts">
const resumeUrl = new URL("../assets/Swetha_Narayan.pdf", import.meta.url).href;
</script>

<template>
  <a class="flex-container download-button" :href="resumeUrl" download>
    <div class="monofett download-button__arrow">
      <div class="arrow-base">CV</div>
      <div class="arrow-triangle"></div>
    </div>
    <div class="download-button__heading">Download</div>
  </a>
</template>

<style lang="scss" scoped>
@import "./../style.scss";
$height: 3rem;

.download-button {
  background-color: var(--secondary);
  color: var(--primary);
  width: 100%;
  height: $height;
  border-radius: 8px;
  border-top-right-radius: 0px;
  text-decoration: none;
  &__arrow {
    position: relative;
    height: $height;
    width: $height;
    font-size: 1.75em;
  }
  &__heading {
    width: 100%;
    text-align: center;
  }
}
.arrow {
  &-base {
    background-color: var(--tertiary);
    width: 100%;
    height: 100%;
    text-align: center;
    color: var(--primary);
  }
  &-triangle::after {
    position: absolute;
    top: $height;
    left: calc(0px - $height/2);
    content: "";
    border-top: $height solid var(--tertiary);
    border-bottom: $height solid transparent;
    border-left: $height solid transparent;
    border-right: $height solid transparent;
  }
}

.download-button:hover {
  background-color: var(--tertiary);
  color: var(--primary);
  .arrow {
    &-base {
      background-color: var(--secondary);
      color: var(--primary);
    }
    &-triangle::after {
      border-top: $height solid var(--secondary);
    }
  }
}
</style>
