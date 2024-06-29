<template>
  <div class="relative">
    <div class="max-w-[1312px] px-4 mx-auto">
      <slot name="label" :label="article.label"></slot>
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-x-6 gap-y-10"
        :class="{ 'md:flex-row-reverse': article.position === 'right' }"
      >
        <ImageComponent :image="article.imgSrc" :position="article.position" />
        <div class="md:flex-[0_1_600px] text-center">
          <h2 class="title text-4xl mb-6">{{ article.title }}</h2>
          <p class="subtitle mb-4">{{ article.subtitle }}</p>
          <p>{{ article.text }}</p>
        </div>
      </div>
    </div>
    <slot name="image" :src="article.bgImg"></slot>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '@/types/Article'
import ImageComponent from '@/components/ImageComponent.vue'

defineProps<{ article: Article }>()
</script>

<style scoped></style>
