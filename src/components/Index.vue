<script setup lang="ts">
import { ref } from 'vue'
import Mock from 'mockjs';
import req from '@/utils/request';
import { defineAsyncComponent } from 'vue';
import FristPage from '@/components/layout/FristPage.vue'
const MockPage  = defineAsyncComponent(()=>import("@/components/layout/MockView.vue"))
defineProps<{ msg: string }>()
</script>

<template>
  <h1>{{ msg }}</h1>
    <FristPage />
    <Suspense>
      <MockPage />
    </Suspense>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
