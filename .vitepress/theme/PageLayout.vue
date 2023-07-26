<template>
  <PageHeader></PageHeader>
  <Content />
  <PageFooter></PageFooter>
</template>

<script>
import PageHeader from './PageHeader.vue'
import PageFooter from './PageFooter.vue'
import ContentWrapper from './ContentWrapper.vue'
import { ref, watch, computed } from 'vue'
import { useData } from 'vitepress'

export default {
  data() {
    return {
    }
  },
  components: {
    PageFooter,
    PageHeader,
    ContentWrapper,
  },
  setup() {
    const { site, page, theme, frontmatter } = useData()
    //const currentRoute = ref();
    return {
      theme,
      page,
      collections: computed(() => theme.value.collections),
      pages: computed(() => theme.value.pages),
    }
  },
}
</script>
