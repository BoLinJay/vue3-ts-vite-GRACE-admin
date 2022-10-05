
// 封装一个消息提示函数
import MessageUI from './index.vue'
import { createVNode, render } from 'vue'

// 提前准备好dom元素(动态创建一个然后添加到页面中)
const div = document.createElement('div')
document.body.appendChild(div)
let timer: any = null

// options = {type: 'success', info: '登录成功'}
export default ({ type, text, width }: any) => {
    // 在HTML页面中渲染一个组件xtx-message即可
    // 1、创建一个虚拟节点（基于组件）
    // 参数一：可以传入一个组件对象
    // 参数二：提供给组件的属性
    const vnode = createVNode(MessageUI, { type, text, width })
    // 2、把虚拟节点渲染到页面中
    // 参数一：表示被渲染的虚拟节点
    // 参数二：表示渲染的目标位置（DOM元素）
    render(vnode, div)
    // 3、要求3秒后，销毁提示信息
    // 保证定时任务只能有一个存在
    clearTimeout(timer)
    timer = setTimeout(() => {
        // 销毁提示信息
        render(null, div)
    }, 3000)
}
