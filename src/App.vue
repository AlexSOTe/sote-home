
<template>
  <div class="App">
    <div class="navBar">
      <van-sticky>
        <van-nav-bar :title="store.getters.getDocumentTitle||'童话村香辣藤椒劲麻裹蛋大鸡排'" left-arrow>
          <template #left>
          </template>
          <template #right>
            <div class="menuBtn" @click="onAvatarClick">
              <img class="avatar" src="/static/img/bloghead.jpg" />
            </div>
          </template>
        </van-nav-bar>
      </van-sticky>
    </div>
    <div class="pages">
      <router-view></router-view>
    </div>
    <!--底部tab-->
    <!--<div class="bottomBar">
      <van-tabbar v-model="tabbarIndex">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o" badge="5">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o" badge="20">标签</van-tabbar-item>
      </van-tabbar>
    </div>-->

    <Menu />
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from "vue-router";
  import { onMounted, reactive, ref, watch } from 'vue';
  import { store } from './store/index';
  import Menu from './components/public/Menu.vue';
  import { Dialog, Notify, Toast } from "vant";
  const route = useRoute();
  const router = useRouter();

  const tabbarIndex = ref(0);

  function onAvatarClick() {
    router.push({
      path: '/home',
      query: {}
    });
  }
  onMounted(() => {
  });
</script>

<style scoped lang="scss">
  .App {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .navBar {
    flex: none;

    .menuBtn {
      font-size: 24px;

      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid lime;
        animation: TurningBorderHalo 2s infinite;
      }
    }
  }

  .pages {
  }

  .bottomBar {
    flex: none;
    height: 50px;
  }
</style>
