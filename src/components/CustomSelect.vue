<template>
  <div class="relative">
    <div
      class="input flex justify-between items-center border-1 cursor-pointer border-gray-medium w-full p-6"
      @click="toggleDropdown"
    >
      <span class="select-none text-gray-dark" :class="{ 'text-opacity-50': !selected }">
        {{ selected ? selected : placeholder }}
      </span>
      <div class="transition-transform duration-300" :class="{ 'rotate-180': isOpen }">
        <IconElement title="arrow-bottom" />
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute top-full left-0 z-50 border-1 border-gray-medium w-full bg-gray-medium opacity-100 translate-y-0 transition-all duration-300 rounded-b-md"
      >
        <ul data-simplebar class="max-h-48 overflow-auto">
          <li
            v-for="option in options"
            :key="option"
            class="select-none text-sm p-3 cursor-pointer hover:bg-gray-medium transition duration-300"
            :class="{ 'bg-gray-light': option === selected }"
            @click="selectOption(option)"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import 'simplebar' // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css'
import IconElement from './icons/IconElement.vue'

defineProps<{ options: string[]; placeholder: string }>()

const selected = defineModel<string>()
const isOpen = ref<boolean>(false)

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function selectOption(option: string) {
  selected.value = option
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
