import www from '@/utils/request'
import _ from 'lodash'
// 用户api
interface I_userLogin {
    username: string,
    password: number | string
}
export const userLogin = (params: I_userLogin) => {
    return www('/admins/login', 'post', params)
}