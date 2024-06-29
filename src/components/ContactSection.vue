<template>
  <section class="py-12 sm:py-24">
    <div class="max-w-[1312px] mx-auto px-4">
      <div class="flex flex-col items-center mb-12">
        <h2 class="title text-4xl mb-6">CONTACT</h2>
        <p class="subtitle max-w-[565px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie
          est a, tempor magna.
        </p>
      </div>
      <form class="flex flex-wrap gap-y-3 sm:items-center flex-col sm:flex-row sm:-mx-[6px]">
        <div class="order-1 sm:order-none sm:flex-[1_1_33.333%] sm:px-[6px]">
          <input
            autocomplete="off"
            type="text"
            name="username"
            placeholder="Name"
            class="input w-full"
          />
        </div>
        <div class="order-2 sm:order-none sm:flex-[1_1_33.333%] sm:px-[6px]">
          <input
            autocomplete="off"
            type="email"
            name="email"
            placeholder="Email"
            class="input w-full"
          />
        </div>
        <div class="order-3 sm:order-none sm:flex-[1_1_33.333%] sm:px-[6px]">
          <input
            autocomplete="off"
            type="tel"
            name="phone"
            placeholder="Phone"
            class="input w-full"
          />
        </div>
        <div class="order-4 sm:order-none flex-[1_1_100%] sm:px-2">
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            class="input resize-none w-full"
          ></textarea>
        </div>
        <ul
          class="order-6 sm:order-none flex flex-wrap items-center gap-x-3 flex-[1_1_50%] sm:px-2"
        >
          <li class="inline-flex gap-x-1 text-xs text-gray-dark text-opacity-50 font-bold">
            <IconElement title="pin" />
            5th London Boulevard, U.K.
          </li>
          <li class="inline-flex gap-x-1 text-xs text-gray-dark text-opacity-50 font-bold">
            <IconElement title="phone" />
            <div>
              <a href="tel:+40123456789" class="whitespace-nowrap">+48 123 456 789</a>/<a
                href="tel:+40123456789"
                class="whitespace-nowrap"
                >+48 123 456 789</a
              >
            </div>
          </li>
          <li class="inline-flex gap-x-1 text-xs text-gray-dark text-opacity-50 font-bold">
            <IconElement title="mail" />
            <a href="mailto:office@mindblister.com">office@mindblister.com</a>
          </li>
        </ul>
        <div class="order-5 sm:order-none flex-[1_1_50%] sm:px-2">
          <button class="btn w-full">SEND MESSAGE</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconElement from './icons/IconElement.vue'
</script>

<style scoped></style>
