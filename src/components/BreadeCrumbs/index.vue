<script lang="ts" setup>
import { useRoute, type RouteLocationMatched } from 'vue-router';
import Bread from './components/Bread.vue';
import BreadItem from './components/BreadItem.vue';
const route = useRoute();
const breads = ref([] as RouteLocationMatched[]);
// 判断是否已存在该面包屑
const handleBeingBread = (bread: RouteLocationMatched[]) => {
  let lth = bread.length - 1;
  let beingBread = breads.value.some((item) => {
    return item.name === bread[lth].name;
  });
  return beingBread;
};
watch(
  () => route.matched,
  (nV) => {
    console.log(nV);
    if (handleBeingBread(nV)) return;
    breads.value = breads.value.concat(nV[1]);
  },
);
</script>

<template>
  <Bread>
    <BreadItem>首页</BreadItem>
    <transition-group name="breadcrumb">
      <BreadItem v-for="bread in breads" :key="bread.path" :to="bread.path">{{ bread.meta.title }}</BreadItem>
    </transition-group>
  </Bread>
</template>

<style scoped lang="scss"></style>
