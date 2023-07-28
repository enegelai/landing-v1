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
    location: 'Former Genesys CTO',
    linkedinUrl: 'https://www.linkedin.com/in/slavazhakov/'
  },
  {
    name: 'Slava Sayko',
    role: 'Founder / CTO',
    imageUrl: '/img/Slava Sayko Pic.png',
    location: 'Former Genesys SVP of R&D',
    linkedinUrl: 'https://www.linkedin.com/in/slavasayko/'
  },
  {
    name: 'Luke Derrin',
    role: 'CMO',
    imageUrl: '/img/Luke Derrin Pic.png',
    location: '20 years of management within CX',
    linkedinUrl: 'https://www.linkedin.com/in/lukederrin/'
  }  
];
</script>
