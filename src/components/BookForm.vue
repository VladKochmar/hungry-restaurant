<template>
  <section class="max-w-[1312px] mx-auto px-4 pt-12 md:pt-24">
    <div class="flex flex-col md:flex-row justify-evenly md:items-center gap-x-8 gap-y-10">
      <div class="md:flex-[0_1_565px]">
        <h2 class="title text-4xl mb-5">book a table</h2>
        <form class="flex flex-col sm:flex-row flex-wrap gap-y-[10px] md:-mx-[5px]">
          <div class="flex-[1_1_50%] md:px-[5px]">
            <input type="text" name="username" placeholder="Name" class="input w-full" />
          </div>
          <div class="flex-[1_1_50%] md:px-[5px]">
            <input type="email" name="email" placeholder="Email" class="input w-full" />
          </div>
          <div class="flex-[1_1_50%] md:px-[5px]">
            <input type="tel" name="phone" placeholder="Phone" class="input w-full" />
          </div>
          <div class="flex-[1_1_50%] md:px-[5px]">
            <CustomSelect :options="people" placeholder="People" />
          </div>
          <div class="flex-[1_1_50%] md:px-[5px]">
            <input type="text" name="date" placeholder="Date (mm/dd)" class="input w-full" />
          </div>
          <div class="flex-[1_1_50%] md:px-[5px]">
            <CustomSelect :options="workingHours" placeholder="Time" />
          </div>
          <div class="flex-auto md:px-[5px]"><button class="btn w-full">BOOK NOW</button></div>
        </form>
      </div>
      <ImageComponent image="book-table/img.jpg" position="right" />
    </div>
    <p class="text-center text-xs text-gray-dark text-opacity-50 py-10">
      For private events please call:
      <span class="font-bold"
        ><a href="+40123456789">+40 123 456 789</a>/<a href="tel:+40111111111"
          >+40 111 111 111</a
        ></span
      >
      or use the contact form.
    </p>
  </section>
</template>

<script setup lang="ts">
import ImageComponent from './ImageComponent.vue'
import CustomSelect from './CustomSelect.vue'

const people = ['1', '2', '3', '4', '5', '6', '7', '8']
const workingHours = [
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00'
]
</script>

<style scoped></style>
