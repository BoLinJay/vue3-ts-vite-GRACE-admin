<script lang='ts' setup>
import Menu from "../components/Menu/index.vue";
import BreadCrumbs from '../components/BreadeCrumbs/index.vue'
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <NavBar />
            </el-header>
            <el-container>
                <el-aside width="200px">
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


<style scoped>

</style>