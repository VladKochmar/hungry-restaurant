<template>
  <header
    ref="header"
    class="fixed left-0 top-0 z-20 w-full transition-transform duration-300"
    :class="{
      '-translate-y-[200%]': isHeaderHidden,
      'bg-[#252525]/70': !isTransparent
    }"
  >
    <div class="mx-auto flex max-w-[1312px] justify-end px-4 py-6 sm:block sm:py-0">
      <nav
        class="fixed left-0 top-0 h-screen w-full -translate-y-full justify-between gap-x-9 overflow-auto bg-[#252525]/70 px-5 py-20 transition-transform duration-300 sm:static sm:flex sm:h-auto sm:w-auto sm:-translate-y-0 sm:overflow-visible sm:bg-transparent sm:px-0 sm:py-0"
        :class="{ 'translate-y-0': isMenuOpen }"
      >
        <ul
          class="flex flex-col gap-3 sm:h-24 sm:flex-auto sm:flex-row sm:items-center sm:justify-evenly sm:border-b sm:border-b-white/20"
        >
          <li
            class="mb-4 font-bold uppercase leading-normal text-white transition hover:text-[#e8c300] sm:mb-0 sm:text-xs"
          >
            <button @click="handleMobileScroll('home')">HOME</button>
          </li>
          <li
            class="mb-4 font-bold uppercase leading-normal text-white transition hover:text-[#e8c300] sm:mb-0 sm:text-xs"
          >
            <button @click="handleMobileScroll('about')">ABOUT</button>
          </li>
          <li
            class="mb-4 font-bold uppercase leading-normal text-white transition hover:text-[#e8c300] sm:mb-0 sm:text-xs"
          >
            <button @click="handleMobileScroll('team')">TEAM</button>
          </li>
          <li
            class="mb-4 font-bold uppercase leading-normal text-white transition hover:text-[#e8c300] sm:mb-0 sm:text-xs"
          >
            <button @click="handleMobileScroll('booking')">BOOKING</button>
          </li>
        </ul>
        <div class="relative hidden w-full max-w-[100px] sm:block lg:max-w-[150px]">
          <img src="@/assets/img/logo.svg" alt="Logo" class="absolute left-0 top-6 max-w-full" />
        </div>
        <ul
          class="flex flex-col gap-3 sm:h-24 sm:flex-auto sm:flex-row sm:items-center sm:justify-evenly sm:border-b sm:border-b-white/20"
        >
          <li
            class="mb-4 font-bold uppercase leading-normal text-white transition hover:text-[#e8c300] sm:mb-0 sm:text-xs"
          >
            <button @click="handleMobileScroll('menu')">MENU</button>
          </li>
          <li
            class="mb-4 font-bold uppercase leading-normal text-white transition hover:text-[#e8c300] sm:mb-0 sm:text-xs"
          >
            <button @click="handleMobileScroll('specialties')">GALERIE</button>
          </li>
          <li
            class="mb-4 font-bold uppercase leading-normal text-white transition hover:text-[#e8c300] sm:mb-0 sm:text-xs"
          >
            <button @click="handleMobileScroll('events')">EVENTS</button>
          </li>
          <li
            class="mb-4 font-bold uppercase leading-normal text-white transition hover:text-[#e8c300] sm:mb-0 sm:text-xs"
          >
            <button @click="handleMobileScroll('contact')">CONTACT</button>
          </li>
        </ul>
      </nav>
      <button @click="handleMenuBurger" class="relative z-40 h-4 w-7 self-center md:hidden">
        <span
          class="absolute left-0 top-0 h-px w-full bg-white transition-all duration-300"
          :class="{ 'top-1/2': isMenuOpen, 'rotate-45': isMenuOpen }"
        ></span>
        <span
          class="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white transition-all duration-300"
          :class="{ 'scale-0': isMenuOpen }"
        ></span>
        <span
          class="absolute bottom-0 left-0 h-px w-full bg-white transition-all duration-300"
          :class="{ 'bottom-1/2': isMenuOpen, '-rotate-45': isMenuOpen }"
        ></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { onScroll } from '@/helpers/scroll'

const header = ref<HTMLHeadElement | null>(null)

const lastScrollTop = ref<number>(0)
const isHeaderHidden = ref<boolean>(false)
const isTransparent = computed(() => lastScrollTop.value === 0)

document.addEventListener('scroll', (): void => {
  const scrollTop: number = document.documentElement.scrollTop

  if (header.value) {
    if (scrollTop > lastScrollTop.value) isHeaderHidden.value = true
    else isHeaderHidden.value = false
  }

  lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop
})

// Menu Burger
const isMenuOpen = ref<boolean>(false)

function handleMenuBurger(): void {
  isMenuOpen.value = !isMenuOpen.value
  document.body.classList.toggle('lock')
}

// Mobile Scroll
function handleMobileScroll(destination: string): void {
  if (isMenuOpen.value) handleMenuBurger()
  onScroll(destination)
}
</script>

<style scoped></style>
