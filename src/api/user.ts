import www from '@/utils/request'
import type { I_userLogin } from './type'

enum API {
    login = '/admins/login'
}
// login
export const userLogin = (params: I_userLogin) => {
    return www(API.login, 'post', params)
}