
<template>
  <div class="studyNote">
    <!-- TODO 这个tab有毒，点tab的外面下面也能切换 -->
    <Tabs :list="studyTabs"
          :activeTab="activeTab"
          @onItemClick="onClickTab"/>
    <div v-if="false"
         class="searchBox">
      <input v-model="keyword"
            class="searchInput"
            placeholder="请输入搜索关键词"
            @input="onSearchInput"/>
    </div>
    <div class="list">
      <div v-for="(x, i) in list"
           :key="x.id"
           class="listItem">
        <QuestionItem :obj="x"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { studyTabs } from '@/constants/staticData';
import * as questions from '@/constants/question/index.question';
import type { EStudyTabs } from '@/constants/enum';
import Tabs from '@/components/public/Tabs.vue';
import QuestionItem from '@/components/studyNote/QuestionItem.vue';

const router = useRouter();
const route = useRoute();

const keyword = ref('');

const defV = 0;
const activeTab = ref(defV);
const activeNames = ref([]);
const list = ref<IQuestion[]>([]);


function onSearchInput() {
  alert('哦豁！这个功能还没做')
}
function onClickTab(tab: any, idx: number) {
  activeTab.value = idx;
  //展示对应数组
  list.value = questions[tab.title as EStudyTabs];
  //全部合起来
  activeNames.value = [];
}
onMounted(() => {
  //默认展示第一页数据
  const studyTab = studyTabs[defV];
  list.value = questions[studyTab.title];
});
</script>

<style scoped lang="scss">
.studyNote {
  .searchBox {
    padding: 10px;
    background-color: white;
    border-radius: 0 0 10px 10px;

    .searchInput {
      padding: 0 15px;
      width: 100%;
      height: 40px;
      border-radius: 20px;
      border: 1px solid #999;
    }
  }

  .list {
    // 空
  }
}
</style>
