<script setup lang="ts">
// import Input from "./../components/Input.vue"

const mainInfo = {
    "Email": "swethanarayan25@gmail.com",
    "Location": "Ottawa, Ontario, Canada",
    "Languages": ["English", "Hindi", "Tamil"]
}

const socialLinks = {
    "LinkedIn": "https://www.linkedin.com/in/swetha-narayan-engineer/",
    "Github": "https://github.com/Swetha53"
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
                <ul v-if="typeof mainInfo[key] == 'object'">
                    <li v-for="item in mainInfo[key]">
                        {{ item }}
                    </li>
                </ul>
                <div v-else>
                    {{ mainInfo[key] }}
                </div>
            </template>
        </div>
        <div class="grid__cell">
            <!-- <Input/> -->
        </div>
        <div class="grid__cell grid">
            <template v-for="key in Object.keys(socialLinks)">
                <div>
                    {{ key }}:
                </div>
                <a :href="socialLinks[key]" target="_blank">
                    {{ socialLinks[key] }}
                </a>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    $height: 100px;
    .grid {
        display: grid;
        row-gap: calc($height/4);
        column-gap: calc($height/4);
        &__parent {
            grid-template-areas: "mainInfo contact"
                        "social contact";
            justify-content: space-around;
        }
        &__cell {
            min-height: $height;
            min-width: calc(2*$height);
            border: 1px solid $secondary;
            padding: 32px;
            &:nth-of-type(1) {
                grid-area: mainInfo;
                grid: auto auto auto/auto auto;
            }
            &:nth-of-type(2) {
                grid-area: contact;
            }
            &:nth-of-type(3) {
                grid-area: social;
                grid: auto auto/auto auto;
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
    }
</style>