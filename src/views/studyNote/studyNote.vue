
<template>
  <div class="studyNote">
    <van-sticky>
      <van-tabs v-model:active="activeTab"
                @click-tab="onClickTab">
        <van-tab v-for="(x,i) in studyTabs"
                 :title="x.title" />
      </van-tabs>
    </van-sticky>
    <van-search v-model="keyword"
                shape="round"
                background="#ffffff"
                placeholder="请输入搜索关键词" />
    <div class="list">
      <van-collapse v-if="list.length>0"
                    v-model="activeNames">
        <van-collapse-item v-for="(item,i) in list"
                           :key="item.id"
                           title-class="collapseItemTitle"
                           :name="item.id">
          <template #title>
            <div class="collapseItemTitle">
              {{item.title}}
            </div>
          </template>
          <QuestionCellItem title="描述：" :text="item.desc" />
          <QuestionCellItem title="原因：" :text="item.reason" />
          <QuestionCellItem title="解决办法：" :text="item.solution" />
        </van-collapse-item>
      </van-collapse>
      <van-empty v-else description="暂无问题" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref, computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { Toast } from 'vant';
  import { studyTabs } from '../../constants/staticData';
  import * as questions from '../../constants/question/index.question';
  import { EStudyTabs } from '../../constants/enum';
  import { CopyText } from 'sote-tools';
  import QuestionCellItem from '../../components/public/QuestionCellItem.vue';

  const router = useRouter();
  const route = useRoute();

  const keyword = ref('');

  const activeTab = ref(0);
  const activeNames = ref([]);
  const list = ref<Array<IQuestion>>([]);

  function onClickTab(tab: IVantTabItemProps) {
    list.value = questions[tab.title as EStudyTabs];
  }
  onMounted(() => {
    //默认展示第一页数据
    const studyTab = studyTabs[0];
    list.value = questions[studyTab.title];
  });
</script>

<style scoped lang="scss">
  .studyNote {
    .list {
      .collapseItemTitle {
      }

      &:deep(.van-collapse-item__title) {
        width: auto;
        margin: 4px;
        border-radius: 10px;
        background-color: #c0ffd3;
      }
    }
  }
</style>
