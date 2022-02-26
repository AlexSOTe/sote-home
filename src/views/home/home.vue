
<template>
  <div class="home">
    <img src="/static/img/icon_no_data.png" alt="Alternate Text" />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref, computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { Toast } from 'vant';


  const router = useRouter();
  const route = useRoute();

</script>

<style scoped lang="scss">
  .home {
  }
</style>
