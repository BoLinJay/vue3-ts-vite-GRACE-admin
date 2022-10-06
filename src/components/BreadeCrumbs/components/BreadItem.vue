<script lang="ts" setup>
defineProps({
  to: {
    type: String,
    default: '/',
  },
});
const deleteBread = () => {
  console.log(1);
};
</script>

<template>
  <li>
    <RouterLink v-if="to" :to="to">
      <slot />
    </RouterLink>
    <span v-else>
      <slot />
    </span>
  </li>
</template>

<style scoped lang="scss"></style>
