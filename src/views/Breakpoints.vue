<template>
  <v-container>
      <v-card>
          <v-card-title>
          $vuetify.breakpoint.name: {{$vuetify.breakpoint.name}}
          <!-- name 으로 접근하면 현재 뷰포트가 어떤 코드위치에 있는지 확인가능 -->
          </v-card-title>
          <v-container class="grey lighten-3">
              <v-card
              class="pa-3"
              outlined
              :height="height">
                  콘텐츠
              </v-card>
          </v-container>
      </v-card>
      <br><hr><br>
      <v-card class="mt-5"> 
          <v-card-title>
          $vuetify.breakpoint.mobile: {{$vuetify.breakpoint.mobile}} {{$vuetify.breakpoint.mobileBreakpoint}}
          <!-- name 으로 접근하면 현재 뷰포트가 어떤 코드위치에 있는지 확인가능 -->
          </v-card-title>
          <v-container class="grey lighten-3">
    
    <!-- 다이얼로그 -->
    <v-dialog
      v-model="dialog"
      width="500"
      :fullscreen="$vuetify.breakpoint.mobile"
    >
    <!-- fullscreen 은 팝업을 전체화면 하는것 위의 코드는 모바일화면이 true일떄만 전체 -->
    <!-- 모바일의 기준을 변경할떄는 vuetify.js로 갈것 -->
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
          </v-container>
      </v-card>
      <br><hr><br>
      <v-card class="mt-5"> 
          <v-card-title>
          Vuetify Breakpoint Object
          </v-card-title>
          <v-container class="grey lighten-3">
            <v-card 
            class="pa-3"
            outlined>
            
            $vuetify.breakpoint.xs: {{$vuetify.breakpoint.xs}}<br>
            $vuetify.breakpoint.smAndDown: {{$vuetify.breakpoint.smAndDown}}<br>
            $vuetify.breakpoint.height: {{$vuetify.breakpoint.height}}<br>
            $vuetify.breakpoint.width: {{$vuetify.breakpoint.width}}<br>
            $vuetify.breakpoint.thresholds: {{$vuetify.breakpoint.thresholds}}<br>
            <!-- xs,sm,md,lg값을 바꾸고싶으면 vuetify.js에서 오버라이드 -->
            </v-card>thresholds
   
          </v-container>
      </v-card>
  </v-container>
  
</template>

<script>
export default {
     data () {
      return {
        dialog: false,
      }
    },
    computed: {
        height() {
            switch(this.$vuetify.breakpoint.name) {
                case 'xs' : return 100
                case 'sm' : return 200
                case 'md' : return 300
                case 'lg' : return 400
               default: return 500

            }
    }
    }

}
</script>

<style>

</style>