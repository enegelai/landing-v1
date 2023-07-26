<template>
  <div
    class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
  >
    <div class="max-w-8xl mx-auto">
      <div class="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 px-4">
        <div class="relative flex items-center">
          <a class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto" href="/"
            ><span class="sr-only">Home page</span>
            <logo class="text-slate-900 dark:text-white w-auto h-6" />
          </a>
          <div class="relative hidden lg:flex items-center ml-auto">
            <nav class="text-lg leading-6 font-semibold text-slate-700 dark:text-slate-200">
              <ul class="flex space-x-8">
                <!--<li><a class="hover:text-sky-500 dark:hover:text-sky-400" href="/docs/">Docs</a></li>-->
                <li><a class="hover:text-sky-500 dark:hover:text-sky-400" href="/product/">Product</a></li>
                <li><a class="hover:text-sky-500 dark:hover:text-sky-400" href="/businesscase/">Resources</a></li>
                <li><a class="hover:text-sky-500 dark:hover:text-sky-400" href="/blog/">Blog</a></li>
                <li><a class="hover:text-sky-500 dark:hover:text-sky-400" href="/about/">About</a></li>
              </ul>
            </nav>
            <div class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
              <dark-mode-switch></dark-mode-switch>
              <!--<a href="https://github.com" class="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                ><span class="sr-only">GitHub</span>
                <svg viewBox="0 0 16 16" class="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>-->
            </div>
          </div>
          <button
            type="button"
            class="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300"
          >
            <span class="sr-only">Search</span>
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m19 19-3.5-3.5"></path>
              <circle cx="11" cy="11" r="6"></circle>
            </svg>
          </button>
          <div class="ml-2 -my-1 lg:hidden">
            <button type="button" class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
              <span class="sr-only">Navigation</span>
              <svg width="24" height="24" fill="none" aria-hidden="true">
                <path
                  d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div
              style="
                position: fixed;
                top: 1px;
                left: 1px;
                width: 1px;
                height: 0;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border-width: 0;
                display: none;
              "
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox.vue'
import OutLink from './components/OutLink.vue'
import IconGitHub from './icons/IconGitHub.vue'
import Logo from './components/Logo.vue'
import DarkModeSwitch from './components/DarkModeSwitch.vue'

export default {
  components: { SearchBox, OutLink, IconGitHub, Logo, DarkModeSwitch },
}
</script>
