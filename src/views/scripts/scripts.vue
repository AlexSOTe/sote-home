<template>
  <div class="scripts">
    <div v-html="str"></div>
  </div>
</template>
<script setup lang="ts">
import { GetSafeHTMLStr } from "@/utils/tools";
import { onMounted, ref } from "vue";

const str = ref('');

onMounted(() => {
  str.value = GetSafeHTMLStr('**haha**');
});

</script>
<style scoped lang="scss">
.scripts {}
</style>
