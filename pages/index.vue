<script setup lang="ts">
import type { Post } from '@/data/posts'
import { getPostsUrl } from '@/data/posts'

const { data: posts } = await useFetch<Post[]>(getPostsUrl())
</script>

<template>
  <main>
    <h1>Nuxt.js Examples</h1>
    <div>
      <div
        v-for="post in posts"
        :key="post.id"
        class="card"
      >
        <h2 class="title">
          {{ post.title }}
        </h2>
        <div class="category">
          <a href="#">Category: {{ post.category.name }}</a>
        </div>
        <RenderMarkdown :source="post.intro" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/styles/colors.scss";

.card {
  padding: 15px;
  border: 1px solid colors.$green-dark;
  border-radius: 5px;
  margin-bottom: 25px;
  font-size: 12pt;
}

.card .title {
  font-size: 20pt;
}

.card .category {
  margin: 5px 0px;
}
</style>
