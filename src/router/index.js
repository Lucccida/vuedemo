import Vue from "vue"
import VueRouter from "vue-router"
import Home from '../views/Home.vue'
import About from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
        },

        {
            path:'/about',
            component:About

        }
    ]
    
})

