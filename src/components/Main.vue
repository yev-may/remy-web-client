<script>
import Welcome from './../pages/Welcome.vue'
import About from './../pages/About.vue'
import Auth from './../pages/Auth.vue'
import Registration from './../pages/Registration.vue'

const routes = {
    '/'             : Welcome,
    '/about'        : About,
    '/auth'         : Auth,
    '/registration' : Registration
}

export default {
    data() {
        return {
            currentPath: window.location.pathname
        }
    },
    computed: {
        header() {
            return Header
        },
        currentPage() {
            return routes[this.currentPath]
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.pathname
        })
    }
}
</script>

<template>
    <main class="theme">
        <component :is="currentPage" />
    </main>
</template>

<style>
main {
    height: 92.5vh;
}
</style>