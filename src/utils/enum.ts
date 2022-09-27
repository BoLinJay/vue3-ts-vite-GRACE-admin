export const getToken = () => {
    return sessionStorage.getItem('_TOKEN')
}
export const setToken = (token: string) => {
    return sessionStorage.setItem('_TOKEN', token)
}
export const removeToken = () => {
    return sessionStorage.removeItem('_TOKEN')
}