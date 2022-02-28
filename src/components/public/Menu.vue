<template>
  <button class="Menu" @click.stop>
  </button>
</template>
<script setup lang="ts">
  import { ref } from "vue";
</script>
<style scoped lang="scss">
  .Menu {
    position: fixed;
    right: 20px;
    bottom: 70px;
    z-index: 10px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: rgba(200,200,200,0.5);
  }
</style>
