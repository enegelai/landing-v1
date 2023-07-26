<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute, useData } from 'vitepress';
import Home from './Home.vue';
import NotFound from './NotFound.vue';
import Blog from './Blog.vue';

import Product from './Product.vue';
import BusinessCases from './BusinessCases.vue';
import BlogLayout from './BlogLayout.vue';
import PageLayout from './PageLayout.vue';

const route = useRoute();
const { page, frontmatter } = useData();
const isIndex = computed(() => frontmatter.value.index);
// const isNotFound = computed(() => route.component === NotFound)
const isBlogHome = computed(() => frontmatter.value.isBlogHome);
const isResourcesHome = computed(() => frontmatter.value.isResourcesHome);
const isProductHome = computed(() => frontmatter.value.isProductHome);
const isBlogPage = computed(() => page.value.filePath.startsWith('blog/') || page.value.filePath.startsWith('resources/'));

onMounted(() => {
  document.documentElement.classList.remove('dark');
});
</script>

<template>
  <div class="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
    <Home v-if="isIndex" />
    <!--<NotFound v-else-if="isNotFound" />-->
    <Blog v-else-if="isBlogHome" />
    <BusinessCases v-else-if="isResourcesHome" />
    <Product v-else-if="isProductHome" />
    <BlogLayout v-else-if="isBlogPage" />
    <PageLayout v-else />
  </div>
</template>
