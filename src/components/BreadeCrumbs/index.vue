<script lang='ts' setup>
import { update } from 'lodash';
import { useRoute, type RouteLocationMatched } from 'vue-router';
import Bread from '../Plugins/Bread.vue'
import BreadItem from '../Plugins/BreadItem.vue'
const route = useRoute()
const breads = ref([] as RouteLocationMatched[])
watch(() => route.matched, (n) => {
    breads.value = breads.value.concat(n[1])
})
</script>


<template>
    <Bread>
        <BreadItem>首页</BreadItem>
        <BreadItem v-for="bread in breads" :key="bread.path" :to="bread.path">{{bread.name}}</BreadItem>
    </Bread>
</template>


<style scoped lang="scss">

</style>