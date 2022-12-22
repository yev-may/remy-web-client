<script>
import Header from './components/header/Header.vue'
import Welcome from './pages/Welcome.vue'
import About from './pages/About.vue'

const routes = {
  '/': Welcome,
  '/about': About
}

export default {
  components: {
    Header
  },
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
  <Header />
  <component :is="currentPage"/>
</template>
