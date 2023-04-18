<template>
  <div class="Tab">
    <div class="box">
      <div v-for="(x, i) in list"
           :key="i"
           :class="{ item: true, activeTab: props.activeTab === i }"
           @click="onItemClick(x, i)">
        {{ x.title }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";

interface Props {
  list: any[];
  activeTab: number;
}
const props = defineProps<Props>();
const emit = defineEmits(["onItemClick"]);

onMounted(() => {
});
function onItemClick(x: any, i: number) {
  emit("onItemClick", x, i);
}
</script>
<style scoped lang="scss">
.Tab {
  width: 100%;
  height: var(--nav-size);
  position: sticky;
  left: 0;
  top: 0;
  z-index: 1;
  overflow: hidden;

  .box {
    width: 100%;
    height: 100%;
    overflow-x: auto;
    display: flex;
    background-color: #efe;
    white-space: nowrap;

    .item {
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #888;

      &.activeTab {
        color: var(--sote-theme-green);
      }
    }
  }
}
</style>
