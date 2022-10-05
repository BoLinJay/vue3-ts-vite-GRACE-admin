import www from '@/utils/request';
import type { I_getMenusAll } from './type'

enum API {
    menuList = '/menu/all'
}

// 获取所有菜单
export const getMenusAll = (type: I_getMenusAll): any => {
    return www(API.menuList + `?type=${type}`, 'get')
}