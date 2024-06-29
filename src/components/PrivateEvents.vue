<template>
  <div class="relative" id="events">
    <div class="mx-auto max-w-[1312px] px-4">
      <strong class="label block py-10 text-center">PRIVATE EVENTS</strong>
      <div class="flex flex-col items-center justify-between gap-x-6 gap-y-10 md:flex-row">
        <ImageComponent image="private-events/image1.jpg" position="left">
          <div
            class="vertical-lr absolute bottom-0 right-0 top-auto w-full rounded-bl-md rounded-br-md bg-black px-7 py-6 font-title uppercase text-white sm:text-2xl md:top-0 md:h-full md:w-auto md:rounded-tr-md"
          >
            weddings
          </div>
        </ImageComponent>
        <ImageComponent image="private-events/image2.jpg" position="right">
          <div
            class="vertical-lr absolute bottom-0 left-0 top-auto w-full rounded-bl-md rounded-br-md bg-black px-7 py-6 font-title uppercase text-white sm:text-2xl md:top-0 md:h-full md:w-auto md:rotate-180 md:rounded-tr-md"
          >
            corporate pzrties
          </div>
        </ImageComponent>
      </div>
      <p class="py-10 text-center text-xs text-white text-opacity-50">
        For private events please call:
        <span class="font-bold"
          ><a href="+40123456789">+40 123 456 789</a>/<a href="tel:+40111111111"
            >+40 111 111 111</a
          ></span
        >
        or use the contact form.
      </p>
    </div>
    <img src="@/assets/img/private-events/img-bg.jpg" class="ibg -z-10" />
  </div>
  <PhotosList />
</template>

<script setup lang="ts">
import PhotosList from '@/components/PhotosList.vue'
import ImageComponent from './ImageComponent.vue'
</script>

<style scoped></style>
