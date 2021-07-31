<template>
  <v-list
        expand
        dense
        nav
      >
      <!-- 하위 메뉴가 있다면 (v-if) v-list-group 출력 -->
      <!-- v-if-"item.items"
      v-list-group -->
      <template
      v-for="(item, index) in itemsList">
        <!-- v-for= (drawer에서 상속받은 item, index) in List.vue의 배열
        그냥 예시에요 이런식으로좀 부탁드려요-->

      <default-list-group
      v-if="item.items"
      :key="`group-${index}`"
      :itemGroup="item"
      />
      
      <default-list-item
      v-else
      :key="`item-${index}`"
      :itemList="item" 
      />
      <!-- ListItem 컴퍼넌트 -->
      </template>
      <!-- 실제 리스트목록이 나타나는곳 -->
      </v-list>
      
</template>

<script>
import DefaultListGroup from './ListGroup'
import DefaultListItem from './ListItem'
export default {
    name: "DefaultList",
    components: {
      DefaultListItem,
      DefaultListGroup,
    },
    // 얘가 부모(Drawer)로 부터 받는 프롭스
    props: {
        itemsList: {
             type: Array,
             dafault: ()=> ({}),
        }
    }
}
</script>

<style>

</style>