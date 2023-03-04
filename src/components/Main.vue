<script>
import Welcome from './pages/Welcome.vue'
import Auth from './pages/AuthPage.vue'
import Logout from './pages/Logout.vue'
import Registration from './pages/Registration.vue'

import CardBoxList from './pages/card-box/CardBoxList.vue'

const routes = {
    '/'             : Welcome,
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
    computed: 
    {
        currentPage() {
            return routes[this.currentPath]
        }
    },
    
    mounted() 
    {
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