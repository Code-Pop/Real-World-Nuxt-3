<script setup lang="ts">
import type { Category } from '@/data/categories'

const { category } = defineProps<{ category: Category }>()
</script>

<template>
  <div class="category">
    <NuxtLink :to="`/categories/${category.slug}`">Category: {{ category.name }}</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/colors.scss';

.category {
  display: block;
  margin: 15px 0px;
}

.category a {
  color: colors.$green-medium;
  border: 1px solid colors.$green-dark;
  border-radius: 5px;
  font-size: 12pt;
  padding: 5px 10px;
}

.category a:hover {
  color: colors.$green-light;
  border-color: colors.$green-medium;
}
</style>
