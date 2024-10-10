<script setup>
/*
 * Generic select component that takes items, label, itemValue and itemTitle that are keys of items arrays. title is the prop that is displayed, value is value stored in v-model
 */
defineProps({
  items: Array,
  label: String,
  itemValue: String,
  itemTitle: String
})
</script>
<template>
  <v-select :items="items" :item-value="itemValue" :item-title="itemTitle" :label="label" />
</template>
