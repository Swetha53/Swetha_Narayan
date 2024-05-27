<script setup lang="ts">
import {reactive} from 'vue'

const props = defineProps<{ inputType: string, placeholder: string, name: string}>()
const emit = defineEmits(['storeInputData'])
const state = reactive({
    inputData: ""
})

function focusEventHandler() {
    emit('storeInputData', props.name, state.inputData)
}
</script>

<template>
    <textarea v-if="inputType === 'textarea'"
        v-model="state.inputData"
        :placeholder
        rows="10"
        :name
        @focusout="focusEventHandler">
    </textarea>
    <input v-else
        v-model="state.inputData"
        :type="inputType"
        :placeholder
        :name
        @focusout="focusEventHandler"/>
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
    input:-webkit-autofill, input:-webkit-autofill:focus, input:-webkit-autofill:hover {
        color: $secondary !important;
        -webkit-text-fill-color: $secondary;
        -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
        transition: background-color 5000s ease-in-out 0s !important;
    }
</style>
