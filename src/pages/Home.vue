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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Congue mauris rhoncus aenean vel. Tellus molestie nunc non blandit massa enim nec dui nunc. In massa tempor nec feugiat. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Egestas integer eget aliquet nibh. Massa placerat duis ultricies lacus. Sit amet porttitor eget dolor morbi non. In hac habitasse platea dictumst quisque sagittis. Quis risus sed vulputate odio ut enim blandit. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Habitant morbi tristique senectus et netus et. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Placerat vestibulum lectus mauris ultrices eros. Et malesuada fames ac turpis egestas. In cursus turpis massa tincidunt dui ut ornare.
        </div>
        <div class="home__button">
            <DownloadButton/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    .home {
        margin: 32px;
        margin-left: calc(50% + 15px);
        transform: translateX(-50%);
        display: grid;
        grid: auto auto / 15% 85%;
        grid-template-areas: "frame summary"
        "frame button";
        width: 80%;
        &__frame {
            grid-area: frame;
            position: relative;
            &-outer {
                height: 600px;
                width: 400px;
                background: $secondary;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                left: -30px;
            }
            // TODO change profile picture
            &-inner {
                height: 540px;
                width: 360px;
                background-image: url("src/assets/profile_pic.png");
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 50%;
            }
        }
        &__summary {
            padding: 5px;
            padding-left: 20%;
            grid-area: summary;
            border: 1px solid $secondary;
            border-radius: 8px;
        }
        &__button {
            grid-area: button;
            margin: 0 auto;
        }
    }
</style>