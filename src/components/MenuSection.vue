<template>
  <div class="py-12 sm:py-24">
    <div class="mx-auto max-w-[1312px] px-4">
      <div class="mb-12 flex flex-col items-center">
        <h2 class="title mb-6 text-4xl">DELICIOUS MENU</h2>
        <p class="subtitle max-w-[565px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie
          est a, tempor magna.
        </p>
      </div>
      <TabContainer>
        <TabItem v-for="tab in tabs" :key="tab.id" :name="tab.name" :label="tab.label">
          <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <template v-for="index in 21" :key="index">
              <MenuOption :option="tab.content"
            /></template>
          </div>
        </TabItem>
      </TabContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuOption from './MenuOption.vue'
import TabContainer from './TabContainer.vue'
import TabItem from './TabItem.vue'

import { tabs } from '@/data/mock-data'
</script>

<style scoped></style>
