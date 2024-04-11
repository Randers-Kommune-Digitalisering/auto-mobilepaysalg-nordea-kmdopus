import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

// Import af views til routing

import Start from '@/views/Start.vue'
import Konteringsregler from '@/views/Konteringsregler.vue'
import RetKonteringsregel from '@/views/RetKonteringsregel.vue'
import Filer from '@/views/Filer.vue'
import Templates from '@/views/Templates.vue'
import Stamdata from '@/views/Stamdata.vue'
import Inaktive_Konteringsregler from '@/views/Inaktive_Konteringsregler.vue'
import Undtagelser from '@/views/Undtagelser.vue'

// Opsætning af URL routing

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            name: "Start",
            component: Start
        },
        {
            path: '/stamdata', 
            name: "Stamdata",
            component: Stamdata
        },        
        {
            path: '/konteringsregler', 
            name: "Aktive konteringsregler",
            component: Konteringsregler
        },
        {
            path: '/inaktive_konteringsregler', 
            name: "Inaktive_Konteringsregler",
            component: Inaktive_Konteringsregler
        },
        {
            path: '/undtagelser', 
            name: "Undtagelser",
            component: Undtagelser
        },        
        {
            path: '/retkonteringsregel/:id', 
            name: "RetKonteringsregel",
            component: RetKonteringsregel
        },
        {
            path: '/filer', 
            name: "Filer",
            component: Filer
        },
        {
            path: '/templates', 
            name: "Templates",
            component: Templates
        }
    ]
})

createApp(App)
.use(router)
.mount('#app')
