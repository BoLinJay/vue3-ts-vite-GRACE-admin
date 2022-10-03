import www from '@/utils/request';
type I_getMenusAll = 'flat' | 'tree'
// 获取所有菜单
export const getMenusAll = (type: I_getMenusAll): any => {
    return www(`/menu/all?type=${type}`, 'get')
}