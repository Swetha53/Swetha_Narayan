<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  inputType: string;
  placeholder: string;
  name: string;
  hasError: boolean;
}>();
const emit = defineEmits(["storeInputData"]);

const inputData = ref<string>("");

function focusEventHandler(): void {
  emit("storeInputData", props.name, inputData.value);
}
</script>

<template>
  <div class="input">
    <textarea
      v-if="inputType === 'textarea'"
      v-model="inputData"
      :placeholder
      rows="10"
      :name
      :class="{ input__error: hasError }"
      @focusout="focusEventHandler"
    >
    </textarea>
    <input
      v-else
      v-model="inputData"
      :type="inputType"
      :placeholder
      :name
      :class="{ input__error: hasError }"
      :aria-invalid="hasError"
      @focusout="focusEventHandler"
    />
    <span v-if="hasError" class="input__error-message">
      This field has some issues please re-check the value before trying again.
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "./../style.scss";

.input {
  input,
  textarea {
    border: 1px solid var(--secondary);
    border-radius: 8px;
    background-color: var(--primary);
    color: var(--secondary);
    font-family: "Tapestry", system-ui, Avenir, Helvetica, Arial, sans-serif;
    padding: 0.25rem;
    width: calc(100% - 0.5rem - 2px);

    &:focus-visible {
      border: 1px solid var(--secondary);
    }

    &::placeholder {
      color: var(--secondary);
      opacity: 50%;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:hover {
      -webkit-text-fill-color: var(--secondary);
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  &__error {
    border: 2px solid var(--tertiary) !important;

    &-message {
      background-color: var(--tertiary-50);
      color: var(--secondary);
      font-size: 16px;
      border-radius: 8px;
      padding: 5px;
    }
  }
}

@media (max-width: 900px) {
  .input {
    &__error {
      &-message {
        font-size: inherit;
        line-height: 2;
      }
    }
  }
}
</style>
