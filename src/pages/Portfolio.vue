<script setup lang="ts">
import { slideType } from "../common/dataType";
import SlideShow from "./../components/SlideShow.vue"
import {reactive, onMounted} from 'vue'

const projects = [
    {
        key: "Py_TBA",
        title: "Text Based Adventure",
        link: "https://github.com/Swetha53/TextBasedAdventure",
        slides: <Array<slideType>>[
            {
                type: "text",
                text: "Lang: Python"
            }
        ]
    },
    {
        key: "DDA",
        title: "Digital Delivery Auth.",
        link: "https://github.com/Swetha53/TextBasedAdventure",
        slides: <Array<slideType>>[
            {
                type: "text",
                text: "Framework: Vue 2.0"
            }
        ]
    },
    {
        key: "Blibli",
        title: "Blibli",
        link: "https://github.com/Swetha53/TextBasedAdventure",
        slides: <Array<slideType>>[
            {
                type: "text",
                text: "Used Vue 2.0, React JS and Angular JS framework for different projects of same website."
            }
        ]
    },
    {
        key: "TS_Resume",
        title: "Resume",
        link: "https://github.com/Swetha53/Swetha_Narayan",
        slides: <Array<slideType>>[
            {
                type: "text",
                text: "Lang: Typescript, Framework: Vue 3.0"
            }
        ]
    }
]

const state = reactive({
    activeProjectIndex: -1,
    currentSlides: <Array<slideType>>[]
})

onMounted(() => {
    projects.forEach(project => {
        const images = import.meta.glob('/src/assets/Py_TBA/*.{png, svg}')
        Object.keys(images).forEach(image => {
            const imageName = image.replace('/src/assets/', '')
            project.slides.push({
                type: "image",
                image: imageName
            })
        })
    })
})

function showProjectFooter(index: number) {
    state.activeProjectIndex = index
    state.currentSlides = projects[index].slides
}

function closeProjectFooter() {
    state.activeProjectIndex = -1
    state.currentSlides = []
}
</script>

<template>
    <h1>Portfolio</h1>
    <div class="portfolio">
        <div class="portfolio__slides">
            <SlideShow :slides="state.currentSlides" :key="state.currentSlides.length"></SlideShow>
        </div>
        <div class="portfolio__projects">
            <div class="portfolio__projects-project monofett" :class="{'portfolio__projects-project__future': !projects[i-1] || !projects[i-1].title}" v-for="i in 15" :key="i"
                @mouseover="showProjectFooter(i-1)"
                @mouseleave="closeProjectFooter">
                <span v-if="projects[i-1] && projects[i-1].title">{{projects[i - 1].title}}</span>
                <span v-else>Coming soon!!</span>
                <div class="portfolio__projects-project__link" v-if="state.activeProjectIndex == (i-1) && projects[i-1] && projects[i-1].link">
                    <a :href="projects[i - 1].link" target="_blank">
                        <img src="./../assets/github_icon.png" alt="" srcset="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    .portfolio {
        display: flex;
        justify-content: space-around;
        &__projects {
            display: grid;
            row-gap: 0.5rem;
            column-gap: 0.5rem;
            grid-template-areas: ". project4 . project9 . project13"
                "project1 project4 project6 project9 project11 project13"
                "project1 project4 project6 project10 project11 project14"
                "project2 project4 project7 project10 project11 project14"
                "project2 project5 project7 project10 project11 project15"
                "project3 project5 project8 project10 project12 project15";
            &-project {
                border: 1px solid $secondary;
                border-radius: 8px;
                width: 7rem;
                box-shadow: 2px 2px 5px $tertiary;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                position: relative;
                &:nth-of-type(1) {
                    grid-area: project1;
                }
                &:nth-of-type(2) {
                    grid-area: project2;
                }
                &:nth-of-type(3) {
                    grid-area: project3;
                }
                &:nth-of-type(4) {
                    grid-area: project4;
                }
                &:nth-of-type(5) {
                    grid-area: project5;
                }
                &:nth-of-type(6) {
                    grid-area: project6;
                }
                &:nth-of-type(7) {
                    grid-area: project7;
                }
                &:nth-of-type(8) {
                    grid-area: project8;
                }
                &:nth-of-type(9) {
                    grid-area: project9;
                }
                &:nth-of-type(10) {
                    grid-area: project10;
                }
                &:nth-of-type(11) {
                    grid-area: project11;
                }
                &:nth-of-type(12) {
                    grid-area: project12;
                }
                &:nth-of-type(13) {
                    grid-area: project13;
                }
                &:nth-of-type(14) {
                    grid-area: project14;
                }
                &:nth-of-type(15) {
                    grid-area: project15;
                }
                &:hover {
                    background: $secondary;
                    color: $primary;
                }
                &__link {
                    width: calc(100% - 10px);
                    padding: 5px;
                    border-top: 1px solid $primary;
                    position: absolute;
                    bottom: 0;
                    img {
                        height: 1rem;
                    }
                }
                &__future {
                    pointer-events: none;
                    opacity: 0.4;
                }
            }
        }
    }

    @media (max-width: 900px) {
        .portfolio {
            display: block;
            &__projects {
                margin-top: 1rem;
                grid-template-areas: "project1 project1 project2 project2 ."
                                    ". project3 project3 project4 project4"
                                    "project5 project5 project6 project6 ."
                                    ". project7 project7 project8 project8"
                                    "project9 project9 project10 project10 ."
                                    ". project11 project11 project12 project12"
                                    "project13 project13 project14 project14 ."
                                    ". project15 project15 project15 project15";
                &-project {
                    width: 100%;
                    height: 3rem;
                    span {
                        width: 80%;
                    }
                    &__link {
                        position: unset;
                        width: calc(20% - 6px);
                        padding: 2.5px;
                        border-top: unset;
                        border-left: 1px solid $primary;
                    }
                }
                                    
            }
        }
    }
</style>