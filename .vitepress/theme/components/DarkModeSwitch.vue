<template>
  <div class="text-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton class="inline-flex justify-center w-full px-2 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <IconLight class="dark:hidden w-6 h-6 stroke-sky-500 dark:stroke-slate-500" aria-hidden="true" />
          <IconDark class="hidden dark:inline w-6 h-6" aria-hidden="true" :selected="dark" />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="z-50 absolute right-0 w-32 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-slate-700 dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300"
        >
          <MenuItem v-slot="{ active }">
            <button :class="[active ? 'bg-slate-50 dark:bg-slate-600/30' : '', dark ? '' : 'text-sky-500', 'font-semibold group flex rounded-md items-center w-full px-2 py-2']" @click="setLight">
              <IconLight :active="active" class="w-6 h-6 mr-2 stroke-sky-500 dark:stroke-slate-500" aria-hidden="true" />
              Light
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button :class="[active ? 'bg-slate-50 dark:bg-slate-600/30' : '', dark ? 'text-sky-500' : '', 'font-semibold group flex rounded-md items-center w-full px-2 py-2']" @click="setDark">
              <IconDark :active="active" class="w-6 h-6 mr-2" aria-hidden="true" :selected="dark" />
              Dark
            </button>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import IconDark from '../icons/IconDark.vue';
import IconLight from '../icons/IconLight.vue';

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    IconDark,
    IconLight
  },
  setup() {
    const dark = ref(false);
    const setDark = () => {
      localStorage['swsio.dark'] = 'dark';
      //document.documentElement.classList.add('dark')
      dark.value = true;
    };
    const setLight = () => {
      localStorage['swsio.dark'] = 'light';
      //document.documentElement.classList.remove('dark')
      dark.value = false;
    };
    onMounted(() => {
      /*
      if (localStorage['swsio.dark'] === 'dark' || (!('swsio.dark' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setDark()
      } else if (localStorage['swsio.dark'] === 'light') {
        setLight()
      } else {
        setDark()
      }*/
      setLight();
    });
    return {
      dark,
      setDark,
      setLight
    };
  }
};
</script>
