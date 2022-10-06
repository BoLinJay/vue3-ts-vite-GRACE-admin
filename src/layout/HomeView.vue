<script lang="ts" setup>
import Menu from '../components/Menu/index.vue';
import BreadCrumbs from '../components/BreadeCrumbs/index.vue';
import { useCollapseStore } from '@/stores/navBar';
const collapseStore = useCollapseStore();
const asideWidthClass = computed(() => {
  return collapseStore.isCollapse ? 'aside-min-width' : 'aside-max-width';
});
</script>

<template>
  <el-header> <NavBar /></el-header>
  <el-container>
    <el-aside :class="asideWidthClass" class="aside-animation"> <Menu /> </el-aside>
    <el-main>
      <!-- 面包屑 -->
      <BreadCrumbs />
      <router-view v-slot="{ Component, route }">
        <Transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </Transition>
      </router-view>
    </el-main>
  </el-container>
</template>

<style scoped lang="scss">
.el-main {
  padding: 5px;
}
.el-aside {
  border-right: 1px solid #dcdfe6;
  height: 90vh;
}
.el-header {
  padding: 0;
}
.aside-animation {
  transition: all 0.8s ease-out;
}
.aside-max-width {
  width: 210px;
}

.aside-min-width {
  width: 70px;
}
</style>
