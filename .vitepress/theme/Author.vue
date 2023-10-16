<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <dl class="pt-6 pb-10 xl:pt-6">
    <dt class="sr-only">Authors</dt>
    <dd>
      <ul class="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
        <li class="flex items-center space-x-2">
          <img v-if="frontmatter.avatar" :src="'/img/'+frontmatter.avatar" alt="author image" class="w-12 h-12 rounded-full" />
          <img v-else src="/logo.png" alt="logo image" class="w-12 h-12" />
          <dl class="text-sm font-medium leading-5 whitespace-nowrap">
            <dt class="sr-only">Name</dt>
            <dd class="text-slate-700 hover:text-slate-900 dark:text-slate-200 text-lg dark:hover:text-white">
              <a
                  :href="frontmatter.linkedin ? 'https://www.linkedin.com/in/' + frontmatter.linkedin : 'https://www.linkedin.com/company/enegel-ai'"
                  target="_blank"
                  rel="noopnener noreferrer"
                  class="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white link"
              >{{ frontmatter.author ? frontmatter.author : 'Enegel.ai'}}</a>
            </dd>
            <dt class="sr-only">LinkedIn</dt>
            <dd>
              <a
                :href="frontmatter.linkedin ? 'https://www.linkedin.com/in/' + frontmatter.linkedin : 'https://www.linkedin.com/company/enegel-ai'"
                target="_blank"
                rel="noopnener noreferrer"
                class="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white link"
                ><img class="w-6 h-6" src="/img/icons8-linkedin-96.svg"/></a>
            </dd>
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>
