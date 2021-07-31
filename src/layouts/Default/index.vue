<template>
  <v-app>
    <default-bar @drawer="drawer = !drawer" />
     <default-drawer v-model="drawer" />
          <default-view />
      


  </v-app>
</template>

<script>
import DefaultBar from './AppBar'
import DefaultDrawer from './Drawer'
import DefaultView from './View'
export default {
 name: 'DefaultLayout',
    components: {
        DefaultBar,
        DefaultDrawer,
        DefaultView,
    },
 data: () => ({
        drawer: false,
        // gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
       


        
        right: null,  }),
}
</script>

<style>

</style>