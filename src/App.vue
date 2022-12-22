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

<style>
:root {
  --color-1: #F2E5E5;
  --color-2: #E8C4C4;
  --color-3: #CE7777;
  --color-c: #2B3A55;
}
</style>