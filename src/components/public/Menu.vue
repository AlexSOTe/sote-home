<template>
  <div ref="Menu" class="Menu">
    <div class="menuBtn">
      <button class="icon" @click="onMenuBtnClick">🌻</button>
      <div v-if="showMenu"
           class="menuList">
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

const route = useRoute();
const router = useRouter();

const Menu = ref<HTMLDivElement | null>(null);

const showPopover = ref(false);
interface IMenuItem {
  text: string;
  path: string;
}
const showMenu = ref(false);

const menuList = ref<IMenuItem[]>([
  { text: '首页', path: '/home' },
  { text: '技术问题', path: '/studyNote' },
  { text: '窗花', path: '/paperCuts' },
]);
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
  showMenu.value = true;
}
function onMenuItemClick(item: IMenuItem) {
  showMenu.value = false;
  router.push({ path: item.path });
}
</script>
<style scoped lang="scss">
.Menu {
  --btn-size: 40px;

  position: fixed;
  right: 20px;
  bottom: 70px;
  z-index: 10;
  border-radius: 50%;
  width: var(--btn-size);
  height: var(--btn-size);
  border: 1px solid lightgreen;

  .menuBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--btn-size);
    height: var(--btn-size);
    padding: 0;

    .icon {
      display: block;
      border-radius: 50%;
      width: var(--btn-size);
      height: var(--btn-size);
      background-color: lightgreen;
      animation: FlourBreath 2s infinite;
      font-style: normal;
      font-size: 26px;
    }

    .menuList {
      padding: 10px;
      position: absolute;
      right: 50px;
      bottom: 0px;
      animation: FadeIn 300ms;
      overflow: hidden;
      width: 100px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.2);

      .menuItem {
        border-bottom: 1px solid #999;

        &:last-child {
          border: 0;
        }

        >button {
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
