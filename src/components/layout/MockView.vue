<script setup lang="ts">
import axios from 'axios';
import { reactive, ref } from 'vue'
// import req from '@/utils/request';
let result = reactive({});
//必须使用axios或者xhr，fetch不支持在Mockjs中直接使用，或者可以更换fetch-Mock包

</script>

<template>
  <h1>Mock</h1>
  <div>{{ result }}</div>
</template>

<style scoped></style>
