<template>
  <v-app> 
      <!-- v-app이 최상단에 위치해야함 id가 app인 div영역으로 치환된다.-->
      <v-app-bar v-if="$vuetify.breakpoint.xsOnly" app /> 
          <!-- 특수속성인 app속성이 있어야 기본 layout이 된다 -->
        <v-navigation-drawer app />
    <v-main>
          <!-- main은 vue가 마운트될때 appbar 나 navigation 등을 프레임워크 코어에 등록하고 등록된 높이와 너비를 취하여 컨텐츠 영역을 조절 -->
          <!-- v-main 컨텐츠 영역 layout을 제외한 어플리케이션 컨텐츠 영역 main태그로 치환됨 -->
          <v-container fluid>
              컨텐츠 영역
              <!-- 컨텐츠가 포함되는 컨텐츠 영역 -->
          </v-container>
    </v-main>      
    <v-footer app />
    <!-- footer와 같은 컴포넌트는 app이라는 특수한 속성을 붙여 기본 레이아웃으로 사용가능 -->
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>