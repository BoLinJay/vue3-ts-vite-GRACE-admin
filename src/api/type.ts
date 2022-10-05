// login
export interface I_userLogin {
    username: string,
    password: number | string
}
// 菜单列表
export type I_getMenusAll = 'flat' | 'tree'