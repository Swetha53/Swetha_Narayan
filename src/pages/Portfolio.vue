<script setup lang="ts">
import SlideShow from "./../components/SlideShow.vue"
import {reactive} from 'vue'

const projects = [
    {
        title: "Text Based Adventure",
        link: "https://github.com/Swetha53/TextBasedAdventure"
    },
    {
        title: "Digital Delivery Authentication",
        link: "https://github.com/Swetha53/TextBasedAdventure"
    },
    {
        title: "Blibli",
        link: "https://github.com/Swetha53/TextBasedAdventure"
    },
    {
        title: "Resume",
        link: "https://github.com/Swetha53/Swetha_Narayan"
    }
]

const state = reactive({
    activeProjectIndex: -1
})

function showProjectFooter(index: number) {
    state.activeProjectIndex = index
}

function closeProjectFooter() {
    state.activeProjectIndex = -1
}
</script>

<template>
    <h1>Portfolio</h1>
    <div class="portfolio">
        <div class="portfolio__slides">
            <!-- <div :class="{'fixed-div': state.timelineShowing}"> -->
            <SlideShow :slides="[]"></SlideShow>
            <!-- </div> -->
        </div>
        <div class="portfolio__grid">
            <div class="portfolio__grid-cell monofett" :class="{'disabled-cell': !projects[i-1] || !projects[i-1].title}" v-for="i in 15" :key="i"
                @mouseover="showProjectFooter(i-1)"
                @mouseleave="closeProjectFooter">
                <span v-if="projects[i-1] && projects[i-1].title">{{projects[i - 1].title}}</span>
                <span v-else>Coming soon!!</span>
                <div class="portfolio__grid-cell__footer" v-if="state.activeProjectIndex == (i-1) && projects[i-1] && projects[i-1].link">
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
        &__grid {
            display: grid;
            row-gap: 15px;
            column-gap: 15px;
            grid-template-areas: ". cell4 . cell9 . cell13"
                "cell1 cell4 cell6 cell9 cell11 cell13"
                "cell1 cell4 cell6 cell10 cell11 cell14"
                "cell2 cell4 cell7 cell10 cell11 cell14"
                "cell2 cell5 cell7 cell10 cell11 cell15"
                "cell3 cell5 cell8 cell10 cell12 cell15"
                "cell3 . cell8 . cell12 .";
            &-cell {
                box-shadow: 2px 2px 5px $tertiary;
                border: 1px solid $secondary;
                height: auto;
                width: 150px;
                display: flex;
                justify-content: center;
                text-align: center;
                position: relative;
                &:nth-of-type(1) {
                    grid-area: cell1;
                }
                &:nth-of-type(2) {
                    grid-area: cell2;
                }
                &:nth-of-type(3) {
                    grid-area: cell3;
                }
                &:nth-of-type(4) {
                    grid-area: cell4;
                }
                &:nth-of-type(5) {
                    grid-area: cell5;
                }
                &:nth-of-type(6) {
                    grid-area: cell6;
                }
                &:nth-of-type(7) {
                    grid-area: cell7;
                }
                &:nth-of-type(8) {
                    grid-area: cell8;
                }
                &:nth-of-type(9) {
                    grid-area: cell9;
                }
                &:nth-of-type(10) {
                    grid-area: cell10;
                }
                &:nth-of-type(11) {
                    grid-area: cell11;
                }
                &:nth-of-type(12) {
                    grid-area: cell12;
                }
                &:nth-of-type(13) {
                    grid-area: cell13;
                }
                &:nth-of-type(14) {
                    grid-area: cell14;
                }
                &:nth-of-type(15) {
                    grid-area: cell15;
                }
                &:hover {
                    background: $secondary;
                    color: $primary;
                }
                &__footer {
                    position: absolute;
                    bottom: 0;
                    width: calc(100% - 10px);
                    padding: 5px;
                    border-top: 1px solid $primary;
                    img {
                        height: 24px;
                    }
                }
            }
            .disabled-cell {
                pointer-events: none;
                opacity: .4;
                align-items: center;
            }
        }
    }
</style>