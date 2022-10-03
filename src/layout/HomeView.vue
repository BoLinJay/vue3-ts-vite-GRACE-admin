<script lang='ts' setup>
import Menu from "../components/Menu/index.vue";
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
                    <RouterView />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<style scoped lang="scss">

</style>