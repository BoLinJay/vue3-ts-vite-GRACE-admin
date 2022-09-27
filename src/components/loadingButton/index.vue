<script lang='ts' setup>
import router from '@/router';
import { ref } from 'vue';
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
defineExpose({
    Open,
    Close
})
</script>


<template>
    <button type="button" class="btn" :class="{'loading': loading}">
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