
<template>
  <div class="home">
    <img class="img" src="/static/img/icon_no_data.png" />
    首页放点啥好？（捂脸
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref, computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router';


  const router = useRouter();
  const route = useRoute();

</script>

<style scoped lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;

    .img {
      border-radius: 10%;
      margin: 20vh 0 30px;
      width: 200px;
      height: 200px;
    }
  }
</style>
