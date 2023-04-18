<template>
  <div class="Header">
    <div class="navCtt">
      <span class="left"></span>
      <span class="center">{{ mainStore.documentTitle || '个人学习笔记' }}</span>
      <span class="right">
        <div class="menuBtn" @click="onAvatarClick">
          <img class="avatar" src="/static/img/bloghead.jpg" />
        </div>
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import router from '@/router/router';
import { useMainStore } from '@/store/main.store';


const mainStore = useMainStore();

function onAvatarClick() {
  router.push({
    path: '/home',
    query: {}
  });
}
</script>
<style scoped lang="scss">
@keyframes TurningBorderHalo {
  0% {
    border-color: lightgreen;
  }

  70% {
    border-color: lime;
  }

  80% {
    border-color: green;
  }

  90% {
    border-color: lime;
  }

  100% {
    border-color: lightgreen;
  }
}

.Header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-size);
  flex: none;
  height: var(--nav-size);
  background-color: #eee;

  .navCtt {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav-size);
    display: flex;
    align-items: center;
    box-sizing: border-box;

    .left,
    .right {
      flex: none;
      width: var(--nav-size);
      height: var(--nav-size);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .center {
      flex: 1;
      text-align: center;
    }

    .right {

      .menuBtn {
        font-size: 24px;
        width: 30px;
        height: 30px;

        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 2px solid transparent;
          animation: TurningBorderHalo 2s infinite;
        }
      }
    }
  }

}
</style>
