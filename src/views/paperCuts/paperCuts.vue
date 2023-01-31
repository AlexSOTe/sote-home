
<template>
  <div class="paperCuts">
    <div class="func">
      <van-slider v-model="coln"
                  :min="1"
                  :max="stylesLength"
                  active-color="#62db68"
                  bar-height="8px">
        <template #button>
          <div class="sliderValueStyle">{{coln}}</div>
        </template>
      </van-slider>
    </div>
    <div class="list">
      <div v-for="(x,i) in list"
           :key="x.id"
           class="item"
           :style="{'background-color':`rgb(0,${((list.length-i)+10)*8},0)`}">开发中</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref, computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router';


  const router = useRouter();
  const route = useRoute();
  const sliderValue = [1, 5];

  const list = ref<any[]>([]);
  for (var i = 0; i < 21; i++) {
    list.value.push({ id: `${i}`, text: `${i}` });
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

  const coln = ref(1);
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
  function onStyleClick() {
    if (coln.value >= 5) {
      coln.value = 1;
    } else {
      coln.value++;
    }
  }
</script>

<style scoped lang="scss">
  .paperCuts {
    .func {
      position: sticky;
      top: 46px;
      left: 0;
      height: 45px;
      background-color: white;
      padding: 0 15px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgb(235, 237, 240);
      overflow: hidden;

      .sliderValueStyle {
        width: 20px;
        padding: 2px 5px;
        background-color: var(--xhg-theme-color);
        border: 1px solid green;
        text-align: center;
        border-radius: 10px;
      }

      .van-icon {
        padding: 10px;
        font-size: 22px;
        color: var(--xhg-theme-color);
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
      }
    }
  }
</style>
