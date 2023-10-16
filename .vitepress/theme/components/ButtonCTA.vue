<template>
  <div class="flex">
  <a
      :href="url"
      target="_blank"
      class="flex items-center border-0 rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
  >
    <CursorArrowRaysIcon class="h-6 w-6 flex-none" aria-hidden="true" />
    {{title}}
  </a>
  </div>
</template>
<script setup>
import { CursorArrowRaysIcon } from '@heroicons/vue/24/outline';
defineProps(['url','title'])
</script>