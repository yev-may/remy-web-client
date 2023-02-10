import { createApp } from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

import './lib/bootstrap.css'
import './asset/style.css'
import './asset/theme.css'

Vue.use(BootstrapVue)
createApp(App).mount('#app')