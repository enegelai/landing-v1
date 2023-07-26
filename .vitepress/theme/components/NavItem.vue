<template>
  <a
    :href="pages[fileName].href"
    class="px-3 py-2 transition-colors duration-200 relative block border-l pl-4 -ml-px"
    :class="[
      isActive
        ? 'text-sky-500 border-current font-semibold dark:text-sky-400'
        : 'border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300',
    ]"
  >
    <span>{{ pages[fileName].title }}</span>
  </a>
  <!--<a
      href="http://github.com"
      class="px-3 py-2 transition-colors duration-200 relative block rounded-md"
      :class="[
      isActive
        ? 'text-cyan-700 bg-cyan-50'
        : 'hover:text-gray-900 text-gray-500',
    ]"
    ]"
  >
    <span>{{ fileName }}</span>
  </a>-->
</template>

<script>
import { getNameFromPath } from '../utils.js'
import { ref, watch, computed } from 'vue'
import { useData } from 'vitepress'

export default {
  props: {
    fileName: {
      type: String,
      required: true,
    },
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
  computed: {
    isActive() {
      return getNameFromPath(this.page.relativePath) == this.fileName
    },
  },
}
</script>
