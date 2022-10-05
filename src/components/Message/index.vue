<script lang='ts' setup>
defineProps({
    type: {
        type: String,
        default: 'success'
    },
    width: {
        type: Number,
        default: 300
    },
    text: {
        type: String,
        default: ''
    }
})
// 样式
const handleClass: any = {
    success: {
        d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        type: 'success'
    },
    warning: {
        d: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
        type: 'warning'
    },
    error: {
        d: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
        type: 'error'
    },
    info: {
        d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        type: 'info'
    }
}
// animatio
const visible = ref(false)
onMounted(() => {
    visible.value = true
})
</script>


<template>
    <transition name="down" v-show="visible">
        <div class="alert shadow-lg fixed" :class="['alert-'+ handleClass[type].type]" :style="{width: width + 'px'}">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="handleClass[type].d" />
                </svg>
                <span>{{text}}</span>
            </div>
        </div>
    </transition>
</template>


<style scoped lang="scss">
.fixed {
    position: fixed;
    bottom: 25px;
    right: 25px;
    z-index: 999;
}

.down {
    &-enter {
        &-from {
            transform: translate3d(0, 75px, 0);
            opacity: 0;
        }

        &-active {
            transition: all 0.5s;
        }

        &-to {
            transform: none;
            opacity: 1;
        }
    }
}
</style>