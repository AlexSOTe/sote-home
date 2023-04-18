<template>
  <div class="scripts">
    <div v-html="str"></div>
  </div>
</template>
<script setup lang="ts">
  import DOMPurify from "dompurify";
  import { marked } from "marked";
  import { onMounted, ref } from "vue";
  // import aaa from '@/constants/scripts/windows/09.安装nodejs版本管理器fnm.md';

  const str = ref('');

  onMounted(() => {
    str.value = marked.parse('**haha **');
    // const s = DOMPurify.sanitize(marked.parse('@/constants/scripts/windows/09.安装nodejs版本管理器fnm.md',));
    // console.log(1111111, s);
  });

</script>
<style scoped lang="scss">
  .scripts {
  }
</style>
