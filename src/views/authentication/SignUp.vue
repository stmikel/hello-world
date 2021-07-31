<template>
  <v-container>
      <v-container>
        <v-card-title>
          <v-row  justify="center"> 
            
              회원가입
          </v-row>
        </v-card-title> 
        <v-row  justify="center"> 
          <!-- 그리드 조정, 컬럼 -->
          <v-col
          v-for = "item in 1" 
          :key = "item"
          cols=""
        xs="12"
        sm="8"
        md="8"
        lg="8"
        xl="6"
        >
          <v-card class='pa-3'>
          ID  <input  v-model="userID" placeholder=" UserID" label=userID outlined>     <v-btn type='submit' >중복확인</v-btn> <br><br>
          비밀번호  <input v-model="Password" placeholder=" Password" label=Password outlined><br><br>
          비밀번호 확인   <input v-model="PasswordConfirm" placeholder=" Password" label=PasswordConfirm outlined><br><br>
          이메일   <input v-model="Email" placeholder=" E-mail" label=E-mail outlined>@<v-combobox v-model="select" :items="items" label="Domain" multiple outlined dense></v-combobox><br><br>
          닉네임   <input v-model="Nickname" placeholder=" Nickname" label=Nickname outlined>     <v-btn type='submit' >중복확인</v-btn> <br><br>
          전화번호   <input v-model="phoneNumber" placeholder=" phoneNumber" label=phoneNumber outlined><br><br>
          주소<br><br>
          우편번호 <input v-model="message" placeholder=" Code" label=Code outlined>     <v-btn type='submit'>주소검색</v-btn> <br><br>
          주소 <input v-model="AddressLine1" placeholder=" AddressLine1" label=AddressLine1 outlined><br><br>
          상세주소 <input v-model="AddressLine2" placeholder=" AddressLine2" label=AddressLine2 outlined><br><br><br>
          <v-btn type='submit'
          block color="primary"
          class='lighten-1'
          elevation="5" >회원가입</v-btn>
          

          
        </v-card>
          </v-col>
      </v-row>
   </v-container>
 
  
    
    
    <v-form v-model="valid">
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
            outlined
            dense
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
            outlined
            dense
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
   
  </v-form>
  </v-container>

</template>

<script>
export default {
  data () {
      return {
        select: [],
        items: [
          'google.com',
          'kakao.com',
          'naver.com',
          
        ],
      }
    },
// data: () => ({
//       valid: false,
//       firstname: '',
//       lastname: '',
//       nameRules: [
//         v => !!v || 'Name is required',
//         v => v.length <= 10 || 'Name must be less than 10 characters',
//       ],
//       email: '',
//       emailRules: [
//         v => !!v || 'E-mail is required',
//         v => /.+@.+/.test(v) || 'E-mail must be valid',
//       ],
//       ID: '',
//       IDRules: [
//         v => !!v || 'ID is required',
//         v => v.length <= 10 || 
//       ],
//     }),
}
</script>

<style>

</style>