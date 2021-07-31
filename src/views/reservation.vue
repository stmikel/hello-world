<template>
  <v-row justify='center' >
      <v-col
      cols=8>
  <v-card>

  <!-- <v-container>
    <v-row>
      <v-col
     
        cols="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"> -->

      
  <v-container>
  <v-row justify='center'>
    <v-col
    cols="12">
    <v-date-picker v-model="picker"></v-date-picker>
    </v-col>
  </v-row>
  </v-container>
  

  
      <!-- </v-col>
    </v-row>
  </v-container> -->
  </v-card>
      </v-col>
        </v-row>
</template>

<script>
export default {
data () {
      return {
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      }
    },
  }

</script>

<style>

</style>