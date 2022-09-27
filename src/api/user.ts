import www from '@/utils/request'
// 用户api
interface userLogin {
    username: string,
    password: number | string
}
export const userLogin = (params: userLogin) => {
    return www('/admins/login', 'post', params)
}