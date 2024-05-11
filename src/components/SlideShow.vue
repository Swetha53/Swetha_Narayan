<script setup lang="ts">
// TODO defineProps<{ slides: Array<Object> }>()
</script>

<template>
    <div class="slideshow">
        <div class="slideshow__inner"></div>
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
        }
    }
</style>
