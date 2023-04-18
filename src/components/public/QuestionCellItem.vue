<template>
  <div class="QuestionCellItem">
    <div class="content">
      <div class="body">
        <div class="title">{{ props.title }}</div>
        <div class="func">
          <button class="cpBtn"
                  @click="onTextCopy(props.text)">复制</button>
        </div>
      </div>
      <div class="text">{{ props.text }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CopyText } from "sote-tools";

interface Props {
  title: string;
  text: string;
}
const props = defineProps<Props>();
function onTextCopy(text: string) {
  if (text.length < 1) {
    // Toast.fail('没东西你复制个P');
  } else {
    CopyText(text).then(() => {
      // Toast('复制成功');
    }).catch(err => {
      // Toast.fail('复制失败，用的Clipboard的BOM接口，你的浏览器不支持，请自己想办法2333333');
    })
  }
}

</script>
<style scoped lang="scss">
.QuestionCellItem {
  margin: 5px;

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

        .cpBtn {
          font-size: 12px;
          padding: 0 5px;
          border-radius: 4px;
          color: var(--sote-theme-green);
          border: 1px solid var(--sote-theme-green);
        }
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
