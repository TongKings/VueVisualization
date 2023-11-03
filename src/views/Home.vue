
<script setup lang="ts">
// import IndexView from '@/components/Index.vue'
import Sphere from './SphereView.vue';

</script>

<template>
  <!-- <IndexView msg="123" /> -->
  <div class="home">
    <Sphere />
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  color: #fff;
  background-color: #000;

  ::-webkit-scrollbar {
    /*滚动条整体*/
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    /*滑轨*/
    background-color: rgba(255, 255, 255, .2);
  }

  ::-webkit-scrollbar-thumb {
    /*滑块*/
    background-color: rgba(255, 255, 255, .5);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 1);
  }
}
</style>