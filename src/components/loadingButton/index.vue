<script lang='ts' setup>
import router from '@/router';
import { computed, onMounted, onUpdated, ref } from 'vue';
const props = defineProps({
    // 登录时间
    wait: {
        type: Number,
        default: 1500
    },
    // 跳转路径
    path: {
        type: String,
        default: '/'
    },
    // 表单验证是否出错
    errors: {
        type: Object,
        default: () => { }
    }
})
const loading = ref(false)
const Open = () => {
    loading.value = true
}
const Close = () => {
    let timer
    clearTimeout(timer)
    timer = setTimeout(() => {
        loading.value = false
        // router.push(props.path)
    }, props.wait);
}
// 抖动
const isErrors = ref(0)
onUpdated(() => {
    isErrors.value = Object.keys(props.errors).length //对象判空
    console.log(props.errors);
})
const classObject = computed(() => ({
    loading: !isErrors.value && loading.value,
    shake: isErrors.value,
    animated: isErrors.value
}))
defineExpose({
    Open,
    Close
})
</script>


<template>
    <button type="button" class="btn" :class="classObject">
        <slot></slot>
    </button>
</template>


<style scoped lang="scss">
.btn {
    width: 150px;
    background-color: #5995fd;
    border: none;
    outline: none;
    height: 49px;
    border-radius: 49px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    cursor: pointer;

    &:hover {
        background-color: #4d84e2;
    }
}
</style>