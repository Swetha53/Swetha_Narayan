<script setup lang="ts">
import {slideType} from "./../common/dataType.ts"
import Skills from "./../components/Skills.vue"
import SlideShow from "./../components/SlideShow.vue"
import TimelineItem from "./../components/TimelineItem.vue"
import { reactive, onMounted, onUnmounted } from 'vue'
import store from "./../store"

type miniEventType = {
    type: string,
    title: string,
    organization: string,
    startDate: number,
    endDate: number,
    slides: Array<slideType>
}

const skills = [
    {
        title: "JAVA",
        amount: 80,
        project: 5,
        exp: 5
    },
    {
        title: "C++",
        amount: 70,
        project: 2,
        exp: 3
    },
    {
        title: "Python",
        amount: 50,
        project: 3,
        exp: 1
    },
    {
        title: "C",
        amount: 40,
        project: 1,
        exp: 2
    },
    {
        title: "HTML",
        amount: 90,
        project: 10,
        exp: 6
    },
    {
        title: "CSS",
        amount: 85,
        project: 10,
        exp: 6
    },
    {
        title: "JavaScript",
        amount: 80,
        project: 7,
        exp: 6
    },
    {
        title: "SQL",
        amount: 50,
        project: 3,
        exp: 4
    },
    {
        title: "Angular JS",
        amount: 50,
        project: 2,
        exp: 2
    },
    {
        title: "Vue",
        amount: 70,
        project: 5,
        exp: 2
    },
    {
        title: "React",
        amount: 50,
        project: 1,
        exp: 2
    }
]

const state = reactive({
    timelineShowing: false,
    currentSlides: <Array<slideType>>[]
})

const events = [
    {
        type: "EDU",
        title: "Master of Computer Science",
        organization: "University of Ottawa",
        startDate: 1693526400000,
        endDate: 1756684800000,
        slides: <Array<slideType>>[
            {
                type: 'image',
                image: 'uOttawa.png'
            },
            {
                type: 'text',
                text: 'Studied in University of Ottawa in Ottawa in Ontario province in Canada.'
            }
        ]
    },
    {
        type: "JOB",
        title: "Software Engineer",
        organization: "Quinbay Pvt. Ltd.",
        startDate: 1619827200000,
        endDate: 1682899200000,
        slides: <Array<slideType>>[
            {
                type: 'image',
                image: 'quinbay.jpeg'
            },
            {
                type: 'text',
                text: 'Company situated in Bangalore, Karnataka, India'
            },
            {
                type: 'text',
                text: 'Worked in the merchant side of an eCommerce platform.'
            },
            {
                type: 'text',
                text: 'Worked as front-end developer for 2 years.'
            },
            {
                type: 'text',
                text: 'Worked extensively in Vue and React. Have done some work in Angular.'
            }
        ]
    },
    {
        type: "JOB",
        title: "Software Engineer Intern",
        organization: "Quinbay Pvt. Ltd.",
        startDate: 1609459200000,
        endDate: 1617235200000,
        slides: <Array<slideType>>[
            {
                type: 'image',
                image: 'quinbay.jpeg'
            }
        ]
    },
    {
        type: "EDU",
        title: "B.Tech. Computer Science",
        organization: "SRM - IST",
        startDate: 1504224000000,
        endDate: 1617235200000,
        slides: <Array<slideType>>[
            {
                type: 'image',
                image: 'srm.png'
            }
        ]
    },
    {
        type: "JOB",
        title: "Intern",
        organization: "Verzeo",
        startDate: 1593561600000,
        endDate: 1596240000000,
        slides: <Array<slideType>>[
            {
                type: 'image',
                image: 'verzeo.png'
            }
        ]
    },
    {
        type: "JOB",
        title: "Intern",
        organization: "JK Tech. Pvt. Ltd.",
        startDate: 1559347200000,
        endDate: 1561852800000,
        slides: <Array<slideType>>[
            {
                type: 'image',
                image: 'JKT.jpg'
            }
        ]
    }
]

function getEventDate(eventDate: number) {
    let date = new Date(eventDate)
    return date.toLocaleString('default', { month: 'short' }) + ' ' + String(date.getFullYear())
}

function scrollHandler() {
    const element = <HTMLElement>document.getElementsByClassName('about__timeline-slides')[0]
    if (element !== null && !store.getters.getLayoutValue && window.scrollY >= element.offsetTop) {
        state.timelineShowing = true
    } else {
        state.timelineShowing = false
    }
}

