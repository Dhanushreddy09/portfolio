import { createWebHistory, createRouter } from "vue-router";
import Notfound from './components/notfound.vue'
import Navbar from './components/Navbar.vue'
const history = createWebHistory();
const routes=[
    {
        path:'/',
        name:'navbar',
        component:Navbar
    },
    {
        path:'/:catchAll(.*)',
        name:'notfound',
        component:Notfound
    }
];
const router = createRouter({ history, routes });
export default router;