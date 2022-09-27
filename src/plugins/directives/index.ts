// 按钮loading自定义指令
export const buttonLoading = (app: any) => {
    app.directive('btnLoading', (el: HTMLElement, binding: any) => {
        binding.value ? el.classList.add('loading') : timeOutLoading(el, binding)
    })
}
// loading延迟
const timeOutLoading = (el: HTMLElement, binding: any) => {
    let timer
    clearTimeout(timer)
    timer = setTimeout(() => {
        el.classList.remove('loading')
    }, 2000);
}