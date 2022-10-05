<script lang='ts' setup>
import Menu from "../components/Menu/index.vue";
import BreadCrumbs from '../components/BreadeCrumbs/index.vue'
import { useCollapseStore } from '@/stores/navBar'
const collapseStore = useCollapseStore()

</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <NavBar />
            </el-header>
            <el-container>
                <el-aside class="aside-max-width" :class="{'aside-min-width': collapseStore.isCollapse}">
                    <Menu />
                </el-aside>
                <el-main>
                    <!-- 面包屑 -->
                    <BreadCrumbs />
                    <router-view v-slot="{ Component, route}">
                        <Transition name="fade-transform" mode="out-in">
                            <keep-alive>
                                <component :is="Component" :key="route.path" />
                            </keep-alive>
                        </Transition>
                    </router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<style scoped lang="scss">
.el-main {
    padding: 5px;
}

.aside-max-width {
    width: 200px;
    transition: all .5s ease-out;
}

.aside-min-width {
    width: 70px;
}
</style>