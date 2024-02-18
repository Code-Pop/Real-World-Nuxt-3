<script setup lang="ts">
import type { PostDetails } from '@/data/posts'
import { getPostDetailsUrl } from '@/data/posts'

const postSlug = useParam('post')

const { data: post } = await useFetch<PostDetails>(
  getPostDetailsUrl(postSlug)
)
</script>

<template>
  <main>
    <template v-if="post">
      <h1>
        {{ post.title }}
        <CategoryLink :category="post.category" />
      </h1>
      <RenderMarkdown :source="post.content" />
    </template>
  </main>
</template>
