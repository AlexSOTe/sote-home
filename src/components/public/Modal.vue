<template>
  <div class="Modal"
       v-if="props.visible"
       @click="onModalClick">
    <div class="ctt">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  visible: boolean;
}
const props = withDefaults(defineProps<Props>(), {
});
const emit = defineEmits(['update:visible']);

function onModalClick() {
  emit('update:visible', false);
}
</script>
<style scoped lang="scss">
@keyframes BackgroundColorFadeIn {
  0% {
    background-color: rgba(0, 0, 0, 0);
  }

  100% {
    background-color: rgba(0, 0, 0, 0.7);
  }
}

.Modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  animation: BackgroundColorFadeIn ease 300ms;
  animation-fill-mode: forwards;

  .ctt {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
}
</style>
