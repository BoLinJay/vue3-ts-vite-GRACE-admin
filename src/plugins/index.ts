import { buttonLoading } from './directives'
export default {
    install(app: any) {
        // 按钮loading动画
        buttonLoading(app)
    }
}