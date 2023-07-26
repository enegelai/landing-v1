<script setup>
import PageHeader from './PageHeader.vue'
import PageFooter from './PageFooter.vue'

import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/vue/20/solid'

  const features = [
    {
      name: 'Call Summarization',
      description:
        'Forget about tedious manual transcription and analysis. Our Conversation Intelligence Dashboard delivers concise and accurate call summaries at the click of a button. Understand the crux of each interaction without sifting through lengthy transcripts, saving you time and improving productivity.',
      href: '#',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'KPI Calculation',
      description:
        "Effectively monitor your team's performance with automatic KPI calculations. Our intelligent dashboard evaluates each call based on critical metrics, assigns ratings, and offers actionable insights for improvement. Easily track the most important KPIs such as Net Promoter Score, Accuracy of Responses, Relevance of Responses, among others.",
      href: '#',
      icon: LockClosedIcon,
    },
    {
      name: 'Detection of Strengths and Weaknesses',
      description:
        "Gain an in-depth understanding of your agents' communication skills. Our product utilizes advanced AI algorithms to identify the strengths and weaknesses exhibited by agents during their conversations. These insights can guide personalized training and development, leading to enhanced agent proficiency and improved customer satisfaction.",
      href: '#',
      icon: ArrowPathIcon,
    },
  ]

  const features2 = [
    {
      name: 'Performance Analysis',
      description:
        "Personal Coach utilizes advanced Generative AI algorithms to analyze your contact center agents' performance, taking into account a multitude of data points. The AI then identifies patterns, strengths, weaknesses, and opportunities for each individual agent.",
      href: '#',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Personalized Recommendations',
      description:
        "Based on the comprehensive analysis, Personal Coach generates personalized performance improvement recommendations. These recommendations are designed to be practical, specific, and impactful, allowing agents to understand exactly what steps they need to take to boost their performance.",
      href: '#',
      icon: LockClosedIcon,
    },
    {
      name: 'Progress Monitoring',
      description:
        "Personal Coach doesn't just stop at recommendations. Our solution provides real-time monitoring and tracking of agent performance over time. AI Boost's dashboard displays easy-to-understand progress charts, highlighting the improvements in performance and identifying areas still needing attention.",
      href: '#',
      icon: LockClosedIcon,
    },
    {
      name: 'Continuous Learning',
      description:
        "Personal Coach is a continuously learning system. As agent performance data continues to flow in, the AI adapts its analysis and recommendations, ensuring that your contact center stays agile, efficient, and at the top of its game.",
      href: '#',
      icon: ArrowPathIcon,
    },
    {
      name: 'Agent Empowerment',
      description:
        "By providing detailed, personalized feedback and clear pathways for improvement, AI Boost empowers agents to take charge of their own professional growth. The result? Improved agent satisfaction, reduced turnover, and a more motivated, productive team.",
      href: '#',
      icon: ArrowPathIcon,
    },
  ]

  const features3 = [
    {
      name: 'Intelligent Interaction',
      description:
        "Enegel Bot Tester intelligently interacts with your voicebots and chatbots. It mimics a wide range of user behaviors, requests, and queries, enabling a thorough evaluation of your bot's capabilities and responses.",
      href: '#',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Objective-Driven Testing',
      description:
        "Bots are tested against user-defined business objectives, ensuring the assessments align with your specific goals. Enegel Bot Tester measures the bot's success in fulfilling these objectives, providing a valuable benchmark for performance.",
      href: '#',
      icon: LockClosedIcon,
    },
    {
      name: 'Customer Experience Analysis',
      description:
        "By simulating a realistic user interaction, Enegel Bot Tester can analyze the customer experience provided by your bots. Our tool measures factors like response accuracy, query resolution speed, and conversational fluency to evaluate the overall customer experience.",
      href: '#',
      icon: LockClosedIcon,
    },
    {
      name: 'Ongoing Performance Monitoring',
      description:
        "Enegel Bot Tester offers ongoing performance monitoring to track the improvements over time. Regular tests can be scheduled to ensure your bots continue to meet the business objectives and provide excellent customer experience.",
      href: '#',
      icon: ArrowPathIcon,
    },

  ]

</script>

<template>
    <PageHeader></PageHeader>
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div id="conversation-intelligence-dashboard" class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-400">Empower your agents</h2>
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Conversation Intelligence Dashboard</h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">a cutting-edge solution designed to streamline call center operations and enhance agent performance. Leveraging the power of AI, the Conversation Intelligence Dashboard simplifies call summarization, facilitates KPI calculation, and identifies agent strengths and weaknesses based on conversation transcripts.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div v-for="feature in features" :key="feature.name" class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <component :is="feature.icon" class="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                {{ feature.name }}
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p class="flex-auto">{{ feature.description }}</p>
                <p class="mt-6">
                  <a :href="feature.href" class="text-sm font-semibold leading-6 text-indigo-400">Learn more <span aria-hidden="true">→</span></a>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div id="personal-coach" class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-400">Empower your agents</h2>
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Personal Coach</h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">Personal Coach utilizes advanced Generative AI technology, designed to analyze, optimize, and track agent performance over time. This intelligent tool is uniquely positioned to elevate your contact center's productivity, quality, and effectiveness by providing personalized performance improvement recommendations to your agents.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div v-for="feature in features2" :key="feature.name" class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <component :is="feature.icon" class="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                {{ feature.name }}
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p class="flex-auto">{{ feature.description }}</p>
                <p class="mt-6">
                  <a :href="feature.href" class="text-sm font-semibold leading-6 text-indigo-400">Learn more <span aria-hidden="true">→</span></a>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div id="bot-tester" class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-400">Test your voicebots or chatbots</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Bot Tester</p>
          <p class="mt-6 text-lg leading-8 text-gray-300">The Engel Bot Tester is a cutting-edge solution for evaluating and enhancing the performance of your voicebots and chatbots. Using user-defined business objectives, our tool actively engages with your bots, providing detailed assessments of their effectiveness and the overall customer experience.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div v-for="feature in features3" :key="feature.name" class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <component :is="feature.icon" class="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                {{ feature.name }}
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p class="flex-auto">{{ feature.description }}</p>
                <p class="mt-6">
                  <a :href="feature.href" class="text-sm font-semibold leading-6 text-indigo-400">Learn more <span aria-hidden="true">→</span></a>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <PageFooter></PageFooter>
  </template>

