<template>
  <div v-if="isActive">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, computed, onMounted } from 'vue'
import type { Ref } from 'vue'
import type { Tab } from '@/types/Tab'

const props = defineProps<Tab>()

const registerTab = inject<(tab: Tab) => void>('registerTab')
const activeTab = inject<Ref<string>>('activeTab')

onMounted(() => {
  registerTab && registerTab({ name: props.name, label: props.label })
})

const isActive = computed(() => activeTab?.value === props.name)
</script>

<style scoped></style>