function showSlideshow(miniEvent: miniEventType) {
    state.currentSlides = miniEvent.slides
}

function closeSlideshow() {
    state.currentSlides = []
}

onMounted(() => {
    window.addEventListener('scroll', scrollHandler)
})

onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler)
})
</script>

<template>
    <div class="about">
        <h1>About Me</h1>
        <div class="about__summary">
            <p>
                Hey, I'm Swetha Narayan, a software engineer with a 2 year working experience in e-commerce website.
                I have had the opportunity to work in many different areas during both my studies and work.
                I love to learn and thrive in problem-solving and finding out-of-the-box solutions.
            </p>
            <p>
                I have worked in web development in an indonesian e-commerce platform called blibli as a front-end developer.
                I have worked using Vue, Angular JS and React JS framework during my work as front-end developer.
                I have also dabbled in back-end development where I have used both Spring Boot and Advance JAVA.
                Other than web-development I have also done project in Artificial Intelligence and Augmented Reality.
            </p>
        </div>
        <h1>Skills</h1>
        <div class="about__skills">
            <Skills v-for="skill in skills"
            :amount="skill.amount"
            :title="skill.title"
            :project="skill.project"
            :exp="skill.exp"
            >
            </Skills>
        </div>
        <h1>Timeline</h1>
        <div class="about__timeline">
            <div class="about__timeline-slides">
                <div :class="{'about__timeline-slides__fixed': state.timelineShowing}">
                    <SlideShow :key="state.currentSlides.length" :slides="state.currentSlides"></SlideShow>
                </div>
            </div>
            <div class="about__timeline-structure">
                <template v-for="event in events">
                    <TimelineItem v-if="event.type == 'EDU'"
                        :organization="event.organization"
                        :title="event.title"
                        @showSlideshow="showSlideshow(event)"
                        @closeSlideshow="closeSlideshow"></TimelineItem>
                    <div class="about__timeline-structure__dates" v-else>
                        {{ getEventDate(event.startDate) }} - {{ getEventDate(event.endDate) }}
                    </div>
                    <div class="about__timeline-structure__connector" :class="event.type == 'EDU' ? 'about__timeline-structure__connector-left' : 'about__timeline-structure__connector-right'"></div>
                    <div class="about__timeline-structure__dates" v-if="event.type == 'EDU'">
                        {{ getEventDate(event.startDate) }} - {{ getEventDate(event.endDate) }}
                    </div>
                    <TimelineItem v-else
                        :organization="event.organization"
                        :title="event.title"
                        @showSlideshow="showSlideshow(event)"
                        @closeSlideshow="closeSlideshow"></TimelineItem>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    $horizontalLine: 3rem;
    $verticalLine: 6.5rem;
    .about {
        &__summary {
            width: 80%;
            padding: 0 1rem;
            border: 1px solid $secondary;
            border-radius: 8px;
            margin: 0 auto;
            box-shadow: 2px 2px 8px $tertiary;
        }
        &__timeline {
            display: flex;
            justify-content: space-around;
            &-slides {
                position: relative;
                width: 18rem;
                &__fixed {
                    position: fixed;
                    top: 0px;
                }
            }
            &-structure {
                display: grid;
                grid: repeat(6, auto) / 40% 20% 40%;
                row-gap: 0.5rem;
                place-items: center;
                margin-top: 4rem;
                &__connector {
                    position: relative;
                    width: 1rem;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    border: 1px solid $secondary;
                    background-color: $primary;
                    &::before {
                        position: absolute;
                        content: "";
                        height: 1px;
                        width: $horizontalLine;
                        background-color: $secondary;
                        top: .5rem;
                    }
                    &::after {
                        content: "";
                        position: absolute;
                        width: 1px;
                        height: $verticalLine;
                        background-color: $secondary;
                        top: -$verticalLine;
                        left: .5rem;
                    }
                    &-left::before {
                        left: -$horizontalLine;
                    }
                    &-right::before {
                        left: 1rem;
                    }
                }
            }
        }
    }
    @media (max-width: 900px) {
        $verticalLine: 5rem;
        .about {
            &__skills {
                width: 95%;
                display: inline-flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
            }
            &__timeline {
                display: block;
                &-slides {
                    z-index: 3;
                    margin: auto;
                    width: 95%;
                }
                &-structure {
                    margin: 1rem auto;
                    &__connector {
                        &::after {
                            height: $verticalLine;
                            top: -$verticalLine;
                        }
                    }
                }
            }
        }
    }
</style>
