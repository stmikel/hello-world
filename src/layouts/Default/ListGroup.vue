<template>
  <v-list-group :prepend-icon="itemGroup.icon">
      <template v-slot:activator>
          <v-list-item-content>
             <v-list-item-title>
                  {{itemGroup.title}}
            </v-list-item-title>
          </v-list-item-content>
      </template>

      
      <template v-for="(child, index) in itemGroup.items">

          <default-list-group
          v-if="child.items"
          :key="`sub-group-${index}`"
          :itemGroup="child"   
          
          />

          <default-list-item
          v-else
          :key="`child-${index}`"
          :itemList="child"
          />
          <!-- if에서 한번돌고 다시 본인 참조해서 else로 내려옴 -->
      </template>
  </v-list-group>
</template>

<script>
import DefaultListGroup from './ListGroup'
import DefaultListItem from './ListItem'
export default {
    name: "DefaultListGroup",
    components: {
        DefaultListItem,
        DefaultListGroup
    },
    props: {
        // 프롭으로 받은 item 는 drawer에 선언된 pages 메뉴
        itemGroup: {
            type: Object,
            default: ()=>({}),
        }
    }
}
</script>

<style>

</style>