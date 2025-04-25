<script setup lang="ts">
defineProps<{ organization: string, title: string }>()

const emit = defineEmits(['showSlideshow', 'closeSlideshow'])

function emitHover() {
    emit('showSlideshow')
}

function emitClose() {
    emit('closeSlideshow')
}
</script>

<template>
    <div class="timelineItem" @mouseover="emitHover()" @mouseleave="emitClose()">
        <div class="timelineItem__ribbon">
            <p>{{ organization }}</p>
        </div>
        <p class="timelineItem__title">{{ title }}</p>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    .timelineItem {
        $fold: 0.75rem;
        $ribbon: 1rem;
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
            border-bottom: $fold solid $black-33;
            border-left: $ribbon solid $black;
            clip-path: 
                polygon(0 0, 100% 0, 100% calc(100% - $fold), calc(100% - $fold) 100%,
                calc(100% - $fold) calc(100% - $fold), 0 calc(100% - $fold),
                $ribbon calc(50% - $fold/2));
            position: absolute;
            right: calc(-1*$fold);
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
        &:hover {
            background-color: var(--secondary);
            color: var(--primary);
            .timelineItem__ribbon {
                background-color: var(--tertiary);
                color: var(--secondary);
            }
        }
    }
    @media (max-width: 900px) {
        .timelineItem {
            $fold: 0.5rem;
            $ribbon: 0.75rem;
            height: 5.5rem;
            &__ribbon {
                height: 1.5rem;
                border-bottom: $fold solid $black-33;
                border-left: $ribbon solid $black;
                clip-path: 
                    polygon(0 0, 100% 0, 100% calc(100% - $fold), calc(100% - $fold) 100%,
                    calc(100% - $fold) calc(100% - $fold), 0 calc(100% - $fold),
                    $ribbon calc(50% - $fold/2));
                right: calc(-1*$fold);
            }
        }
    }
</style>
