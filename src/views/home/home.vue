
<template>
  <div class="home">
    <p><img class="img" src="/static/img/icon_no_data.png" /></p>

    <p>首页放点啥好？（捂脸</p>

    <SiteInfo style="margin-top:40px;"/>

  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref, computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import SiteInfo from '@/components/public/SiteInfo.vue';


  const router = useRouter();
  const route = useRoute();

</script>

<style scoped lang="scss">
  .home {
    text-align: center;

    .img {
      border-radius: 10%;
      margin: 20vh 0 30px;
      width: 200px;
      height: 200px;
    }
  }
</style>
