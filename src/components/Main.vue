<script>
import Welcome from './pages/Welcome.vue'
import About from './pages/About.vue'
import Auth from './pages/Auth.vue'
import Logout from './pages/Logout.vue'
import Registration from './pages/Registration.vue'

import CardBoxList from './pages/card-box/CardBoxList.vue'

const routes = {
    '/'             : Welcome,
    '/about'        : About,
    '/auth'         : Auth,
    '/logout'       : Logout,
    '/registration' : Registration,
    '/card-boxes'   : CardBoxList
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
        <div class="container h-100">
            <div class="row h-100">
                <div class="col align-self-center">
                    <component :is="currentPage" />
                </div>
            </div>
        </div>
    </main>
</template>