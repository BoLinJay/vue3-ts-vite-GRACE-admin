<script lang='ts' setup>
import { ref } from 'vue';
const props = defineProps({
    wait: {
        type: Number,
        default: 1000
    },
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