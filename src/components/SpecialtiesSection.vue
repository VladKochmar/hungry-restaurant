<template>
  <div class="relative pb-12 text-white md:pb-24">
    <strong class="label block px-4 py-10 text-center">specialties</strong>
    <swiper-container>
      <swiper-slide v-for="article in specialties" :key="article.id" class="slider">
        <SplitContent :article="article" class="overflow-hidden" />
      </swiper-slide>
    </swiper-container>
    <img src="@/assets/img/specialties/img-bg.jpg" class="ibg -z-10" />
  </div>
</template>

<script setup lang="ts">
import { specialties } from '@/data/mock-data'
import SplitContent from './SplitContent.vue'

import { register } from 'swiper/element/bundle'
register()
</script>

<style scoped></style>
