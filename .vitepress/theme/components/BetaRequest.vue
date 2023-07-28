<template>
  <div v-if="!formSubmitted" class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
      <div
        class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join Private Beta Waitlist</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">Please tell us about yourself and your Use Case</p>
    </div>
    <form class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
          <div class="mt-2.5">
            <input
              v-model="firstName"
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
          <div class="mt-2.5">
            <input
              v-model="lastName"
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label>
          <div class="mt-2.5">
            <input
              v-model="company"
              type="text"
              name="company"
              id="company"
              autocomplete="organization"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div class="mt-2.5">
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number (optional)</label>
          <div class="relative mt-2.5">
            <input
              v-model="phone"
              type="tel"
              name="phone-number"
              id="phone-number"
              autocomplete="tel"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Use Case</label>
          <div class="mt-2.5">
            <textarea
              v-model="useCase"
              name="message"
              id="message"
              rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div class="mt-10">
        <button
          type="button"
          @click="onSubmit"
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Request Private Beta
        </button>
      </div>
    </form>
  </div>
  <div v-else class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 flex justify-center">
    <div class="py-24 mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">Private Beta Request Submitted</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">Thank you for your interest! We'll be in touch shortly.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const company = ref('');
const email = ref('');
const phone = ref('');
const useCase = ref('');

const formSubmitted = ref(false);

async function onSubmit() {
  // https://docs.google.com/forms/d/e/1FAIpQLSdQdvD5B2JGZdyvC_yamj8jennCsn0RM6Yx0mhvZQLY7OdyuA/formResponse?usp=pp_url&entry.1282049958=first&entry.1807245944=last&entry.1334486963=company&entry.684098078=email&entry.1345073752=phone&entry.1134118059=usecase
  console.log(`Form submitted: ${firstName.value}`);

  try {
    /*
    const r = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdQdvD5B2JGZdyvC_yamj8jennCsn0RM6Yx0mhvZQLY7OdyuA/formResponse?usp=pp_url&entry.1282049958=first&entry.1807245944=last&entry.1334486963=company&entry.684098078=email&entry.1345073752=phone&entry.1134118059=usecase',
      {
        mode: 'no-cors',
      });
    */
    const submitURL =
      'https://docs.google.com/forms/d/e/1FAIpQLSdQdvD5B2JGZdyvC_yamj8jennCsn0RM6Yx0mhvZQLY7OdyuA/formResponse?' +
      new URLSearchParams({
        usp: 'pp_url',
        'entry.1282049958': firstName.value,
        'entry.1807245944': lastName.value,
        'entry.1334486963': company.value,
        'entry.684098078': email.value,
        'entry.1345073752': phone.value,
        'entry.1134118059': useCase.value
      });
    await fetch(submitURL, {
      mode: 'no-cors'
    });
    formSubmitted.value = true;
  } catch (error) {
    console.error(error);
  }
}
</script>
