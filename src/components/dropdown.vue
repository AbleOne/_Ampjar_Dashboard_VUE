<template>
    <div class="dropdown" :class="dropdown_additional_classes">
        <button class="flex w-full items-center" @click="isOpened = !isOpened"><img class="user-avatar" :src="imgSrc" v-bind:alt="imgAlt" /></button>
        <button v-if="isOpened" @click="isOpened = false" tabindex="-1" class="fixed inset-0 w-full h-full cursor-default"></button>
        <div v-if="isOpened" class="dropdown-menu dropdown-menu-right-top">
            <a class="dropdown-menu-item" href="#">My profile</a>
            <a class="dropdown-menu-item" href="#">Notifications</a>
            <a class="dropdown-menu-item" href="#">Subscription</a>
            <a class="dropdown-menu-item" href="#">Affilate</a>
            <a class="dropdown-menu-item" href="#">Logout</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            dropdown_additional_classes: {
                type: String
            },
            imgSrc: {
                type: String
            },
            imgAlt: {
                type: String
            }
        },
        data() {
            return {
                isOpened: false
            }
        },
        created() {
            const handleEscape = (e) => {
                if (e.key === 'Esc' || e.key === 'Escape') {
                    this.isOpened = false
                }
            }

            document.addEventListener('keydown', handleEscape)

            this.$once('hook:beforeDestroy', () => {
                document.removeEventListener('keydown', handleEscape)
            })
        }
    }
</script>

<style scoped>
    @import "../assets/styles/components/_dropdown.css";
</style>