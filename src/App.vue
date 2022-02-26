
<template>
  <div class="App">
    <div class="navBar">
      <van-nav-bar :title="store.getters.getDocumentTitle||'童话村香辣藤椒劲麻裹蛋大鸡排'" left-arrow>
        <template #left>
          <div class="menuBtn">
            <img class="avatar" src="/static/img/bloghead.jpg" />
          </div>
        </template>
        <template #right>
          <div class="menuBtn" @click="blockShow.menu = true">
            <van-icon name="apps-o" />
          </div>
        </template>
      </van-nav-bar>
    </div>
    <div class="pages">
      <router-view></router-view>
    </div>
    <!--<div class="bottomBar">
      <van-tabbar v-model="tabbarIndex">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>-->
    <!--<van-tabbar-item icon="search" dot>标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o" badge="5">标签</van-tabbar-item>-->
    <!--<van-tabbar-item icon="setting-o" badge="20">标签</van-tabbar-item>
      </van-tabbar>
    </div>-->

    <van-overlay :show="blockShow.menu" @click="blockShow.menu = false">
      <Menu />
    </van-overlay>
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from "vue-router";
  import { onMounted, reactive, ref, watch } from 'vue';
  import { store } from './store/index';
  import Menu from './components/public/Menu.vue';

  const route = useRoute();
  const blockShow = reactive({
    menu: false,
  });
  const tabbarIndex = ref(0);

</script>

<style scoped lang="scss">
  .App {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .navBar {
    .menuBtn {
      font-size: 24px;

      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
  }

  .pages {
    flex: 1;
  }

  .bottomBar {
    height: 50px;
  }
</style>
