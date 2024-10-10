<script setup>
import Button from '@/components/Button.vue'
/*
 * The idea is to have some kind of error/loading boundary; very simple tho
 */
defineProps({
  loading: Boolean,
  error: Boolean
})
</script>

<template>
  <div v-if="loading" class="spinner-wrapper"><span class="spinner"></span></div>
  <div v-else-if="error" class="error-wrapper"><span>Something went wrong...</span>
    <Button text="Try again" @click="window.reload" :disabled="false" :loading="false" />
  </div>
  <div v-else>
    <slot />
  </div>
</template>
<style>
.error-wrapper {
  color: red;
  display: flex;
  flex-direction: column
}

/* Some pre-generated spinner class */
.spinner {
  width: 48px;
  height: 48px;
  border: 5px solid #EBEBEB;
  border-bottom-color: #FF3D00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
