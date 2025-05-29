<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  amount: number;
  title: string;
  project: number;
  exp: number;
}>();

const cssProps = computed(() => {
  return {
    "--amount": props.amount,
  };
});
</script>

<template>
  <div class="skills">
    <div class="skills__title">
      {{ title }}
    </div>
    <div class="skills__chart">
      <div class="skills__chart-pie" :style="cssProps">
        <p>{{ amount }}%</p>
      </div>
    </div>
    <div class="skills__summary">
      <p v-if="project > 0">{{ project }} project(s)</p>
      <p v-if="exp > 0">{{ exp }} years</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../style.scss";
$breadth: 10px;
$width: 100px;

.skills {
  width: 20%;
  display: inline-grid;
  grid: auto auto / calc($width / 2) calc(100% - $width / 2);
  grid-template-areas:
    "title title"
    "chart summary";
  margin: 10px 2.5%;
  &__title {
    grid-area: title;
    text-align: center;
  }
  &__chart {
    grid-area: chart;
    position: relative;
    &-pie {
      width: $width;
      aspect-ratio: 1;
      position: relative;
      display: -ms-inline-grid;
      place-content: center;
      margin: 5px;
      background-color: var(--primary);
      p {
        text-align: center;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        border: 1px solid var(--secondary);
      }
      &::before {
        inset: 0;
        background: radial-gradient(farthest-side, var(--secondary) 98%, $black)
            top/$breadth $breadth no-repeat,
          conic-gradient(var(--secondary) calc(var(--amount) * 1%), $black 0);
        -webkit-mask: radial-gradient(
          farthest-side,
          $black calc(99% - $breadth),
          $black-100 calc(100% - $breadth)
        );
        mask: radial-gradient(
          farthest-side,
          $black calc(99% - $breadth),
          $black-100 calc(100% - $breadth)
        );
      }
      &::after {
        inset: calc(50% - $breadth/2);
        background: var(--secondary);
        transform: rotate(calc(var(--amount) * 3.6deg))
          translateY(calc(50% - $width/2));
      }
    }
  }
  &__summary {
    grid-area: summary;
    border: 1px solid var(--secondary);
    border-radius: 8px;
    padding: 10px;
    padding-left: calc($width / 2 + 10px);
    display: -ms-inline-grid;
    place-content: center;
    text-align: center;
    p {
      margin: unset;
    }
  }
}

@media (max-width: 900px) {
  .skills {
    width: 25%;
    grid: auto calc($width / 2) auto / auto;
    grid-template-areas:
      "title"
      "chart"
      "summary";
    font-size: 20px;
    &__summary {
      padding: 10px;
      padding-top: calc($width / 2 + 10px);
    }
  }
}
</style>
