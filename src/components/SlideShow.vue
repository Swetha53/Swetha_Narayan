<script setup lang="ts">
import {onMounted, onUnmounted, reactive} from 'vue'
import {slideType} from "./../common/dataType.ts"
const props = defineProps<{ slides: Array<slideType> }>()
const state = reactive({
    slideNumber: 0
})

let timeout = 0

function showSlides() {
    if (props.slides.length - 1 <= state.slideNumber) {
        state.slideNumber = 0
    } else {
        state.slideNumber += 1
    }
}

onMounted(() => {
    if (props.slides.length) {
        timeout = setInterval(showSlides, 2000)
    }
})

onUnmounted(() => {
    clearInterval(timeout)
})
</script>

<template>
    <div class="slideshow">
        <div class="slideshow__inner">
            <p v-if="!slides.length" class="slideshow__placeholder monofett">Hover over an event to see more info here.</p>
            <div v-if="slides.length" v-for="(slide, index) in slides" v-show="state.slideNumber == index" class="slideshow__slide">
                <p v-if="slide.type == 'text'">
                    {{ slide.text }}
                </p>
                <img v-else-if="slide.type == 'image'" :src="`src/assets/${slide.image}`">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    .slideshow {
        width: 350px;
        height: 480px;
        background-color: $secondary;
        position: relative;
        border-radius: 8px;
        &__inner {
            width: 310px;
            height: 400px;
            background-color: $primary;
            position: absolute;
            left: 20px;
            top: 20px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__placeholder {
            width: 80%;
            text-align: center;
        }
        &__slide {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            p {
                width: 80%;
                text-align: center;
            }
            img {
                height: 100%;
                width: 100%;
                border-radius: 8px;
            }
        }
    }
</style>
