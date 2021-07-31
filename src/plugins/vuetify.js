import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';
// 컬러 재정의시 변수명으로 활용할때 import


Vue.use(Vuetify);

const theme = {
    primary: colors.deepOrange
}
// 테마선언 
export default new Vuetify({
    breakpoint: {
        mobileBreakpoint: 'xs'
        // 모바일 사이즈 변경
    },
    theme: {
        themes: {
            light: {
              primary: '#1976D2',
            //   'theme'
              //primary 색상 재정의 뷰티파이 홈페이지에서 color쳐서 색상참조\
              secondary: colors.yellow,
              
            },
            dark: {
                theme
            },
              
        
    }
    }
});

