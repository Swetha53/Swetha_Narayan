// TODO optimise css
<script setup lang="ts">
import {reactive} from 'vue'
import keyboard from './../assets/keyboard.jpeg'
import store from "./../store"

const emit = defineEmits(['sendToggleData'])
const state = reactive({
    deviceState: 'none'
})

function toggleDevice() {
    if (['none', 'close'].includes(state.deviceState)) {
        state.deviceState = 'open'
    } else {
        state.deviceState = 'close'
    }
    setTimeout(() => {
        emit('sendToggleData', state.deviceState)
    }, 4000)
}
</script>

<template>
    <div class="device" :class="{'open' : state.deviceState == 'open', 'close': state.deviceState == 'close'}">
        <div class="device__back" @click="toggleDevice">
            <div class="device__front">
                <div class="device__display"></div>
            </div>
        </div>
        <div class="device__bottom">
            <img v-if="!store.getters.getLayoutValue" :src="keyboard" alt="Keyboard">
            <div v-else class="device__display-below"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    $height: 80px;
    .device {
        width: calc(2*$height);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &__back {
            background: $secondary;
            height: $height;
            aspect-ratio: 2 / 1;
            position: relative;
            background-image: url('./../assets/laptop_logo.svg');
            background-repeat: no-repeat;
            background-position: center;
            box-shadow: inset 5px 5px 5px $tertiary, inset -5px -5px 5px $tertiary;
            z-index: 1;
        }
        &__front {
            height: $height;
            aspect-ratio: 2 / 1;
            backface-visibility: visible;
        }
        &__display {
            visibility: hidden;
            background: $primary;
            height: calc($height - 10px);
            aspect-ratio: 2 / 1;
            position: absolute;
            top: 6%;
            left: 6.5%;
            box-shadow: inset -5px -5px 8px $tertiary, inset 5px 5px 8px $tertiary;
        }
        &__bottom {
            visibility: hidden;
            height: calc($height / 2);
            width: calc(2*$height + 40px);
            background: $secondary;
            position: absolute;
            top: 85%;
            border-bottom: 1px solid $tertiary;
            transform-origin: bottom;
            transform-style: preserve-3d;
            transform: perspective(80px) rotateX(30deg);
            &::before {
                content: '';
                position: absolute;
            }
            &::after {
                content: '';
                position: absolute;
                transform-origin: top;
                width: 100%;
                height: 5px;
                bottom: -5px;
                transform: perspective(2000px) rotateX(-30deg);
                background: $secondary;
            }
            img {
                position: absolute;
                top: 5px;
                left: 5px;
                bottom: 5px;
                width: calc(2*$height + 30px);
                height: calc($height / 2 - 10px);
                aspect-ratio: auto;
            }
        }
    }
    .open {
        .device {
            &__back {
                animation: 6s 1 normal deviceTop;
                animation-fill-mode: forwards;
            }
            &__bottom {
                animation: 2s 1 normal deviceVisible;
                animation-fill-mode: forwards;
                animation-delay: 3s;
            }
            &__front {
                animation: 2s 1 normal deviceBackHidden;
                animation-fill-mode: forwards;
                animation-delay: 2.25s;
            }
            &__display {
                animation: 2s 1 normal deviceVisible;
                animation-fill-mode: forwards;
                animation-delay: 3s;
            }
        }
    }
    .close {
        .device {
            &__back {
                animation: 6s 1 normal deviceTopClose;
                animation-fill-mode: forwards;
            }
            &__bottom {
                visibility: visible;
                animation: 2s 1 normal deviceInvisible;
                animation-fill-mode: forwards;
                animation-delay: 2.5s;
            }
            &__front {
                backface-visibility: hidden;
                background: $secondary;
                animation: 0s 1 normal deviceBackVisible;
                animation-fill-mode: forwards;
                animation-delay: 2.5s;
            }
            &__display {
                visibility: visible;
                animation: 0s 1 normal deviceInvisible;
                animation-fill-mode: forwards;
                animation-delay: 2.5s;
            }
        }
    }
    @media (max-width: 900px) {
        .device {
            width: calc($height/2);
            &__back {
                height: calc($height/2);
                aspect-ratio: 1 / 1;
                background-size: contain;
                box-shadow: inset 2px 2px 2px $tertiary, inset -2px -2px 2px $tertiary;
            }
            &__front {
                height: calc($height/2);
                aspect-ratio: 1 / 1;
            }
            &__display {
                height: calc($height/2 - 5px);
                aspect-ratio: 1 / 1;
                box-shadow: inset -2px -2px 5px $tertiary, inset 2px 2px 5px $tertiary;
                &-below {
                    background: $primary;
                    height: calc($height/3 - 5px);
                    width: calc($height/3 + 15px);
                    position: absolute;
                    top: 8.5%;
                    left: 5%;
                    box-shadow: inset -2px -2px 5px $tertiary, inset 2px 2px 5px $tertiary;
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
                    animation: 6s 1 normal deviceTopCloseMobile;
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
        }
        100% {
            transform-origin: bottom;
            transform: rotateX(0deg);
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
            background: $secondary;
        }
    }
    @keyframes deviceTopClose {
        0% {
            transform-origin: bottom;
            transform: rotateX(0deg);
        }
        75% {
            transform-origin: bottom;
            transform-style: preserve-3d;
            transform: perspective(390px) rotateX(-107deg);
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
        }
        75% {
            transform-origin: bottom;
            transform-style: preserve-3d;
            transform: perspective(390px) rotateX(-116deg);
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
