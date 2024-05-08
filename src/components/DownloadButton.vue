<script setup lang="ts">
    import {ref, watchEffect} from 'vue'
    import {useRouter} from 'vue-router'
    const router = useRouter()
    const activeSection = ref<string>('Home')
    watchEffect(() => {
      router.push({ name: activeSection.value })
    })
</script>

<template>
    <a class="flex-container button" href="src/assets/Swetha_Narayan.pdf" download>
        <div class="monofett button__logo">
            <p>CV</p>
        </div>
        <div class="button__text">
            <p>Download</p>
        </div>
    </a>
</template>

<style lang="scss" scoped>
    @import "./../style.scss";
    .button {
        margin: 32px;
        background-color: $secondary;
        width: 150px;
        height: 40px;
        color: $tertiary;
        border-radius: 8px;
        &:link {
            text-decoration: none;
        }
        &__logo {
            position: relative;
            width: 40px;
            height: 100%;
            p {
                position: absolute;
                background-color: $secondary;
                width: 100%;
                height: 100%;
                text-align: center;
                border-radius: 50%;
                margin: unset;
                left: -10px;
                box-shadow: 4px 0px 6px $tertiary;
            }
        }
        &__text p {
            margin: 10px;
            margin-left: unset;
        }
        &:hover {
            background-color: $tertiary;
            color: $secondary;
            .button__logo p {
                background-color: $tertiary;
                box-shadow: 4px 0px 6px $secondary;
            }
        }
    }
</style>
