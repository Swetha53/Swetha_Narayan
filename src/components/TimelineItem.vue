<script setup lang="ts">
defineProps<{ organization: string, title: string }>()

const emit = defineEmits(['showSlideshow'])

function emitHover() {
    emit('showSlideshow')
}
</script>

<template>
    <div class="timeline-item" @mouseover="emitHover()">
        <div class="timeline-item__ribbon">
            <p>{{ organization }}</p>
        </div>
        <p class="timeline-item__title">{{ title }}</p>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    $fold: 15px;
    $ribbon: 30px;

    .timeline-item {
        z-index: 100;
        border: 1px solid $secondary;
        border-radius: 8px;
        height: 150px;
        width: 250px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $primary;
        &__ribbon {
            color: $primary;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            height: 40px;
            width: 200px;
            background: $secondary;
            border-bottom: $fold solid $black-33;
            border-left: $ribbon solid $black;
            clip-path: 
                polygon(0 0, 100% 0, 100% calc(100% - $fold), calc(100% - $fold) 100%,
                calc(100% - $fold) calc(100% - $fold), 0 calc(100% - $fold),
                $ribbon calc(50% - $fold/2));
            right: calc(-1*$fold);
            top: -1px;
            p {
                margin: unset;
            }
        }
        &__title {
            margin: unset;
            margin-top: 10px;
            width: 90%;
            text-align: center;
        }
        &:hover {
            background-color: $secondary;
            color: $primary;
            .timeline-item__ribbon {
                background-color: $tertiary;
                color: $secondary;
            }
        }
    }
</style>
