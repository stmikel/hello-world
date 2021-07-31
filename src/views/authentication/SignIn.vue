<template>
    <v-container class="grey fill-height">
        <v-row justify="center">
            <v-col cols=""
        xs="12"
        sm="8"
        md="8"
        lg="8"
        xl="6"
        
            >
                <v-card width="460" class="pa-3">
                    <v-card-text class="text-center" px-12 py-16>로그인페이지
                        <div class="text-h4 font-weight-black"> 로그인 </div>
                <v-text-field
                label="이메일"
                clearable
                prepend-icon="mdi-email"
                >
                </v-text-field>

                 <v-text-field
                 label="비밀번호"
                clearable
                prepend-icon="mdi-lock-outline"
                >

                </v-text-field>
                <v-btn  x-large block rounded color='primary'>
                    로그인
                </v-btn>
                        
                    </v-card-text>
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