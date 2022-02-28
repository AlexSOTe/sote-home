<template>
  <van-cell class="QuestionCellItem">
    <div class="content">
      <div class="body">
        <div class="title">{{props.title}}</div>
        <div class="func">
          <van-tag color="#44dd44" plain @click="onTextCopy(props.text)">复制</van-tag>
        </div>
      </div>
      <div class="text">{{props.text}}</div>
    </div>
  </van-cell>
</template>
<script setup lang="ts">
  import { CopyText } from "sote-tools";
  import { Toast } from "vant";


  interface Props {
    title: string;
    text: string;
  }
  const props = defineProps<Props>();
  function onTextCopy(text: string) {
    if (text.length < 1) {
      Toast.fail('没东西你复制个P');
    } else {
      CopyText(text).then(() => {
        Toast('复制成功');
      }).catch(err => {
        Toast.fail('复制失败，用的Clipboard的BOM接口，你的浏览器不支持，请自己想办法2333333');
      })
    }
  }

</script>
<style scoped lang="scss">
  .QuestionCellItem {

    .content {

      .body {
        display: flex;

        .title {
          flex: 1;
          margin: 0 0 0px;
          font-size: 14px;
          color: black;
        }

        .func {
          flex: none;
        }
      }

      .text {
        font-size: 12px;
        color: #969799;
        line-height: 16px;
        white-space: pre-wrap;
      }
    }
  }
</style>
