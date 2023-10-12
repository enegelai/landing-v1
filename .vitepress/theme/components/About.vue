<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our leadership team</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li v-for="person in people" :key="person.name">
          <div class="flex items-center gap-x-6">
            <img class="h-16 w-16 rounded-full" :src="person.imageUrl" alt="" />
            <div>
              <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}</h3>
              <p class="text-sm font-semibold leading-6 text-indigo-600">{{ person.role }}</p>
              <p class="text-sm font-semibold leading-6 text-gray-500">{{ person.location }}</p>
              <a :href="person.linkedinUrl" target="_blank" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

const people = [
  {
    name: 'Slava Zhakov',
    role: 'Founder / CEO',
    imageUrl: '/img/Slava Pic 6.png',
    location: '25 years in CX business',
    linkedinUrl: 'https://www.linkedin.com/in/slavazhakov/'
  },
  {
    name: 'Slava Sayko',
    role: 'Founder / CTO',
    imageUrl: '/img/Slava Sayko Pic.png',
    location: '26 years in CX technology',
    linkedinUrl: 'https://www.linkedin.com/in/slavasayko/'
  },
  {
    name: 'Tod Famous',
    role: 'Chief Product Officer',
    imageUrl: '/img/Tod Famous Pic.png',
    location: '25 years in CX product',
    linkedinUrl: 'https://www.linkedin.com/in/tfamous/'
  },  
  {
    name: 'Luke Derrin',
    role: 'CMO',
    imageUrl: '/img/Luke Derrin Pic.png',
    location: '20 years of management within CX',
    linkedinUrl: 'https://www.linkedin.com/in/lukederrin/'
  },
  {
    name: 'Maria Preobrazhenskaya',
    role: 'Customer Success',
    imageUrl: '/img/Maria P Pic.png',
    location: '23 years in Customer Care',
    linkedinUrl: 'https://www.linkedin.com/in/maria-preobrazhenskaya-b55332164/'
  },
  {
    name: 'Nadia Pekarnikova',
    role: 'Legal',
    imageUrl: '/img/Nadia P Pic.png',
    location: 'Ethical and compliant use of AI',
    linkedinUrl: 'https://www.linkedin.com/in/nadia-p-192b87174/'
  }  
];
</script>
