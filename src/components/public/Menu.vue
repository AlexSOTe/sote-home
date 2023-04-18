<template>
  <div ref="Menu" class="Menu">
    <div class="menuIcon">
      <button class="menuBtn flex-center" @click="onMenuBtnClick">🌻</button>
      <div v-if="showMenu"
           class="menuList ob">
        <div v-for="(x, i) in menuList"
             :key="i"
             class="menuItem">
          <button @click="onMenuItemClick(x)">{{ x.text }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { pageRoutes } from "../../router/router";

  const route = useRoute();
  const router = useRouter();

  const Menu = ref<HTMLDivElement | null>(null);

  const showPopover = ref(false);
  interface IMenuItem {
    text: string;
    path: string;
  }
  const showMenu = ref(false);

  const menuList = ref<IMenuItem[]>(pageRoutes.map(v => ({
    text: v.meta?.title ?? '未设置页面名称',
    path: v.path,
  })) as IMenuItem[]);

  function onSelect(obj: any) {
    console.log(obj);
    showPopover.value = false;
    router.push({
      path: obj.path,
      query: {}
    });
  }

  onMounted(() => {
    // @ts-ignore
    //new Inertia(Menu.value!);
  });
  function onMenuBtnClick() {
    showMenu.value = !showMenu.value;
  }
  function onMenuItemClick(item: IMenuItem) {
    showMenu.value = false;
    router.push({ path: item.path });
  }
</script>
<style scoped lang="scss">
  @keyframes FlourBreath {
    10% {
      opacity: 1;
      transform: scale(1);
    }

    10% {
      opacity: 0.1;
      transform: scale(0.95);
    }

    100% {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  @keyframes ShowMenu {
    0% {
      opacity: 0;
      transform: scale(0);
      right: 0;
      bottom: 0;
    }

    100% {
      opacity: 1;
      transform: scale(1);
      right: 35px;
      bottom: 35px;
    }
  }

  .Menu {
    --btn-size: 40px;
    --btn-border: 1px;
    position: fixed;
    right: 20px;
    bottom: 70px;
    z-index: 10;
    border-radius: 50%;
    width: calc(var(--btn-size) + var(--btn-border) * 2);
    height: calc(var(--btn-size) + var(--btn-border) * 2);
    border: var(--btn-border) solid var(--sote-theme-green);

    .menuIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: var(--btn-size);
      height: var(--btn-size);
      padding: 0;

      .menuBtn {
        border-radius: 50%;
        width: var(--btn-size);
        height: var(--btn-size);
        background-color: var(--sote-theme-green);
        animation: FlourBreath 2s infinite;
        font-style: normal;
        font-size: 26px;
      }

      .menuList {
        padding: 10px;
        position: absolute;
        animation: ShowMenu 300ms;
        right: 35px;
        bottom: 35px;
        transform-origin: right bottom;
        overflow: hidden;
        width: 100px;
        border-radius: 10px;
        background-color: rgba(200, 200, 200, 0.3);
        border: 1px solid green;

        .menuItem {
          &:last-child {
            border: 0;
          }

          > button {
            width: 100%;
            line-height: 40px;
            color: #90EE90;
            border-radius: 10px;

            &:active {
              background-color: rgba(0, 0, 0, 0.3);
            }
          }
        }
      }
    }
  }
</style>
