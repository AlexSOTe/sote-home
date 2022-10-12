<template>
  <div class="beian">
    <a href="https://beian.miit.gov.cn/">京ICP备2022007190号-1</a>
  </div>
</template>
<style scoped lang="scss">
  .beian {
    padding: 15px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -2;
    display: flex;
    justify-content: center;
    white-space: nowrap;
    font-size: 12px;

    a {
      padding: 10px 15px;
      text-align: center;
      color: #aaa;
      background-color: rgba(255,255,255,0.4);
      border-radius: 20px;
      color: gray;
    }
  }
</style>
