<template>
  <div class="relative max-w-[475px]">
    <img :src="getImagePath(image)" class="rounded-md drop-shadow-2xl" />
    <div
      class="hidden md:block absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[52.63%] h-[52.63%] border-[20px] border-yellow-medium rounded-md"
      :class="{
        '-right-1/2': position === 'right',
        '-left-1/2': position === 'left',
        'translate-x-1/2': position === 'left'
      }"
    ></div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{ image: string; position: string }>()

const getImagePath = (imgPath: string) => new URL(`../assets/img/${imgPath}`, import.meta.url).href
</script>

<style scoped></style>
