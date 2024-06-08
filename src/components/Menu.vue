<script setup lang="ts">
import {reactive} from 'vue'
import keyboard from './../assets/keyboard.jpeg'

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
            <img :src="keyboard" alt="">
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
        .device__back {
            animation: 6s 1 normal deviceTop;
            animation-fill-mode: forwards;
        }
        .device__bottom {
            animation: 2s 1 normal deviceVisible;
            animation-fill-mode: forwards;
            animation-delay: 3s;
        }
        .device__front {
            animation: 2s 1 normal deviceBackHidden;
            animation-fill-mode: forwards;
            animation-delay: 2.25s;
        }
        .device__display {
            animation: 2s 1 normal deviceVisible;
            animation-fill-mode: forwards;
            animation-delay: 3s;
        }
    }
    .close {
        .device__back {
            animation: 6s 1 normal deviceTopClose;
            animation-fill-mode: forwards;
        }
        .device__bottom {
            visibility: visible;
            animation: 2s 1 normal deviceInvisible;
            animation-fill-mode: forwards;
            animation-delay: 2.5s;
        }
        .device__front {
            backface-visibility: hidden;
            background: $secondary;
            animation: 0s 1 normal deviceBackVisible;
            animation-fill-mode: forwards;
            animation-delay: 2.5s;
        }
        .device__display {
            visibility: visible;
            animation: 0s 1 normal deviceInvisible;
            animation-fill-mode: forwards;
            animation-delay: 2.5s;
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
