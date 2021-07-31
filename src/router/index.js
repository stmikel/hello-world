import Vue from "vue";
import VueRouter from "vue-router";
// import Dashboard from '@/views/Dashboard'
// import GridSystem from '@/views/GridSystem'
// import GridListPage from '@/views/GridListPage'
// import Breakpoints from '@/views/Breakpoints'
// import Typography from '@/views/Typography'
// import Tables from '@/views/Tables'
// import Form from '@/views/Form'
// import Buttons from '@/views/Buttons'





// import ProductList from '@/views/Page/ProductList'
// import SignIn from '@/views/authentication/SignIn'
// import SignUp from '@/views/authentication/SignUp'
// import SignUp1 from '@/views/authentication/SignUp1'


// import DefaultLayout from '@/layouts/Default/index'
// import PageLayout from '@/layouts/Page/index'
// import AuthenticationLayout from '@/layouts/Authentication/index'
// import reservation from '@/views/reservation'
// import Test from '@/views/Test'

// const Test = function (resolve) {
// resolve({
//     'template': '<div>HelloTest!~</div>'
//     })
// }



Vue.use(VueRouter)

const routes = [
        {
            path: '/',
            component: () => import(
              /* webpackChunkName: "layouts-default-index" */
              '@/layouts/Default/index'
            ),
        children: [
            {
                path: '/',
                    name: 'Dashboard',
                    component: () => import(/* webpackChunkName: "views-dashboards-index" */ '@/views/Dashboard')
              },
            {
                path: '/test',
                name: 'Test',
                component: () => import(/* webpackChunkName: "views-test-index" */ '@/views/Test')
                
            },
            {
                path: '/reservation',
                name: 'reservation',
                component: () => import(/* webpackChunkName: "views-reservation-index" */ '@/views/reservation')
                
            },
             {
                path: '/grid-system',
                name: 'GridSystem',
                component: () => import(
                  /* webpackChunkName: "views-grid-system" */
                  '@/views/GridSystem'
                )
              },
              {
                path: '/grid-list-page',
                name: 'GridListPage',
                component: () => import(
                  /* webpackChunkName: "views-grid-list-page" */
                  '@/views/GridListPage'
                )
              },
              {
                path: '/breakpoints',
                name: 'Breakpoints',
                component: () => import(
                  /* webpackChunkName: "views-breakpoints" */
                  '@/views/Breakpoints'
                )
              },
              {
                path: '/typography',
                name: 'Typography',
                component: () => import(
                  /* webpackChunkName: "views-typography" */
                  '@/views/Typography'
                )
              },
            {
                path: '/tables',
                name: 'Tables',
                component: () => import(
                  /* webpackChunkName: "views-tables" */
                  '@/views/Tables'
                )
              },
            {
                path: '/forms',
                name: 'Form',
                component: () => import(
                    /* webpackChunkName: "views-forms" */
                    '@/views/Form'
                )
                
            },
            {
                path: '/buttons',
                name: 'Buttons',
                component: () => import(
                  /* webpackChunkName: "views-buttons" */
                  '@/views/Buttons'
                )
              },
         

        ]
        
    },
        {
        path:'/authentication',
        component: () => import(
            /* webpackChunkName: "layouts-authentication-index" */
            '@/layouts/Authentication/index'
            ),
        children: [
            {
                path:'sign-in',
                name:'SignIn',
                // component: SignIn
                component: () => import(/* webpackChunkName: "views-authentication" */
                '@/views/authentication/SignIn')
                //webpackChunkName은 비동기를 그룹화할때 쓰는 특수 주석 : " 그룹명-같이 그룹하고 싶은곳에 같은 이름 적기"
                
            },
            {
                path:'sign-up',
                name:'SignUp',
                component: () => import(/* webpackChunkName: "views-authentication" */
                '@/views/authentication/SignUp')
                
            },
            {
                path:'sign-up1',
                name:'SignUp1',
                component: () => import(/* webpackChunkName: "views-authentication" */
                '@/views/authentication/SignUp1')
                
            },
            
        ]
    },
    {
    path: '/Page',
    component: () => import(
        /* webpackChunkName: "layouts-page-index" */
        '@/layouts/Page/index'),
    children: [
        {
            path: 'product-list',
            name: 'ProductList',
            component: () => import(
                /* webpackChunkName: "views-product-list" */
                '@/views/Page/ProductList'
              )
            }
        
    ]
},
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router