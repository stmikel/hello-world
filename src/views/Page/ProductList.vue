<template>
    <v-row justify='center' >
      <v-col
      cols=8>
  <v-card>

  <v-container>
    <v-row>
      <v-col
      v-for="i in 20"
      :key="i"
        cols="6"
          sm="6"
          md="6"
          lg="6"
          xl="6">

      
      <product-item />

      </v-col>
    </v-row>
  </v-container>
  </v-card>
      </v-col>
        </v-row>
</template>

<script>
import ProductItem from '@/components/product/ProductItem'
export default {
  components: {
    ProductItem
  }
}
</script>

<style>

</style>