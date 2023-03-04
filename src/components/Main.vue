<script>
import Welcome from './pages/Welcome.vue'
import Auth from './pages/AuthPage.vue'
import Logout from './pages/Logout.vue'
import Registration from './pages/Registration.vue'

import BoxesPage from './pages/box/BoxesPage.vue'
import BoxPage from './pages/box/BoxPage.vue'

const routes = {
    '/'             : Welcome,
    '/auth'         : Auth,
    '/logout'       : Logout,
    '/registration' : Registration,

    '/boxes'        : BoxesPage,
    '/box'          : BoxPage
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