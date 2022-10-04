<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import { useCollapseStore } from '@/stores/navBar'
import { getMenusAll } from '@/api/menu';
const collapseStore = useCollapseStore()
const menusAll = ref([] as any[])
// 获取所有菜单
onMounted(async () => {
    const MenusAll = await getMenusAll('tree')
    console.log(MenusAll.data[0]);
    menusAll.value = MenusAll.data[0].children
})
</script>

<template>
    <el-menu router class="el-menu-vertical-demo" :collapse="collapseStore.isCollapse">
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
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: auto;
    min-height: 500px;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
