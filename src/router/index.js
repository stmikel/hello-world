import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'
import GridListPage from '@/views/GridListPage'
import Breakpoints from '@/views/Breakpoints'
import Typography from '@/views/Typography'
import Tables from '@/views/Tables'
import Form from '@/views/Form'
import Buttons from '@/views/Buttons'


import SUP from '@/views/SignUp'


import ProductList from '@/views/Page/ProductList'
import SignIn from '@/views/authentication/SignIn'
import SignUp from '@/views/authentication/SignUp'
import SignUp1 from '@/views/authentication/SignUp1'


import DefaultLayout from '@/layouts/Default/index'
import PageLayout from '@/layouts/Page/index'
import AuthenticationLayout from '@/layouts/Authentication/index'
import reservation from '@/views/reservation'
import Test from '@/views/Test'

// const Test = function (resolve) {
// resolve({
//     'template': '<div>HelloTest!~</div>'
//     })
// }



Vue.use(VueRouter)

const routes = [
        {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/test',
                name: 'Test',
                component: Test
                
            },
            {
                path: '/reservation',
                name: 'reservation',
                component: reservation
                
            },
            {
                path: '/s-u-p',
                name: 'sup',
                component: SUP
                
            },
            {
                path: '/',
                name: 'Dashboard',
                component: Dashboard
                
            },
            
            {
                path: '/grid-system',
                name: 'GridSystem',
                component: GridSystem
                
            },
            {
                path: '/grid-list-page',
                name: 'GridListPage',
                component: GridListPage
                
            },
            {
                path: '/breakpoints',
                name: 'Breakpoints',
                component: Breakpoints
                
            },
            {
                path: '/typography',
                name: 'Typography',
                component: Typography
                
            },
            {
                path: '/tables',
                name: 'Tables',
                component: Tables
                
            },
            {
                path: '/forms',
                name: 'Form',
                component: Form
                
            },
            {
                path: '/buttons',
                name: 'Buttons',
                component: Buttons
                
            },
         

        ]
        
    },
        {
        path:'/authentication',
        component: AuthenticationLayout,
        children: [
            {
                path:'sign-in',
                name:'SignIn',
                component: SignIn
                
            },
            {
                path:'sign-up',
                name:'SignUp',
                component: SignUp
                
            },
            {
                path:'sign-up1',
                name:'SignUp1',
                component: SignUp1
                
            },
            
        ]
    },
    {
    path: '/Page',
    component: PageLayout,
    children: [
        {
            path: 'product-list',
            name: 'ProductList',
            component: ProductList
            
        },
        
    ]
},
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router