<template>
  <header class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 supports-backdrop-blur:bg-white/60">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Enegel</span>
          <Logo class="text-slate-900 dark:text-slate-900 w-auto h-6"></Logo>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6 cursor-pointer" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            Product
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                    <component :is="item.icon" class="h-12 w-12 text-orange-500 group-hover:text-orange-700" aria-hidden="true" />
                  </div>
                  <div class="flex-auto">
                    <a :href="item.href" class="block font-semibold text-gray-900">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2">
                <a v-for="item in callsToAction" :key="item.name" :href="item.href" :class="['flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6', item?.class || '']">
                  <component :is="item.icon" class="h-6 w-6 flex-none" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <a href="/resources/" class="text-sm font-semibold leading-6 text-gray-900">Resources</a>
        <a href="/blog/" class="text-sm font-semibold leading-6 text-gray-900">Blog</a>
        <a href="/company/about" class="text-sm font-semibold leading-6 text-gray-900">Company</a>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="https://test.enegel.ai" target="_blank" class="text-sm font-semibold leading-6 bg-orange-700 px-2 py-1 rounded-md text-white">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <ClientOnly>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <!--<div class="fixed inset-0 z-10" />-->
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <div class="flex lg:flex-1">
              <a href="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Enegel</span>
                <Logo class="text-slate-900 dark:text-slate-900 w-auto h-6"></Logo>
              </a>
            </div>
            <div class="flex lg:hidden">
              <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                <span class="sr-only">Close main menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-2">
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <DisclosureButton
                      v-for="item in [...products, ...callsToAction]"
                      :key="item.name"
                      as="a"
                      :href="item.href"
                      class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >{{ item.name }}</DisclosureButton
                    >
                  </DisclosurePanel>
                </Disclosure>
                <a href="/resources/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Resources</a>
                <a href="/blog/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Blog</a>
                <a href="/company/about" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
              </div>
              <div class="py-6">
                <a href="https://app.enegel.ai" target="_blank" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </ClientOnly>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DarkModeSwitch from './components/DarkModeSwitch.vue';
import Logo from './components/Logo.vue';
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue';
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, XMarkIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/vue/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid';

const products = [
  {
    name: 'Conversation Intelligence Dashboard',
    description: 'A cutting-edge solution designed to streamline call center operations and enhance agent performance',
    href: '/product/#conversation-intelligence-dashboard',
    icon: ChartPieIcon
  },
  {
    name: 'Personal Coach',
    description: 'Personal Coach utilizes advanced Generative AI technology, designed to analyze, optimize, and track agent performance over time. ',
    href: '/product/#personal-coach',
    icon: CursorArrowRaysIcon
  },
  { name: 'Bot Tester', description: 'The Enegel Bot Tester is a cutting-edge solution for evaluating and enhancing the performance of your Voice Bots and Chat Bots.', href: '/product/#bot-tester', icon: CheckCircleIcon }
];
const callsToAction = [
  { name: 'Learn More', href: '/product/', icon: InformationCircleIcon, class: 'bg-gray-50 text-gray-900 hover:bg-gray-100' },
  { name: 'Private Beta Waitlist', href: '/company/beta', icon: CursorArrowRaysIcon, class: 'bg-orange-600 text-white hover:bg-orange-500' }
];

const mobileMenuOpen = ref(false);

onMounted(() => {
  //document.documentElement.classList.remove('dark');
});
</script>
