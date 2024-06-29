<template>
  <div>
    <ul class="mb-12 flex flex-wrap justify-center">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        class="last:border-r-0 sm:border-r-2 sm:border-r-[#333]/20"
      >
        <button
          @click="selectTab(tab.name)"
          class="inline-flex w-[120px] justify-center py-4 text-xs font-bold uppercase transition transition-colors hover:bg-[#333]/20"
          :class="{ 'text-[#e8c300]': tab.name === activeTab }"
        >
          {{ tab.label }}
        </button>
      </li>
    </ul>
    <div><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import type { Tab } from '@/types/Tab'

const tabs = ref<Tab[]>([])
const activeTab = ref<string>('')

const registerTab = (tab: Tab) => {
  if (tabs.value.length === 0) {
    activeTab.value = tab.name
  }
  tabs.value.push(tab)
}

const selectTab = (name: string) => {
  activeTab.value = name
}

provide('registerTab', registerTab)
provide('activeTab', activeTab)

onMounted(() => {
  if (tabs.value.length > 0) {
    activeTab.value = tabs.value[0].name
  }
})
</script>

<style scoped></style>
