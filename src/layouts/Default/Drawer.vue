<template>
  <v-navigation-drawer
      v-bind="$attrs"
      dark
      app
  >
    <!-- :src="require('@/assets/sidebars.gif')" -->
    <default-drawer-header/>
    <!-- list는 List.vue의 props에서 정의된 list -->
    <!-- lists는 Drawer.vue상의 date 함수에서 정의된 lists  -->
    <default-list :itemsList="itemsOri"/>
    <!-- itemsOri 를 자식 List에게 props로 내려줌 -->
    <v-divider/>
  </v-navigation-drawer>
</template>
<script>
// import DefaultList from './List'
// import DefaultDrawerHeader from './DrawerHeader'

export default {
  name: 'DefaultDrawer',
  components: {
    // DefaultList,
    // DefaultDrawerHeader,
     DefaultDrawerHeader: () => import(
      /* webpackChunkName: "default-drawer-header" */
      './DrawerHeader'
    ),
    DefaultList: () => import(
      /* webpackChunkName: "default-list" */
      './List'
    ),
  },
  data: () => ({
    itemsOri: [
      {title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/'},
        {title: 'Pages', icon: 'mdi-menu', items: [
          // to 경로 대신 하위에 item 경로들을 배열로 선언
          {title: 'Authentication', icon: 'mdi-login', items: [
            {title: 'SignIn', icon: 'mdi-login', to: '/authentication/sign-in'},
            {title: 'SignUp', icon: 'mdi-account', to: '/authentication/sign-up'},
            {title: 'SignUp1', icon: 'mdi-account', to: '/authentication/sign-up1'},
          ]},
          {title: 'ProductList', icon: 'mdi-reproduction', to: '/Page/product-list'}
          ]},
          
        
      {title: 'GridSystem', icon: 'mdi-view-dashboard', to: '/grid-system'},
      {title: 'GridListPage', icon: 'mdi-view-dashboard', to: '/grid-list-page'},
      {title: 'Breakpoints', icon: 'mdi-view-dashboard', to: '/breakpoints'},
      {title: 'Typography', icon: 'mdi-view-dashboard', to: '/typography'},
      {title: 'Sup', icon: 'mdi-view-dashboard', to: '/s-u-p'},
      {title: 'About', icon: 'mdi-help-box'},
      {title: 'Table', icon: 'mdi-view-dashboard', to: '/tables'},
      {title: 'Form', icon: 'mdi-view-dashboard', to: '/forms'},
      {title: 'Buttons', icon: 'mdi-view-dashboard', to: '/buttons'},
       {title: 'reservation', icon: 'mdi-view-dashboard', to: '/reservation'},
    ]
  })
}
</script>

<style>

</style>