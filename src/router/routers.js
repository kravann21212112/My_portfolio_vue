import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Views/HomePage.vue'
import About from '@/Views/AboutPage.vue'
import Project from '@/Views/ProjectPage.vue'
import NotFound from '@/Views/NotFound.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/project', name: 'Project', component: Project },
    // Catch-all route mapping for 404 page execution
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
