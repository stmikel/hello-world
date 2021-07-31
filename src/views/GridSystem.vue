<template>
<div>
  <v-container class=""> 
      <!-- fulid 속성 적용시 너비가 최대로 늘어남 -->
      <v-card class="pa-3">
      <v-row dense>
        <!-- 뷰티파이에서 기본거터는 24px v-row dense = 8px, no-gutter 거터가 없어짐 -->
        <v-col>
          <!-- v-col 은 v-row안에 선언되어야한다 -->
      <v-card class="yellow pa-3">
          <!-- 가상의컨텐츠로 카드를 하나 생성 -->
          col
      </v-card>
      </v-col>
      <v-col cols='auto'>
        <!-- auto 는 해당 컨텐츠 크기만큼 자동정렬 -->
      <v-card class="blue pa-3">
          col
      </v-card>
      </v-col>
      <v-col>
      <v-card class="pa-3">
          colsss
      </v-card>
      </v-col>
      </v-row>


      
      <v-row>
        <v-col>
      <v-card class="yellow pa-3">
          col
      </v-card>
      </v-col>
      <v-col>
      <v-card class="yellow pa-3">
          col
      </v-card>
      </v-col>
      <v-spacer />
      <!-- 간격벌리기 -->
      <v-col>
      <v-card class="pa-3">
          col
      </v-card>
      </v-col>
      <!-- v-row = 행, v-col = 열을 나타낸다 -->
      </v-row>
      </v-card>

      <br><hr>
      <!-- 아래는 구버전 명령어 기본거터가없음 -->
      <v-card class="mt-5 pa-3">
        <v-layout>
          <v-flex>
            <v-card class="pa-3" outlined>
              col
            </v-card>
          </v-flex>
            <v-spacer />
          <v-flex>
            <v-card class="pa-3" outlined>
              col
            </v-card>
          </v-flex>
          <v-flex>
            <v-card class="pa-3" outlined>
              col
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <v-card class="pa-3" outlined>
              col
            </v-card>
          </v-flex>
          <v-flex>
            <v-card class="pa-3" outlined>
              col
            </v-card>
          </v-flex>
          <v-flex>
            <v-card class="pa-3" outlined>
              col
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>

      <br><hr><br>

         <v-card class="pa-3">
      <v-row 
      :style="{height: '120px'}"
      class='red'
      align = 'start'>
        <v-col>
      <v-card class="pa-3">
           col
      </v-card>
      </v-col>
      <v-col>
      <v-card class="pa-3">
          col
      </v-card>
      </v-col>
      <v-col>
      <v-card class="pa-3">
          col
      </v-card>
      </v-col>
      </v-row>
      <v-row
      :style="{height: '120px'}"
      class='yellow'
      >
      <v-col
      align-self = 'end'>
      <v-card class="pa-3">
          col
      </v-card>
      </v-col>
      <v-col
      align-self = 'center'>
      <v-card class="pa-3">
          col
      </v-card>
      </v-col>
      
      <v-col
      align-self = 'start'>
      <v-card class="pa-3">
          col
      </v-card>
      </v-col>
      <!-- v-row = 행, v-col = 열을 나타낸다 -->
      </v-row>
      </v-card>

      <br><hr><br>

      <v-card class="pa-3">
      <v-row justify='end'>
        <!--
          justify 속성은 row 수평정렬
          start
          center
          end
          space-around - 균등 분할후 가운데정렬
          space-between - 균등 분할후 첫항목은 앞으로 끝은 뒤로 가운데는 사이사이
        -->
        <v-col cols='auto'>
      <v-card class="pa-3"
      outlined>
           col
      </v-card>
      
      </v-col>
       <v-col cols='auto'>
      <v-card class="pa-3"
      outlined>
           col
      </v-card>
      
      </v-col>
       <v-col cols='auto'>
      <v-card class="pa-3"
      outlined>
           col
      </v-card>
      
      </v-col>
      </v-row>
    </v-card>
  </v-container>
  
  <!-- v-container = 컨텐츠의 폭을 나타냄 웹사이트의 컨텐츠를 중앙으로 나타냄 -->
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>