
<template>
  <div class="paperCuts">
    <div class="func">
      <input v-model="coln"
             class="rangeStyle"
             type="range"
             :min="1"
             :max="5"
             :step="1">
    </div>
    <div class="list">
      <div v-for="(x, i) in list"
           :key="x.id"
           class="item"
           :style="{ 'background-color': `rgb(0,${((list.length - i) + 10) * 8},0)` }">
        <img class="paperCut" :src="x.url" @click="onImgClick($event, x.url)">
      </div>
    </div>
    <Modal v-model:visible="showModel">
      <img class="imgObjStyle"
           :src="imgObj.url"
           :style="{
             top: imgObj.top,
             left: imgObj.left,
             width: imgObj.width,
             height: imgObj.height,
           }"/>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, computed, nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Modal from '@/components/public/Modal.vue';


const router = useRouter();
const route = useRoute();
const showModel = ref(false);
const imgObj = reactive({
  url: '',
  top: '0px',
  left: '0px',
  width: '0px',
  height: '0px',
});

const list = ref<any[]>([]);
for (var i = 1; i <= 30; i++) {
  list.value.push({ id: `${i}`, text: `${i}`, url: `https://sote.tech/static/img/windowFlour/paperCuts (3).jpg` });
}

const styles = {
  col1: '100vw',
  col2: '50vw',
  col3: '33.33vw',
  col4: '25vw',
  col5: '20vw',
};
const stylesLength = Object.keys(styles).length;
type TStyle = keyof typeof styles;

// 列数
const coln = ref(3);

const listStyle = computed(() => styles[`col${coln.value}` as TStyle]);
const gridTemplateColumns = computed(() => {
  let arr: string[] = [];
  for (var i = 1; i <= coln.value; i++) {
    arr.push(`${i}`);
  }
  arr = arr.map(v => '1fr ');
  console.log(arr.join(''));
  return arr.join('');
});

onMounted(() => {

});
function onImgClick(evt: Event, url: string) {
  showModel.value = true;
  const img: HTMLImageElement = evt.target as HTMLImageElement;
  const domRect: DOMRect = img.getBoundingClientRect();
  imgObj.url = url;
  imgObj.top = domRect.top + 'px';
  imgObj.left = domRect.left + 'px';
  imgObj.width = listStyle.value;
  imgObj.height = listStyle.value;
  setTimeout(() => {
    if (window.innerHeight > window.innerWidth) {
      imgObj.top = 'calc((100vh - 100vw) / 2)';
      imgObj.left = '0';
      imgObj.width = '100vw';
      imgObj.height = '100vw';
    }
    else {
      imgObj.top = '0';
      imgObj.left = 'calc((100vw - 100vh) / 2)';
      imgObj.width = '100vh';
      imgObj.height = '100vh';
    }
  });
}

</script>

<style scoped lang="scss">
.paperCuts {
  .func {
    text-align: center;
    padding: 10px;

    .rangeStyle {
      width: 80%;
      font-size: 18px;
    }
  }

  .list {
    display: grid;
    grid-template-columns: v-bind(gridTemplateColumns);

    .item {
      width: v-bind(listStyle);
      height: v-bind(listStyle);
      transition: all ease 200ms;
      display: flex;
      justify-content: center;
      align-items: center;

      .paperCut {
        width: v-bind(listStyle);
        height: v-bind(listStyle);
      }
    }
  }

  .imgObjStyle {
    position: absolute;
    transition: all ease 300ms;
    animation: FadeIn ease 300ms;
  }
}
</style>
