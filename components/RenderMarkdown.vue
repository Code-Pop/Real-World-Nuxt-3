<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
import highlightJs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/obsidian.css'

const { source } = defineProps<{ source: string }>()

highlightJs.registerLanguage('javascript', javascript)
highlightJs.registerLanguage('html', xml)

const markdownOptions = {
  highlight: function (str: string, lang: string) {
    if (!highlightJs.getLanguage(lang)) {
      return
    }
    return highlightJs.highlight(str, { language: lang }).value
  }
}
</script>

<template>
  <VueMarkdown :source="source" :options="markdownOptions" />
</template>

<style lang="scss">
@use '@/assets/styles/colors.scss';

pre {
  margin: 15px 0px;
  padding: 10px;
  border: 1px solid colors.$green-dark;
  border-radius: 5px;
}

pre code {
  font-size: 12pt;
  line-height: 16pt;
}

p {
  font-size: 14pt;
  line-height: 20pt;
  margin-bottom: 10px;
}

p > code {
  color: colors.$pink;
}
</style>
