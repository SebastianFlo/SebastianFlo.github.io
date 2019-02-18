import Vue from 'vue'
import Router from 'vue-router'

import Home from './modules/home/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './modules/about/About.vue')
        },
        {
            path: '/project/:id',
            props: true,
            name: 'project',
            component: () => import(/* webpackChunkName: "project" */ './modules/project/Project.vue')
        }
    ],
    scrollBehavior () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ x: 0, y: 0 })
            }, 1000)
        });
        // return { x: 0, y: 0 };
    }
})
