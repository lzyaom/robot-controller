import { createApp } from 'vue'
import './styles/index.css'
import App from './App.vue'
import router from './router'
import pinia from './store'
// import VirtualScroller from 'vue-virtual-scroller'

const app = createApp(App)
// app.use(VirtualScroller)
app.use(router)
app.use(pinia)
app.mount('#app')
