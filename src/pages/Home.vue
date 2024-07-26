<script setup lang="ts">
import DownloadButton from "./../components/DownloadButton.vue"
</script>

<template>
    <div class="home">
        <div class="home__frame">
            <div class="home__frame-outer">
                <div class="home__frame-inner"></div>
            </div>
        </div>
        <!-- TODO think what to write -->
        <div class="home__summary">
            <h2>Hello! I am Swetha Narayan, a web developer based in Canada.</h2>
            I have 2 years of experience working as a web developer in an e-commerce platform. Currently a master of computer science student in
            University of Ottawa. I started my journey as a software engineer and more specifically as a web developer during my middle school when we started
            learning about HTML in my computer science class. <br>
            I have always had an organisational and a problem solving side which has helped me solve the trickiest of problems and complete my projects
            on time. I love handling difficult problems and finding out-of-the box solutions for them.
        </div>
        <div class="home__button">
            <DownloadButton/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    .home {
        width: 90%;
        margin-left: 50%;
        transform: translateX(-50%);
        display: grid;
        grid: auto auto / 15% 85%;
        grid-template-areas: "frame summary"
                        "frame button";
        &__frame {
            grid-area: frame;
            position: relative;
            &-outer {
                height: 600px;
                aspect-ratio: 2 / 3;
                background: $secondary;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            // TODO change profile picture
            &-inner {
                height: 550px;
                aspect-ratio: 2 / 3;
                border-radius: 50%;
                background-image: url("src/assets/profile_pic.png");
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }
        }
        &__summary {
            grid-area: summary;
            border: 1px solid $secondary;
            border-radius: 8px;
            border-bottom-right-radius: 0px;
            padding: 5px;
            padding-left: 18%;
        }
        &__button {
            grid-area: button;
            margin-left: auto;
            margin-right: 0;
            width: 80%;
        }
    }
    @media (max-width: 900px) {
        .home {
            position: relative;
            width: 100%;
            grid: auto auto auto / auto;
            grid-template-areas: "frame"
                            "summary"
                            "button";
            margin: unset;
            transform: unset;
            &__frame {
                z-index: 2;
                display: flex;
                justify-content: center;
                position: relative;
                top: 2rem;
                &-outer {
                    height: 400px;
                }
                &-inner {
                    height: 350px;
                }
            }
            &__summary {
                width: 90%;
                padding: 5px;
                padding-top: 2rem;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
                border-bottom-right-radius: 8px;
            }
            &__button {
                margin: auto;
            }
        }
    }
</style>