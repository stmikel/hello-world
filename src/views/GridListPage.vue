<template>
  <v-container>
      <v-row>
          <v-col
          v-for = "item in 12"
          :key = "item"
          cols="3">
          <v-card class='pa-3'>
          col
          <!-- cols= 컬럼의 크기를 몇개만큼 지정할것이냐 (뷰티파이는 맥시멈 12개) -->
          <!-- 
          break point는 미리 정의된 화면
          모바일 xs - 600px 미만
          태블릿 sm - 600 이상 960미만
          랩탑 md - 960이상 1264미만
          모니터 lg - 1264이상 1904미만
          울트라 와이드 xl 1904px이상
          -->
        </v-card>
          </v-col>
      </v-row>
      <br><hr><br>
       <v-row>
          <v-col
          v-for = "item in 12"
          :key = "item"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="1">
          <v-card class='pa-3'>
          col
          </v-card>
          </v-col>
      </v-row>
      
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>