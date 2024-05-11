

<template>
    <a class="flex-container button" href="src/assets/Swetha_Narayan.pdf" download>
        <div class="monofett button__logo">
            <div class="button__logo-circle">
                <p>CV</p>
            </div>
            <div class="button__logo-triangle"></div>
        </div>
        <div class="button__text">
            <p>Download</p>
        </div>
    </a>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    $width: 800px;
    $height: 60px;

    .button {
        background-color: $secondary;
        width: $width;
        height: $height;
        color: $tertiary;
        border-radius: 8px;
        border-top-right-radius: 0px;
        &:link {
            text-decoration: none;
        }
        &__logo {
            position: relative;
            width: $height;
            height: $height;
            font-size: 1.75em;
            &-circle {
                position: absolute;
                background-color: $tertiary;
                width: 100%;
                height: 100%;
                left: - calc($height / 2);
                display: flex;
                align-items: center;
                justify-content: center;
                p {
                    margin: unset;
                    color: $secondary;
                }
            }
            &-triangle {
                position: relative;
                &::after {
                    position: absolute;
                    content: "";
                    border-top: $height solid $tertiary;
                    border-bottom: $height solid transparent;
                    border-left: $height solid transparent;
                    border-right: $height solid transparent;
                    top: $height;
                    left: - $height;
                }
            }
        }
        &__text {
            min-width: 60%;
            p {
                margin: calc($height / 2);
                margin-left: unset;
            }
        }
        &:hover {
            background-color: $tertiary;
            color: $secondary;
            .button__logo-circle {
                background-color: $secondary;
                p {
                    color: $tertiary;
                }
            }
            .button__logo-triangle::after {
                border-top: $height solid $secondary;
            }
        }
    }
</style>
