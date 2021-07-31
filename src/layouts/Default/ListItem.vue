<template>
          <!-- v-for="(item, index) in items"
          :key="`item-${index}`" -->
  <v-list-item
          link
          :to = itemList.to
          active-class="primary"
        >
        <!-- active-class="primary" 선택된 메뉴 색상넣기-->
          <v-list-item-icon>
            <v-icon>{{ itemList.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ itemList.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
</template>

<script>
export default {
    name: "DefaultListItem",
    props: {
        itemList: {
        type: Object,
        dafault: () => ({}), 
        }
    }
}
</script>

<style>

</style>