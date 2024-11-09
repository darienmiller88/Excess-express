import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home/Home.vue'
import AboutUs from '../pages/AboutUs/AboutUs.vue'

// Create the router instance
const router = createRouter({
    history: createWebHistory(), // Uses HTML5 history mode
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/about-us",
            component: AboutUs
        }
    ]
})
  

export default router