<script setup>
/*
 * Generic button component that takes text, onClick, loading and disabled props -> ideally with typescript loading and disabled are optional and set to false by default
 */
defineProps({
  text: String,
  onClick: Function,
  loading: Boolean,
  disabled: Boolean
})
</script>
<template>
  <v-btn :text="text" :loading="loading" :disabled="disabled"
         @click="onClick" />
</template>
