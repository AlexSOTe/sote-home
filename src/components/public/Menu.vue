<template>
  <div ref="Menu" class="Menu">
    <van-popover v-model:show="showPopover"
                 placement="top-end"
                 theme="dark"
                 :actions="actions"
                 @select="onSelect">
      <template #reference>
        <van-button class="menuBtn" type="primary">
          <van-icon name="flower-o" />
        </van-button>
      </template>
    </van-popover>
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

  const actions = ref<IMenuItem[]>([
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
    new Inertia(Menu.value!);
  });
</script>
<style scoped lang="scss">
  .Menu {
    position: fixed;
    right: 20px;
    bottom: 70px;
    z-index: 10;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 1px solid lightgreen;

    .menuBtn {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      background-color: lightgreen;
      font-size: 24px;
      color: tomato;
      animation: FlourBreath 2s infinite;
      border: 0;
    }
  }
</style>
