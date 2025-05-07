<script setup lang="ts">
import { reactive } from "vue";
import Input from "./../components/Input.vue";

const mainInfo = {
  Email: "swethanarayan25@gmail.com",
  Location: "Ottawa, Ontario, Canada",
  Languages: ["English", "Hindi", "Tamil"],
};
const socialLinks = {
  LinkedIn: "https://www.linkedin.com/in/swetha-narayan-engineer/",
  Github: "https://github.com/Swetha53",
};
const state = reactive({
  infoVariables: {
    name: "",
    subject: "",
    message: "",
  },
  hasError: false,
  finalValidation: true,
  validations: [
    {
      key: "name",
      validationFunc: isTooLittleValidation,
      evaluator: 1,
      validationStatus: false,
    },
    {
      key: "name",
      validationFunc: isInvalidPatternValidation,
      evaluator: new RegExp(/^[A-Za-z][A-Za-z0-9\s]+$/),
      validationStatus: false,
    },
    {
      key: "subject",
      validationFunc: isTooLittleValidation,
      evaluator: 3,
      validationStatus: false,
    },
    {
      key: "message",
      validationFunc: isTooLittleValidation,
      evaluator: 3,
      validationStatus: false,
    },
  ],
});

function storeInputData(variableName: string, inputValue: string) {
  state.infoVariables[variableName as keyof typeof state.infoVariables] =
    inputValue.replace(/\s+/g, " ").trim();
}

function isInvalidPatternValidation(stringToEvaluate: string, pattern: RegExp) {
  return !pattern.test(stringToEvaluate);
}

function isTooLittleValidation(stringToEvaluate: string, minLength: number) {
  return stringToEvaluate.length < minLength;
}

function startFormEvaluations() {
  state.finalValidation = true;
  state.validations.forEach((validation) => {
    type InfoKey = keyof typeof state.infoVariables;
    const result = (validation.validationFunc as any)(
      state.infoVariables[validation.key as InfoKey],
      validation.evaluator
    );
    validation.validationStatus = !result;
    if (!validation.validationStatus) {
      state.finalValidation = false;
    }
  });
  state.hasError = !state.finalValidation;
  if (state.finalValidation) {
    window.open(
      `mailto:swethanarayan25@gmail.com?subject=${state.infoVariables.subject}&body=${state.infoVariables.message}%0D%0A${state.infoVariables.name}`
    );
  }
}
</script>

<template>
  <h1>Contact</h1>
  <div class="contact">
    <div class="contact__block contact__mainInfo">
      <template v-for="key in Object.keys(mainInfo)">
        <div>{{ key }}:</div>
        <ul v-if="typeof mainInfo[key as keyof typeof mainInfo] == 'object'">
          <li v-for="item in mainInfo[key as keyof typeof mainInfo]">
            {{ item }}
          </li>
        </ul>
        <div v-else>
          {{ mainInfo[key as keyof typeof mainInfo] }}
        </div>
      </template>
      <div class="contact__block-ribbon contact__block-ribbon__right">
        Information
      </div>
    </div>
    <div class="contact__block contact__form">
      <Input
        inputType="text"
        placeholder="Name"
        name="name"
        :hasError="
          state.hasError &&
          (!state.validations[0].validationStatus ||
            !state.validations[1].validationStatus)
        "
        @storeInputData="storeInputData"
      />
      <Input
        inputType="text"
        placeholder="Subject"
        name="subject"
        :hasError="state.hasError && !state.validations[2].validationStatus"
        @storeInputData="storeInputData"
      />
      <Input
        inputType="textarea"
        placeholder="Your Message"
        name="message"
        :hasError="state.hasError && !state.validations[3].validationStatus"
        @storeInputData="storeInputData"
      />
      <button @click="startFormEvaluations">Submit</button>
      <div class="contact__block-ribbon contact__block-ribbon__left">
        Contact Form
      </div>
    </div>
    <div class="contact__block contact__social">
      <template v-for="key in Object.keys(socialLinks)">
        <div>{{ key }}:</div>
        <a :href="socialLinks[key as keyof typeof socialLinks]" target="_blank">
          {{ socialLinks[key as keyof typeof socialLinks] }}
        </a>
      </template>
      <div class="contact__block-ribbon contact__block-ribbon__right">
        Social Media
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../style.scss";
$height: 5rem;
$fold: 0.75rem;
$ribbon: 1rem;
h1 {
  margin-top: unset;
}
.contact {
  margin-bottom: calc($height/4);
  display: grid;
  row-gap: calc($height/4);
  column-gap: calc($height/2);
  justify-content: space-around;
  grid-template-columns: 45% 45%;
  grid-template-areas:
    "mainInfo form"
    "social form";
  &__block {
    min-height: $height;
    min-width: calc(4 * $height - 3rem);
    position: relative;
    display: grid;
    border-radius: 8px;
    border: 1px solid var(--secondary);
    padding: 1.5rem;
    padding-top: 3.5rem;
    &-ribbon {
      height: 2.5rem;
      aspect-ratio: 6 / 1;
      position: absolute;
      top: 0.5rem;
      background-color: var(--secondary);
      color: var(--primary);
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: $fold solid $black-33;
      &__right {
        border-right: $ribbon solid $black;
        clip-path: polygon(
          0 0,
          100% 0,
          100% calc(100% - $fold),
          calc(100% - $fold) 100%,
          calc(100% - $fold) calc(100% - $fold),
          0 calc(100% - $fold),
          $ribbon calc(50% - $fold/2)
        );
        right: calc(-1 * $fold);
      }
      &__left {
        border-left: $ribbon solid $black;
        clip-path: polygon(
          0 0,
          0 calc(100% - $fold),
          $fold 100%,
          $fold calc(100% - $fold),
          100% calc(100% - $fold),
          calc(100% - $ribbon) calc(50% - $fold/2),
          100% 0
        );
        left: calc(-1 * $fold);
      }
    }
    ul {
      margin: unset;
      padding-left: 1rem;
      list-style-type: "✰";
      li {
        padding-left: 0.5rem;
      }
    }
    button {
      background-color: var(--secondary);
      color: var(--primary);
      border-radius: 8px;
      font-family: "Tapestry", system-ui, Avenir, Helvetica, Arial, sans-serif;
      box-shadow: 2px 2px 5px var(--tertiary);
      border: none;
      padding: 0.5rem;
      &:hover {
        background-color: var(--tertiary);
        color: var(--secondary);
        box-shadow: none;
        cursor: pointer;
      }
    }
  }
  &__mainInfo {
    grid-area: mainInfo;
    grid: auto auto auto / auto auto;
  }
  &__form {
    grid-area: form;
    row-gap: calc($height/4);
  }
  &__social {
    grid-area: social;
    grid: auto auto / auto auto;
    column-gap: calc($height/2);
    word-break: break-all;
  }
}

@media (max-width: 900px) {
  .contact {
    grid-template-columns: 90%;
    grid-template-areas:
      "form"
      "form"
      "mainInfo"
      "social";
  }
}
</style>
