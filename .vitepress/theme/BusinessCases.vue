<script setup>
import Date from './Date.vue';
import PageHeader from './PageHeader.vue';
import PageFooter from './PageFooter.vue';
import { data as businesscases } from './businesscases.data';
</script>

<template>
  <div class="antialiased">
    <PageHeader></PageHeader>
    <div class="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div class="w-[108rem] flex-none flex justify-end">
        <picture
          ><!--<source srcset="/media/docs@30.8b9a76a2.avif" type="image/avif" />-->
          <img src="/media/docs@tinypng.d9e4dcdc.png" alt="" class="w-[71.75rem] flex-none max-w-none dark:hidden" decoding="async" /></picture
        ><picture
          ><!--<source srcset="/media/docs-dark@30.1a9f8cbf.avif" type="image/avif" />-->
          <img src="/media/docs-dark@tinypng.1bbe175e.png" alt="" class="w-[90rem] flex-none max-w-none hidden dark:block" decoding="async"
        /></picture>
      </div>
    </div>
    <header class="py-16 sm:text-center">
      <h1 class="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">Business Cases</h1>
    </header>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div class="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
        <div class="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"></div>
        <div class="space-y-16">
          <article class="relative group" v-for="{ title, url, date, excerpt } of businesscases">
            <div class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50"></div>
            <svg viewBox="0 0 9 9" class="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block">
              <circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" class="fill-white dark:fill-slate-900" stroke-width="2"></circle>
            </svg>
            <div class="relative">
              <h1 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                {{ title }}
              </h1>
              <div class="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-3">
                <div v-if="excerpt" class="" v-html="excerpt"></div>
              </div>
              <dl class="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                <dt class="sr-only">Date</dt>
                <dd class="whitespace-nowrap text-sm leading-6 text-slate-400">
                  <Date :date="date" />
                </dd>
              </dl>
            </div>
            <a class="flex items-center text-sm text-sky-500 font-medium" :href="url"
              ><span class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span
              ><span class="relative"
                >Read more<span class="sr-only">, {{ title }}</span></span
              ><svg
                class="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M0 0L3 3L0 6"></path></svg
            ></a>
          </article>
        </div>
      </div>
    </main>
    <PageFooter></PageFooter>
  </div>
</template>
