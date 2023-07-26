<template>
  <PageHeader></PageHeader>
  <div class="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
    <div class="w-[108rem] flex-none flex justify-end">
      <picture>
        <img src="/media/docs@tinypng.d9e4dcdc.png" alt="" class="w-[71.75rem] flex-none max-w-none dark:hidden" decoding="async" />
      </picture>
      <picture>
        <img src="/media/docs-dark@tinypng.1bbe175e.png" alt="" class="w-[90rem] flex-none max-w-none hidden dark:block" decoding="async" />
      </picture>
    </div>
  </div>
  <div class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden bg-slate-50 dark:bg-[#0B1120]">
    <div class="relative z-10 mx-auto">
      <HeroOne></HeroOne>
      <!--<HeroTwo></HeroTwo>-->
      <HeroThree></HeroThree>
    </div>
  </div>
  <PageFooter></PageFooter>
</template>

<script setup>
import PageHeader from './PageHeader.vue';
import HeroOne from './components/herosections/HeroOne.vue';
import HeroTwo from './components/herosections/HeroTwo.vue';
import HeroThree from './components/herosections/HeroThree.vue';
import PageFooter from './PageFooter.vue';

import { useRoute, useData } from 'vitepress';
import { computed } from 'vue';

const { theme } = useData();
const route = useRoute();

const themeConfig = computed(() => theme.value);
</script>
