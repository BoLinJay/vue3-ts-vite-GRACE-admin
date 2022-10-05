<script lang='ts' setup>
import { computed, onUpdated, ref } from 'vue';
const props = defineProps({
    // 表单验证是否出错
    errors: {
        type: Object,
        default: () => { }
    },
    // loading
    loading: {
        type: Boolean,
        default: true
    }
})
// 抖动
const isErrors = ref(0)
onUpdated(() => {
    isErrors.value = Object.keys(props.errors).length //对象判空
})
const classObject = computed(() => ({
    loading: !isErrors.value && props.loading,
    shake: isErrors.value,
    animated: isErrors.value
}))
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