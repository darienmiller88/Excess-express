import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home/Home.vue'
import AboutUs from '../pages/AboutUs/AboutUs.vue'
import Business from '../pages/Business/Business.vue'
import Dashboard from '../pages/Dashboard/Dashboard.vue'

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
        },
        {
            path: "/business",
            component: Business
        },
        {
            path: "/dashboard",
            component: Dashboard
        }
    ]
})
  

export default router