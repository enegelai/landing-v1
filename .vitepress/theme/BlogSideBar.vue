<template>
  <div
    class="fixed z-20 inset-0 lg:h-auto flex-none h-full w-full lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block lg:static"
    :class="{ hidden: !navOpen }"
    @click="$emit('update:closeNav')"
  >
    <div class="h-full overflow-y-auto lg:block lg:bg-transparent overflow-hidden lg:top-16 lg:h-auto lg:sticky bg-white mr-24 lg:mr-0" @click="(e) => e.stopPropagation()">
      <div class="hidden lg:block h-12 pointer-events-none absolute inset-x-0 z-10 bg-transparent" />
      <nav class="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 lg:h-(screen-16)">
        <!--<ul v-for="(collection, category) in collections" :key="category">
          <li class="mt-12 lg:mt-8">
            <h5 class="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
              {{ category }}
            </h5>
            <ul v-for="fileName in collection" :key="fileName" class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
              <li>
                <NavItem :fileName="fileName" />
              </li>
            </ul>
          </li>
        </ul>-->
      </nav>
    </div>
  </div>
</template>

<script>
import NavItem from './components/NavItem.vue'
import { ref, watch, computed } from 'vue'
import { useData } from 'vitepress'

export default {
  components: { NavItem },
  props: {
    navOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:closeNav'],
  setup() {
    const { site, page, theme, frontmatter } = useData()
    //const currentRoute = ref();
    return {
      theme,
      collections: computed(() => theme.value.collections),
    }
  },
  mounted() {
    console.log(`Checking collections: ${JSON.stringify(this.collections)}`)
    //const a = this.theme.value;
    //console.log(`sidebarItems: ${JSON.stringify(this.sidebarItems)}`);
  },
}
</script>
