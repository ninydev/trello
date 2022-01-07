import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    { path: '/', component: () => import("./components/Pages/Home")},
    { path: '/about', component: () => import("./components/Pages/About")},
    { path: '/contact', component: () => import("./components/Pages/Contact")},
    { path: '/:pathMatch(.*)*', component: () => import("./components/Pages/Error")},

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
