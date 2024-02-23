<template>
  <div class="layout">
    <nav class="nav">
      <NuxtLink
        class="link"
        :class="{current: $route.path === '/'}"
        to="/"
      >
        Home
      </NuxtLink>
      <NuxtLink
        class="link"
        :class="{current: $route.path === '/categories'}"
        to="/categories"
      >
        Categories
      </NuxtLink>
    </nav>
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/colors';

.layout {
  width: 620px;
  margin: 0px auto 50px;
}

.nav {
  margin-top: 10px;
  margin-bottom: 30px;
  position: relative;
}

.nav .link {
  color: colors.$green-medium;
  display: inline-block;
  font-size: 14pt;
  margin-right:20px;
}

.nav .link:hover {
  color: colors.$green-light;
}

.nav .link.current {
  color: colors.$green-light;
  text-decoration: underline;
  pointer-events: none;
}
</style>
