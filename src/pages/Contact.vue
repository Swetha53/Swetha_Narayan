<script setup lang="ts">
import {reactive} from 'vue'
import Input from "./../components/Input.vue"

const mainInfo = {
    "Email": "swethanarayan25@gmail.com",
    "Location": "Ottawa, Ontario, Canada",
    "Languages": ["English", "Hindi", "Tamil"]
}
const socialLinks = {
    "LinkedIn": "https://www.linkedin.com/in/swetha-narayan-engineer/",
    "Github": "https://github.com/Swetha53"
}
const state = reactive({
    infoVariables: {
        'name': "",
        'subject': "",
        'message': ""
    },
    hasError: false,
    finalValidation: true,
    validations: [
        {
            key: "name",
            validationFunc: isTooLittleValidation,
            evaluator: 1,
            validationStatus: false
        },
        {
            key: "name",
            validationFunc: isInvalidPatternValidation,
            evaluator: new RegExp(/^[A-Za-z][A-Za-z0-9\s]+$/),
            validationStatus: false
        },
        {
            key: "subject",
            validationFunc: isTooLittleValidation,
            evaluator: 3,
            validationStatus: false
        },
        {
            key: "message",
            validationFunc: isTooLittleValidation,
            evaluator: 3,
            validationStatus: false
        }
    ]
})

function storeInputData(variableName: string, inputValue: string) {
    state.infoVariables[variableName as keyof typeof state.infoVariables] = inputValue.replace(/\s+/g, ' ').trim()
}

function isInvalidPatternValidation (stringToEvaluate: string, pattern: RegExp) {
    return !pattern.test(stringToEvaluate)
}

function isTooLittleValidation (stringToEvaluate: string, minLength: number) {
    return stringToEvaluate.length < minLength
}

function startFormEvaluations() {
    state.finalValidation = true
    state.validations.forEach(validation => {
        const result = validation.validationFunc(state.infoVariables[validation.key], validation.evaluator)
        validation.validationStatus = !result
        if (!validation.validationStatus) {
            state.finalValidation = false
        }
    })
    state.hasError = !state.finalValidation
    if (state.finalValidation) {
        window.open(`mailto:swethanarayan25@gmail.com?subject=${state.infoVariables.subject}&body=${state.infoVariables.message}`);
    }
}
</script>

<template>
    <h1>Contact</h1>
    <div class="grid grid__parent">
        <div class="grid__cell grid">
            <template v-for="key in Object.keys(mainInfo)">
                <div>
                    {{ key }}:
                </div>
                <ul v-if="typeof mainInfo[key as keyof typeof mainInfo] == 'object'">
                    <li v-for="item in mainInfo[key as keyof typeof mainInfo]">
                        {{ item }}
                    </li>
                </ul>
                <div v-else>
                    {{ mainInfo[key as keyof typeof mainInfo] }}
                </div>
            </template>
            <div class="grid__cell-ribbon__right">
                Information
            </div>
        </div>
        <div class="grid__cell grid">
            <Input inputType="text" placeholder="Name" name="name"
                :hasError="state.hasError && (!state.validations[0].validationStatus || !state.validations[1].validationStatus)"
                @storeInputData="storeInputData"/>
            <Input inputType="text" placeholder="Subject" name="subject"
                :hasError="state.hasError && !state.validations[2].validationStatus"
                @storeInputData="storeInputData"/>
            <Input inputType="textarea" placeholder="Your Message" name="message"
                :hasError="state.hasError && !state.validations[3].validationStatus"
                @storeInputData="storeInputData"/>
            <button @click="startFormEvaluations">
                Submit
            </button>
            <div class="grid__cell-ribbon__left">
                Contact Form
            </div>
        </div>
        <div class="grid__cell grid">
            <template v-for="key in Object.keys(socialLinks)">
                <div>
                    {{ key }}:
                </div>
                <a :href="socialLinks[key as keyof typeof socialLinks]" target="_blank">
                    {{ socialLinks[key as keyof typeof socialLinks] }}
                </a>
            </template>
            <div class="grid__cell-ribbon__right">
                Social Media
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    $height: 100px;
    $fold: 15px;
    $ribbon: 30px;
    .grid {
        display: grid;
        row-gap: calc($height/4);
        column-gap: calc($height/2);
        &__parent {
            grid-template-areas: "mainInfo contact"
                        "social contact";
            justify-content: space-around;
        }
        &__cell {
            row-gap: 0;
            position: relative;
            min-height: $height;
            min-width: calc(2*$height);
            border: 1px solid $secondary;
            padding: 32px;
            padding-top: 70px;
            border-radius: 8px;
            &:nth-of-type(1) {
                grid-area: mainInfo;
                grid: auto auto auto/auto auto;
            }
            &:nth-of-type(2) {
                grid-area: contact;
                row-gap: calc($height/4);
            }
            &:nth-of-type(3) {
                grid-area: social;
                grid: auto auto/auto auto;
            }
            &-ribbon__right {
                color: $primary;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                height: 50px;
                width: 300px;
                background: $secondary;
                border-bottom: $fold solid $black-33;
                border-left: $ribbon solid $black;
                clip-path: 
                    polygon(0 0, 100% 0, 100% calc(100% - $fold), calc(100% - $fold) 100%,
                    calc(100% - $fold) calc(100% - $fold), 0 calc(100% - $fold),
                    $ribbon calc(50% - $fold/2));
                right: calc(-1*$fold);
                top: 10px;
            }
            &-ribbon__left {
                color: $primary;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                height: 50px;
                width: 300px;
                background: $secondary;
                border-bottom: $fold solid $black-33;
                border-right: $ribbon solid $black;
                clip-path:
                    polygon(0 0, 0 calc(100% - $fold), $fold 100%,
                    $fold calc(100% - $fold), 100% calc(100% - $fold),
                    calc(100% - $ribbon) calc(50% - $fold/2), 100% 0);
                top: 10px;
                left: calc(-1*$fold);
            }
        }
        ul {
            margin: unset;
            padding-left: 20px;
            list-style-type: "✰";
            li {
                padding-left: 10px;
            }
        }
        button {
            background-color: $secondary;
            color: $primary;
            border-radius: 8px;
            font-family: "Tapestry", system-ui, Avenir, Helvetica, Arial, sans-serif;
            box-shadow: 2px 2px 5px $tertiary;
            border: none;
            min-height: 32px;
            padding: 10px;
            &:hover {
                background-color: $tertiary;
                color: $secondary;
                box-shadow: none;
                cursor: pointer;
            }
        }
    }
</style>