<template>
  <div>
    <div class="relative bg-white">
      <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div class="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-28 xl:col-span-6">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <div class="rounded-md flex items-center text-green-500">
              <svg class="h-11" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3481 14.0672C22.533 17.2743 20.3563 19.0776 15.6489 19.598C10.4618 20.1771 6.17492 16.8088 4.48156 14.2944C6.64105 15.0536 8.94167 15.3339 11.2218 15.1154C15.4497 14.7306 17.8624 13.0702 19.5927 10.3506C19.8546 9.94378 20.5629 8.66828 19.3234 8.23945C18.1871 7.84727 17.143 7.83627 16.3314 9.02014C15.0143 10.9517 13.4722 11.6921 10.2442 12.044C5.9425 12.5021 0.777569 9.67256 0.179913 10.2627C-0.889966 11.3182 2.58161 22.9224 15.3759 22.7795C19.9837 22.7281 23.2192 21.1668 26.2481 17.2816C26.9859 16.3396 26.7572 15.1961 25.9492 14.1222C25.4512 13.4587 24.7429 13.4111 24.3629 14.0818" fill="currentColor"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7123 7.10689C29.4278 2.66462 27.7713 -0.131961 27.1368 -1.24653e-05C26.6203 0.11361 25.6611 3.03481 24.296 4.73548C19.7066 2.64629 16.8253 4.54489 16.8917 5.55283C16.9471 6.39217 20.7249 5.7874 24.2702 8.85154C28.0369 12.0953 28.1476 15.6102 29.2249 15.5956C30.0881 15.5956 31.9217 12.1759 27.7123 7.10689Z" fill="currentColor"/>
                </g>
              </svg>
              <div class="text-4xl text-gray-900 ml-4 font-bold">Balloon Fiesta</div>
            </div>
            <h1 class="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">Albuquerque International Balloon Fiesta</h1>
            <div class="hidden sm:mt-32 sm:flex lg:mt-8 my-2">
              <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">BalloonFiesta Enegel.ai Bot</span>
            </div>
            <button type="button" class="rounded-md bg-green-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500" @click="clearBotConversation">Clear Bot Conversation</button>
          </div>
        </div>
        <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img class="aspect-[3/2] w-full opacity-60 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" src="/img/whirl2.svg" alt="" />
        </div>
      </div>
    </div>
    <ClientOnly>
      <chat-bot
          ref="ticketSpiceBot"
          name="BalloonFiesta"
          url="wss://bot-service-poqiruzabq-uc.a.run.app"
          org-id="webconnex"
          bot-id="balloons"
          welcome-message="Hello! Welcome to the Albuquerque International Balloon Fiesta. We're here to help. How can I assist you today?"
      >
      </chat-bot>
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const ticketSpiceBot = ref(null);

function clearBotConversation(){
  const chatBot = ticketSpiceBot.value;
  if(chatBot){
    chatBot.clearConversation();
  }
}

</script>
