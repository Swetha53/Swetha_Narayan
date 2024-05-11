<script setup lang="ts">
import Skills from "./../components/Skills.vue"
import SlideShow from "./../components/SlideShow.vue"
import TimelineItem from "./../components/TimelineItem.vue"

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

const events = [
    {
        type: "EDU",
        title: "Master of Computer Science",
        organization: "University of Ottawa",
        startDate: 1693526400000,
        endDate: 1756684800000,
        slides: [
            {
                type: 'text'
            }
        ]
    },
    {
        type: "JOB",
        title: "Software Engineer",
        organization: "Quinbay Pvt. Ltd.",
        startDate: 1619827200000,
        endDate: 1682899200000,
        slides: [
            {
                type: 'image'
            }
        ]
    },
    {
        type: "JOB",
        title: "Software Engineer Intern",
        organization: "Quinbay Pvt. Ltd.",
        startDate: 1609459200000,
        endDate: 1617235200000,
        slides: [
            {
                type: 'text'
            }
        ]
    },
    {
        type: "EDU",
        title: "B.Tech. Computer Science",
        organization: "SRM - IST",
        startDate: 1504224000000,
        endDate: 1617235200000,
        slides: [
            {
                type: 'text'
            }
        ]
    },
    {
        type: "JOB",
        title: "Intern",
        organization: "Verzeo",
        startDate: 1593561600000,
        endDate: 1596240000000,
        slides: [
            {
                type: 'text'
            }
        ]
    },
    {
        type: "JOB",
        title: "Intern",
        organization: "JK Tech. Pvt. Ltd.",
        startDate: 1559347200000,
        endDate: 1561852800000,
        slides: [
            {
                type: 'text'
            }
        ]
    }
]

function getEventDate(eventDate: number) {
    let date = new Date(eventDate)
    return date.toLocaleString('default', { month: 'short' }) + ' ' + String(date.getFullYear())
}

function showSlideshow(slides: Array<Object>) {
    // TODO complete the function
}
</script>

<template>
    <h1>About Me</h1>
    <div class="about">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur. Tristique risus nec feugiat in fermentum posuere urna nec. Gravida dictum fusce ut placerat orci nulla. Mattis ullamcorper velit sed ullamcorper morbi. Quis enim lobortis scelerisque fermentum. Ipsum dolor sit amet consectetur adipiscing. Tristique sollicitudin nibh sit amet. Purus in massa tempor nec feugiat nisl pretium fusce id. Tincidunt id aliquet risus feugiat in ante metus dictum. Nunc eget lorem dolor sed viverra ipsum nunc. Turpis egestas sed tempus urna et pharetra. Nam at lectus urna duis convallis. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. In egestas erat imperdiet sed. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Et leo duis ut diam. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Pellentesque nec nam aliquam sem et tortor consequat id.
        </p>
        <p>
            Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Phasellus faucibus scelerisque eleifend donec. Et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam. Ut consequat semper viverra nam. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Convallis aenean et tortor at risus viverra adipiscing. Nibh sit amet commodo nulla facilisi. Massa massa ultricies mi quis. Mi in nulla posuere sollicitudin aliquam ultrices. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Tincidunt eget nullam non nisi est sit. Diam sollicitudin tempor id eu nisl nunc. Diam vulputate ut pharetra sit amet aliquam id diam. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Neque sodales ut etiam sit amet nisl purus in.
        </p>
        <p>
            Sem fringilla ut morbi tincidunt augue interdum. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Nunc lobortis mattis aliquam faucibus purus in. Ut consequat semper viverra nam. Etiam non quam lacus suspendisse. Enim nec dui nunc mattis enim ut tellus. Nunc aliquet bibendum enim facilisis gravida neque. Ultrices tincidunt arcu non sodales. Facilisis sed odio morbi quis. Sed libero enim sed faucibus turpis in eu. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Posuere ac ut consequat semper viverra nam. Magna fermentum iaculis eu non diam phasellus vestibulum. Tellus rutrum tellus pellentesque eu tincidunt. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Ut morbi tincidunt augue interdum velit euismod. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur.
        </p>
    </div>
    <h1>Skills</h1>
    <Skills v-for="skill in skills"
        :amount="skill.amount"
        :title="skill.title"
        :project="skill.project"
        :exp="skill.exp"
    >
    </Skills>
    <h1>Timeline</h1>
    <div class="timeline">
        <!-- TODO fix it so it moves down when timeline moved but not up when going above timeline -->
        <!-- TODO slideshow on hover or click -->
        <SlideShow></SlideShow>
        <div class="timeline__structure">
            <template v-for="event in events">
                <TimelineItem v-if="event.type == 'EDU'"
                    :organization="event.organization"
                    :title="event.title"
                    @showSlideshow="showSlideshow(event.slides)"></TimelineItem>
                <div class="timeline__structure-text" v-else>
                    {{ getEventDate(event.startDate) }} - {{ getEventDate(event.endDate) }}
                </div>
                <div class="timeline__structure-circle" :class="event.type == 'EDU' ? 'timeline__structure-circle-left' : 'timeline__structure-circle-right'"></div>
                <div class="timeline__structure-text" v-if="event.type == 'EDU'">
                    {{ getEventDate(event.startDate) }} - {{ getEventDate(event.endDate) }}
                </div>
                <TimelineItem v-else
                    :organization="event.organization"
                    :title="event.title"
                    @showSlideshow="showSlideshow(event.slides)"></TimelineItem>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    .about {
        padding: 0px 24px;
        border: 1px solid $secondary;
        border-radius: 8px;
        width: 80%;
        margin: 0 auto;
        box-shadow: 5px 5px 10px $tertiary;
    }
    .timeline {
        display: flex;
        justify-content: space-around;
        &__structure {
            width: 45%;
            display: grid;
            grid: repeat(6, auto) / 40% 20% 40%;
            row-gap: 10px;
            place-items: center;
            margin-top: 76px;
            &-circle {
                $horizontalLine: 70px;
                $verticalLine: 142px;
                width: 20px;
                aspect-ratio: 1;
                border-radius: 50%;
                border: 1px solid $secondary;
                position: relative;
                background-color: $primary;
                &::before {
                    content: "";
                    position: absolute;
                    height: 1px;
                    width: $horizontalLine;
                    top: 10px;
                    background-color: $secondary;
                }
                &::after {
                    content: "";
                    position: absolute;
                    width: 1px;
                    height: $verticalLine;
                    background-color: $secondary;
                    top: - $verticalLine;
                    left: 10px;
                }
                &-left::before {
                    left: - $horizontalLine;
                }
                &-right::before {
                    left: 21px;
                }
            }
        }
    }
</style>
