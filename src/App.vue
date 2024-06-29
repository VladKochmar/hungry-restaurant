<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import MainBlock from '@/components/MainBlock.vue'
import PrivateEvents from '@/components/PrivateEvents.vue'
import ContactSection from '@/components/ContactSection.vue'
import BookForm from './components/BookForm.vue'
import SplitContent from './components/SplitContent.vue'
import SpecialtiesSection from './components/SpecialtiesSection.vue'
import MenuSection from './components/MenuSection.vue'
import { aboutUs, ourTeam } from './data/mock-data'

const getImagePath = (imgPath: string) => new URL(`./assets/img/${imgPath}`, import.meta.url).href
</script>

<template>
  <div class="flex min-h-screen flex-col overflow-clip font-basic">
    <HeaderComponent />
    <main class="flex-auto">
      <MainBlock id="home" />
      <SplitContent id="about" :article="aboutUs" class="py-12 md:py-24" />
      <SplitContent id="team" :article="ourTeam" class="pb-12 text-white md:pb-24">
        <template #label="slotProps">
          <strong class="label block py-10 text-center">{{ slotProps.label }}</strong>
        </template>
        <template #image="slotProps">
          <img v-if="slotProps.src" :src="getImagePath(slotProps.src)" class="ibg -z-10" />
        </template>
      </SplitContent>
      <BookForm id="booking" />
      <SpecialtiesSection id="specialties" />
      <MenuSection id="menu" />
      <PrivateEvents />
      <ContactSection id="contact" />
    </main>
    <footer class="bg-black px-4 py-11 text-opacity-90">
      <p class="text-center text-xs leading-none text-white text-opacity-50">
        © Copyright <strong>Company</strong> 2024
      </p>
    </footer>
  </div>
</template>

<style scoped></style>
