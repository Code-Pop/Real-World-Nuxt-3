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
      >
        <h2>
          {{ post.title }}
        </h2>
        <div>
          <a href="#">Category: {{ post.category.name }}</a>
        </div>
        <RenderMarkdown :source="post.intro" />
      </div>
    </div>
  </main>
</template>
