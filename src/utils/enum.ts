export const getToken = () => {
    return sessionStorage.getItem('_TOKEN_VITE')
}
export const setToken = (token: string) => {
    return sessionStorage.setItem('_TOKEN_VITE', token)
}
export const removeToken = () => {
    return sessionStorage.removeItem('_TOKEN_VITE')
}