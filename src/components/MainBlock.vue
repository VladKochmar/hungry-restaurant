<template>
  <div class="relative h-screen">
    <div
      class="mx-auto flex h-full max-w-[1312px] flex-col items-center justify-center gap-x-6 gap-y-8 px-4 md:flex-row"
    >
      <p class="vertical-lr text-center text-xs font-bold text-white md:-rotate-180">
        Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM
      </p>
      <div class="flex flex-col items-center md:flex-auto">
        <strong class="label text-white">RESTAURANT</strong>
        <h1 class="title mb-9 text-5xl text-white md:text-8xl">hungry people</h1>
        <div class="mb-20 flex w-full justify-center gap-x-10">
          <button class="btn w-full max-w-[200px]">BOOK TABLE</button>
          <button
            class="inline-flex w-full max-w-[200px] items-center justify-center rounded border border-white/50 p-5 text-center text-xs font-bold uppercase leading-relaxed text-white transition duration-300 hover:bg-white hover:text-black"
          >
            EXPLORE
          </button>
        </div>
        <button
          class="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20"
          @click="onScroll('about')"
        >
          <div
            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all hover:h-full hover:w-full"
          >
            <span class="animate-bounce pt-2"><IconElement title="arrow" /></span>
          </div>
        </button>
        <img src="@/assets/img/main-block/main-bg.jpg" class="ibg -z-10" />
      </div>
      <ul class="flex gap-5 md:flex-col">
        <li>
          <a
            href="#"
            class="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:bg-white hover:bg-opacity-20"
            ><IconElement title="facebook"
          /></a>
        </li>
        <li>
          <a
            href="#"
            class="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:bg-white hover:bg-opacity-20"
            ><IconElement title="twitter"
          /></a>
        </li>
        <li>
          <a
            href="#"
            class="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:bg-white hover:bg-opacity-20"
            ><IconElement title="instagram"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onScroll } from '@/helpers/scroll'

import IconElement from './icons/IconElement.vue'
</script>

<style scoped></style>
