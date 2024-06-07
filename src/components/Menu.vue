<script setup lang="ts">
import keyboard from './../assets/keyboard.jpeg'
</script>

<template>
    <div class="device">
        <div class="device__back">
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
        display: flex;
        justify-content: center;
        align-items: center;
        &__back {
            background: $secondary;
            height: $height;
            aspect-ratio: 2 / 1;
            position: relative;
            background-image: url('./../assets/laptop_logo.svg');
            background-repeat: no-repeat;
            background-position: center;
            box-shadow: inset 5px 5px 5px $tertiary, inset -5px -5px 5px $tertiary;
            // opening animation
            transform-origin: bottom;
            transform: rotateX(0deg);
            transition: 5s;
            // closing animation
            &:hover {
                transform-origin: bottom;
                transform-style: preserve-3d;
                transform: perspective(390px) rotateX(-107deg);
                transition: 5s;
            }
            z-index: 1;
        }
        &__front {
            height: $height;
            aspect-ratio: 2 / 1;
            position: absolute;
            background: $secondary;
            backface-visibility: hidden; // TODO what does it do?
        }
        &__display {
            height: calc($height - 10px);
            aspect-ratio: 2 / 1;
            position: absolute;
            top: 6%;
            left: 6.5%;
            box-shadow: inset -5px -5px 8px $tertiary, inset 5px 5px 8px $tertiary;
        }
        &__bottom {
            height: calc($height / 2);
            width: calc(2*$height + 40px);
            background: $secondary;
            position: absolute;
            top: 18.25%;
            border-bottom: 1px solid $tertiary;

            transform-origin: bottom;
            transform-style: preserve-3d;
            transform: perspective(80px) rotateX(30deg);
            img {
                position: absolute;
                top: 5px;
                left: 5px;
                bottom: 5px;
                width: calc(2*$height + 30px);
                height: calc($height / 2 - 10px);
                aspect-ratio: auto;
            }
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
        }
    }
</style>
