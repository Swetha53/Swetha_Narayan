<script setup lang="ts">
defineProps<{ inputType: string, placeholder: string}>()
</script>

<template>
    <textarea v-if="inputType === 'textarea'" :placeholder="placeholder" rows="10"></textarea>
    <input v-else :type="inputType" :placeholder="placeholder"/>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    input, textarea {
        border: 1px solid $secondary;
        border-radius: 8px;
        background-color: $primary;
        font-family: "Tapestry", system-ui, Avenir, Helvetica, Arial, sans-serif;
        color: $secondary;
        padding: 7px;
        min-width: 650px;
        &:focus-visible {
            border: 1px solid $secondary;
        }
        &::placeholder {
            color: $secondary-50;
        }
    }
</style>
