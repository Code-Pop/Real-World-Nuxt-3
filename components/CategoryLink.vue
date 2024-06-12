<template>
  <div class="category">
    <a href="#">Category: {{ category.name }}</a>
  </div>
</template>

<script lang="ts" setup>
import type { Category } from "@/data/categories";

const { category } = defineProps<{ category: Category }>();
</script>

<style scoped lang="scss">
@use "@/assets/styles/colors.scss" as colors;

.category {
  display: block;
  margin: 15px 0px;

  a {
    color: colors.$green-medium;
    border: 1px solid colors.$green-dark;
    border-radius: 5px;
    font-size: 12pt;
    padding: 5px 10px;
  }

  a:hover {
    color: colors.$green-light;
    border-color: colors.$green-medium;
  }
}
</style>
