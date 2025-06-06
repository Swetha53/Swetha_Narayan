<script setup lang="ts">
const props = defineProps<{
  organization: string;
  title: string;
  active: boolean;
}>();

const emit = defineEmits(["showSlideshow", "closeSlideshow"]);

function emitClick(): void {
  if (props.active) {
    emit("closeSlideshow");
  } else {
    emit("showSlideshow");
  }
}
</script>

<template>
  <div class="event" :class="{ 'event-active': active }" @click="emitClick()">
    <div class="event__ribbon">
      <p>{{ organization }}</p>
    </div>
    <p class="event__title">{{ title }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "./../style.scss";

$ribbon-fold: 0.75rem;
$ribbon-cut: 1rem;
$ribbon-fold-mobile: 0.5rem;
$ribbon-cut-mobile: 0.75rem;

.event {
  height: 7rem;
  aspect-ratio: 5 / 3;
  border: 1px solid var(--secondary);
  border-radius: 8px;
  cursor: pointer;
  background-color: var(--primary);
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &__ribbon {
    color: var(--primary);
    background-color: var(--secondary);
    font-size: 0.75rem;
    height: 1.75rem;
    aspect-ratio: 5 / 1;
    border-bottom: $ribbon-fold solid $black-33;
    border-left: $ribbon-cut solid $black;
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - $ribbon-fold),
      calc(100% - $ribbon-fold) 100%,
      calc(100% - $ribbon-fold) calc(100% - $ribbon-fold),
      0 calc(100% - $ribbon-fold),
      $ribbon-cut calc(50% - $ribbon-fold/2)
    );
    position: absolute;
    right: calc(-1 * $ribbon-fold);
    top: -1px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: unset;
    }
  }

  &__title {
    margin: unset;
    margin-top: 0.5rem;
    width: 90%;
    text-align: center;
  }
}

.event-active,
.event:hover {
  background-color: var(--secondary);
  color: var(--primary);

  .event__ribbon {
    background-color: var(--tertiary);
    color: var(--secondary);
  }
}

@media (max-width: 900px) {
  .event {
    height: 5.5rem;

    &__ribbon {
      height: 1.5rem;
      border-bottom: $ribbon-fold-mobile solid $black-33;
      border-left: $ribbon-cut-mobile solid $black;
      clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - $ribbon-fold-mobile),
        calc(100% - $ribbon-fold-mobile) 100%,
        calc(100% - $ribbon-fold-mobile) calc(100% - $ribbon-fold-mobile),
        0 calc(100% - $ribbon-fold-mobile),
        $ribbon-cut-mobile calc(50% - $ribbon-fold-mobile/2)
      );
      right: calc(-1 * $ribbon-fold-mobile);
    }
  }
}
</style>
