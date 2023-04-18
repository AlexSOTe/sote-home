<template>
  <div class="QuestionItem ob">
    <button class="title"
            :title="props.obj.title"
            @click="onTitleClick">
      {{ props.obj.title }}
    </button>
    <div v-if="show" class="ctt">
      <QuestionCellItem title="描述：" :text="props.obj.desc" />
      <QuestionCellItem title="原因：" :text="props.obj.reason" />
      <QuestionCellItem title="解决办法：" :text="props.obj.solution" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import QuestionCellItem from '@/components/public/QuestionCellItem.vue'

interface Props {
  obj: any;
}
const props = defineProps<Props>();
const emit = defineEmits([]);

const show = ref(false);

onMounted(() => {
});
function onTitleClick() {
  show.value = !show.value;
}
</script>
<style scoped lang="scss">
.QuestionItem {
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 10px;

  .title {
    width: 100%;
    text-align: left;
    display: block;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--sote-theme-green);
  }

  .ctt {
    margin: 10px 0 0;
    animation: FadeIn ease 300ms;
  }
}
</style>
