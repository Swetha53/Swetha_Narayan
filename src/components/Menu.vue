<script setup lang="ts">
import { ref } from "vue";
import store from "./../store";
import keyboard from "./../assets/keyboard.jpeg";

enum DeviceState {
  None = "none",
  Open = "open",
  Close = "close",
}

const emit = defineEmits(["sendToggleData", "menuClicked"]);

const deviceState = ref<DeviceState>(DeviceState.None);

function toggleDevice(): void {
  if ([DeviceState.None, DeviceState.Close].includes(deviceState.value)) {
    deviceState.value = DeviceState.Open;
  } else {
    deviceState.value = DeviceState.Close;
  }
  emit("menuClicked");
  setTimeout(() => {
    emit("sendToggleData", deviceState.value);
  }, 2000);
}
</script>

<template>
  <div
    class="device"
    :class="{
      open: deviceState == DeviceState.Open,
      close: deviceState == DeviceState.Close,
    }"
  >
    <div class="device__back" @click="toggleDevice">
      <div class="device__front">
        <div class="device__display"></div>
      </div>
    </div>
    <div class="device__bottom">
      <img
        v-if="!store.getters.getLayoutValue"
        :src="keyboard"
        alt="Keyboard"
      />
      <div v-else class="device__display-below"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../style.scss";

$height: 80px;

.device {
  width: calc(2 * $height);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &__back {
    background: var(--secondary);
    height: $height;
    aspect-ratio: 2 / 1;
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40%;
    box-shadow: 2px 4px 2px var(--secondary);
    background-image: url("./../assets/logo.svg");
    z-index: 1;
  }

  &__front {
    height: $height;
    aspect-ratio: 2 / 1;
    backface-visibility: visible;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__display {
    visibility: hidden;
    background: #0d0000;
    background: linear-gradient(
      45deg,
      rgba(13, 0, 0, 1) 0%,
      rgba(0, 28, 77, 1) 50%,
      rgba(0, 49, 133, 1) 100%
    );
    height: calc($height - 4px);
    aspect-ratio: 2 / 1;
  }

  &__bottom {
    visibility: hidden;
    height: calc($height / 2);
    width: calc(2 * $height + 40px);
    background: var(--secondary);
    position: absolute;
    top: 85%;
    border-bottom: 1px solid var(--tertiary);
    transform-origin: bottom;
    transform-style: preserve-3d;
    transform: perspective(80px) rotateX(30deg);

    &::before {
      content: "";
      position: absolute;
    }

    &::after {
      content: "";
      position: absolute;
      transform-origin: top;
      width: 100%;
      height: 5px;
      bottom: -5px;
      transform: perspective(2000px) rotateX(-30deg);
      background: var(--secondary);
    }

    img {
      position: absolute;
      top: 5px;
      left: 5px;
      bottom: 5px;
      width: calc(2 * $height + 30px);
      height: calc($height / 2 - 10px);
      aspect-ratio: auto;
    }
  }
}

.open {
  .device {
    &__back {
      animation: 3s 1 normal deviceTop;
      animation-fill-mode: forwards;
      box-shadow: unset;
    }

    &__bottom {
      animation: 1s 1 normal deviceVisible;
      animation-fill-mode: forwards;
      animation-delay: 1.5s;
    }

    &__front {
      animation: 1s 1 normal deviceBackHidden;
      animation-fill-mode: forwards;
      animation-delay: 1.125s;
    }

    &__display {
      animation: 1s 1 normal deviceVisible;
      animation-fill-mode: forwards;
      animation-delay: 1.5s;
    }
  }
}

.close {
  .device {
    &__back {
      animation: 3s 1 normal deviceTopClose;
      animation-fill-mode: forwards;
    }

    &__bottom {
      visibility: visible;
      animation: 1s 1 normal deviceInvisible;
      animation-fill-mode: forwards;
      animation-delay: 1.25s;
    }

    &__front {
      backface-visibility: hidden;
      background: var(--secondary);
      animation: 0s 1 normal deviceBackVisible;
      animation-fill-mode: forwards;
      animation-delay: 1.25s;
    }

    &__display {
      visibility: visible;
      animation: 0s 1 normal deviceInvisible;
      animation-fill-mode: forwards;
      animation-delay: 1.25s;
    }
  }
}

@media (max-width: 900px) {
  .device {
    width: calc($height/2);

    &__back {
      height: calc($height/2);
      aspect-ratio: 1 / 1;
      background-size: 80%;
      box-shadow: 2px 2px 2px var(--secondary);
    }

    &__front {
      height: calc($height/2);
      aspect-ratio: 1 / 1;
    }

    &__display {
      height: calc($height/2 - 4px);
      aspect-ratio: 1 / 1;

      &-below {
        background: #0d0000;
        background: linear-gradient(
          45deg,
          rgba(13, 0, 0, 1) 0%,
          rgba(0, 28, 77, 1) 50%,
          rgba(0, 49, 133, 1) 100%
        );
        height: calc($height/3 - 5px);
        width: calc($height/3 + 15px);
        position: absolute;
        top: 8.5%;
        left: 5%;
      }
    }

    &__bottom {
      height: calc($height/3);
      width: calc($height/3 + 20px);
      top: 82%;
    }
  }

  .close {
    .device {
      &__back {
        animation: 3s 1 normal deviceTopCloseMobile;
        animation-fill-mode: forwards;
      }
    }
  }
}

@keyframes deviceTop {
  25% {
    transform-style: preserve-3d;
    transform: rotateX(180deg);
  }

  50% {
    transform-origin: bottom;
    transform-style: preserve-3d;
    transform: perspective(390px) rotateX(-107deg);
    box-shadow: unset;
  }

  100% {
    transform-origin: bottom;
    transform: rotateX(0deg);
    box-shadow: unset;
  }
}

@keyframes deviceVisible {
  100% {
    visibility: visible;
  }
}

@keyframes deviceBackHidden {
  100% {
    backface-visibility: hidden;
    background: var(--secondary);
  }
}

@keyframes deviceTopClose {
  0% {
    transform-origin: bottom;
    transform: rotateX(0deg);
    box-shadow: unset;
  }

  75% {
    transform-origin: bottom;
    transform-style: preserve-3d;
    transform: perspective(390px) rotateX(-107deg);
    box-shadow: unset;
  }

  100% {
    transform-origin: bottom;
    transform: rotateX(0deg);
  }
}

@keyframes deviceTopCloseMobile {
  0% {
    transform-origin: bottom;
    transform: rotateX(0deg);
    box-shadow: unset;
  }

  75% {
    transform-origin: bottom;
    transform-style: preserve-3d;
    transform: perspective(390px) rotateX(-116deg);
    box-shadow: unset;
  }

  100% {
    transform-origin: bottom;
    transform: rotateX(0deg);
  }
}

@keyframes deviceInvisible {
  100% {
    visibility: hidden;
  }
}

@keyframes deviceBackVisible {
  100% {
    backface-visibility: visible;
    background: unset;
  }
}
</style>
