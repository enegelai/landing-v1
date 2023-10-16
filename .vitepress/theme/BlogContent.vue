<template>
  <div class="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
    <div class="text-sm leading-6 mb-6">
      <dl>
        <dt class="sr-only">Date</dt>
        <dd class="text-slate-700 dark:text-slate-400">
          <Date :date="date" />
        </dd>
      </dl>
    </div>
    <h1 class="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl">
      {{ page.title }}
    </h1>
    <div class="mt-6">
      <Author />
    </div>
    <div v-if="frontmatter.image" class="mt-2 mb-6">
      <img :src="frontmatter.image"/>
    </div>
    <div v-else class="mt-2 mb-6">
      <img src="/img/enegelai.png"/>
    </div>
    <Content class="prose prose-slate dark:prose-dark" />
  </div>
</template>

<script>
import Date from './Date.vue'
import Author from './Author.vue'
import { getNameFromPath, formatDate } from './utils.js'
import { ref, watch, computed } from 'vue'
import { useData } from 'vitepress'

export default {
  data() {
    return {
      flatPages: null,
      prevPage: null,
      nextPage: null,
    }
  },
  components: { Date, Author },
  emits: ['contentUpdated'],
  setup() {
    const { site, page, theme, frontmatter } = useData()
    return {
      theme,
      page,
      frontmatter,
      date: computed(() => formatDate(frontmatter.value.date)),
    }
  }
}
</script>
