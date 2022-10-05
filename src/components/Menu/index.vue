<script lang="ts" setup>
import { getMenusAll } from '@/api/menu';
import {
    Menu as IconMenu,
} from '@element-plus/icons-vue'
import { useCollapseStore } from '@/stores/navBar'
import { useAddRoutes } from '@/stores/routes'
const collapseStore = useCollapseStore()
const menusAll = ref([] as any[])
const windowHeight = computed(() => {
    return window.innerHeight + 'px'
})
const routesStore = useAddRoutes()
// 获取所有菜单
onMounted(async () => {
    const MenusAll = await getMenusAll('tree')
    console.log(MenusAll);
    menusAll.value = MenusAll.data[0].children || []
    routesStore.routes = MenusAll.data[0] || []
})
</script>

<template>
    <el-scrollbar :max-height="windowHeight" v-if="menusAll.length">
        <el-menu router class="el-menu-vertical-demo" :collapse="collapseStore.isCollapse" :default-openeds="['0']">
            <el-sub-menu v-for="menu,i in menusAll" :key="menu.id" :index="i + ''">
                <template #title>
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <span>{{menu.name}}</span>
                </template>
                <el-menu-item v-for="subMenu,i in menu.children" :key="subMenu.id" :index="subMenu.name + '-' + i"
                    :route="subMenu.path">
                    {{subMenu.name}}
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-scrollbar>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100vh;
}
</style>
