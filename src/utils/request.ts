import { getToken } from './enum';
import type { AxiosInstance } from 'axios'
import axios from 'axios'
import router from '@/router';

/**
 * 创建axios实例
 */
const BASE_URL = 'http://127.0.0.1:3003'
const instance: AxiosInstance = axios.create({
    timeout: 5000, // 超时时间
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

/**
 * 添加请求拦截
 */

instance.interceptors.request.use(
    (config: any) => {
        if (getToken()) {
            config.headers.Authorization = `Bearer ${getToken()}`
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

/**
 * 响应拦截
 */

instance.interceptors.response.use(
    (response: any) => {

        return response.data
    },
    error => {
        if (error.response && error.response.status === 401) {
            router.push('/door')
        }
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '错误请求'
                    break
                case 401:
                    error.message = '未授权，请重新登录'
                    break
                case 403:
                    error.message = '拒绝访问'
                    break
                case 404:
                    error.message = '请求错误,未找到该资源'
                    break
                case 405:
                    error.message = '请求方法未允许'
                    break
                case 408:
                    error.message = '请求超时'
                    break
                case 500:
                    error.message = '服务器端出错'
                    break
                case 501:
                    error.message = '网络未实现'
                    break
                case 502:
                    error.message = '网络错误'
                    break
                case 503:
                    error.message = '服务不可用'
                    break
                case 504:
                    error.message = '网络超时'
                    break
                case 505:
                    error.message = 'http版本不支持该请求'
                    break
                default:
                    error.message = `连接错误${error.response.status}`
            }
        } else {
            error.message = '连接到服务器失败'
        }
        return Promise.reject(error.message)
    }
)
// 请求工具函数
export default (url: string, method: string, submitData?: any) => {
    // 负责发请求：请求地址，请求方式，提交的数据
    return instance({
        url,
        method,
        // 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
        // 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
        // [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
        // method参数：get,Get,GET  转换成小写再来判断
        // 在对象，['params']:submitData ===== params:submitData 这样理解
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}