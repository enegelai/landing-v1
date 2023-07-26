<template>
  <div class="hidden xl:text-sm xl:block flex-none w-64 pl-8 mr-8">
    <div class="flex flex-col justify-between overflow-y-auto sticky max-h-(screen-16) pt-10 pb-6 top-16">
      <div class="mb-8" v-if="page.headers">
        <h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">On this page</h5>

        <ul class="text-slate-700 text-sm leading-6 font-medium">
          <li v-for="section in page.headers" :key="section.slug" :class="{ 'ml-4': section.level == 3 }">
            <a
              :href="'#' + section.slug"
              :class="[
                activeHash === '#' + section.slug ? 'block py-1 text-sky-500 dark:text-sky-400' : 'block py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300',
                section.level == 3 ? 'group flex items-start' : '',
              ]"
            >
              <svg
                v-if="section.level === 3"
                width="3"
                height="24"
                viewBox="0 -9 3 24"
                class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
              >
                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
              </svg>
              {{ section.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue'
import { useData } from 'vitepress'

export default {
  data() {
    return {
      activeHash: null,
    }
  },
  props: {
    anchors: Array,
  },
  setup() {
    const { site, page, theme, frontmatter } = useData()
    //const currentRoute = ref();
    return {
      theme,
      page,
      collections: computed(() => theme.value.collections),
      pages: computed(() => theme.value.pages),
      pageHeaders: computed(() => page.value.headers),
    }
  },
  mounted() {
    this.initActiveHash()
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    initActiveHash() {
      const hdrs = this.pageHeaders
      this.activeHash = Array.isArray(hdrs) && hdrs.length > 0 ? '#' + this.page.headers[0].slug : null
    },
    handleScroll() {
      const y = window.pageYOffset
      const windowHeight = window.innerHeight

      if (y < 0) {
        this.activeHash = this.initActiveHash()
      } else if (y + windowHeight >= document.body.scrollHeight) {
        this.activeHash = this.page.headers ? '#' + this.page.headers[this.page.headers.length - 1].slug : null
      } else {
        const middle = y + windowHeight / 2
        for (let i = 0; i < this.anchors.length; i++) {
          if (middle >= this.anchors[i].offsetTop) {
            this.activeHash = this.anchors[i].hash
          }
        }
      }
    },
  },
  watch: {
    page() {
      // At this point, the document haven't finished re-render
      this.initActiveHash()
    },
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
