<template>
  <div class="inline-flex gap-x-4">
    <div>
      <h3 class="text-sm sm:text-lg text-[#333] uppercase font-title">{{ option.title }}</h3>
      <p class="text-xs text-[#333]/50">{{ option.description }}</p>
    </div>
    <p class="text-sm sm:text-lg text-[#333] uppercase font-title">{{ option.price }}</p>
  </div>
</template>

<script setup lang="ts">
import type { MenuOption } from '@/types/MenuOption'
defineProps<{ option: MenuOption }>()
</script>

<style scoped></style>
