<template>
  <div class="card" :class="{ hover: isHover }">
    <h2 class="title">
      {{ post.title }}
    </h2>
    <CategoryLink :category="post.category" />
    <RenderMarkdown :source="post.intro" />
    <a
      class="more"
      href="#"
      @mouseenter="onMouseHover(true)"
      @mouseleave="onMouseHover(false)"
      >More ...</a
    >
  </div>
</template>

<script lang="ts" setup>
import type { Post } from "@/data/posts";

const { post } = defineProps<{ post: Post }>();

const isHover = ref(false);
const onMouseHover = (hover: boolean) => {
  isHover.value = hover;
};
</script>

<style scoped lang="scss">
@use "@/assets/styles/colors.scss" as colors;

.card {
  padding: 15px 15px 35px;
  border: 1px solid colors.$green-dark;
  border-radius: 5px;
  margin-bottom: 25px;
  font-size: 12pt;
  position: relative;

  .title {
    font-size: 20pt;
  }

  .content {
    line-height: 18pt;
  }

  .more {
    color: colors.$green-medium;
    font-size: 12pt;
    padding: 5px 10px;
    position: absolute;
    right: 0px;
    bottom: 0px;
  }

  .hover {
    border-color: colors.$green-medium;

    .title,
    .more {
      color: colors.$green-light;
    }
  }
}
</style>
