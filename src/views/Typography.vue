<template>
  <v-container>
      <v-card>
          <v-card-title>
              Typography
          </v-card-title>
          <v-card-text></v-card-text>
              <v-card class="pa-3 text-h2 primary lighten-5">
                  <!-- ligthen -  색상연하게 -->
                  컨텐츠
              </v-card>
              <v-card class="pa-3 text-h2 secondary darken-4">
                   <!-- darken 색상 진하게 -->
                  컨텐츠
              </v-card>  
              <v-card class="pa-3 text-h2 error">
                  컨텐츠
              </v-card>  
              <!-- 배경 변경 -->
              <v-card class="pa-3 text-h2 primary--text d-none d-sm-block">
                  <!-- d-none 명령어는 default값이 xs이고 sm이상은 d-block으로 보여줌-->
                  컨텐츠 d-none
              </v-card> 
              <v-card class="pa-3 text-h2 primary--text d-none">
                  <!-- d-none 명령어 사용시 display none시켜줌 -->
                  컨텐츠
              </v-card> 
               <v-card class="pa-3 text-h2 secondary--text">
                  컨텐츠
              </v-card>  
              <v-card class="pa-3 text-h2 error--text">
                  컨텐츠
              </v-card>   
              <!-- 텍스트 컬러 변경 -->
              <!-- 기본색상및 서브색상을 변경하고 싶으면 vuetify.js 에서 재정의 컬러참조는 뷰티파이 홈페이지 presets참조 -->


          <v-container class="grey lighten-3">
              <v-card class="pa-3" outlined>
                  <!-- 글자크기 -->
                  <p class="text-h1">Heading 1</p>
                  <p class="text-h2">Heading 2</p>
                  <p class="text-h3 text-sm-subtitle-1">Heading 3</p>
                  <!-- 글자색 -->
                  <p class="font-weight-black">BlackText</p>
                  <p class="font-weight-thin">font-weight-thin</p>
                  <!-- 얼라이먼트 자동양쪽 정렬 -->
                  <p class="text-justify">
                      text-justify
                      Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.
                      Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
                      Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. 
                      Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.</p>
                      <br>
                      <p class="text-center text-sm-right">
                          <!-- text-left,right,center // breakpoint와 함께 사용가능 -->
                      text-justify
                      Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.
                      Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
                      Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. 
                      Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.</p>
                  <!-- text-value = default로 xs사이즈에서 적용
                  text-breakpoint-value 로 창크기에 따라 폰트사이즈도 변경 -->
                  <!-- Heading 3
                  Heading 4
                  Heading 5
                  Heading 6
                  Subtitle 1
                  Subtitle 2
                  Body 1
                  Body 2
                  BUTTON
                  Caption
                  OVERLINE -->
              </v-card> 
          </v-container>
      </v-card>
  </v-container>

</template>

<script>
export default {

}
</script>

<style>

</style>