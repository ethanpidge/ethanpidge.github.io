<template>
  <div class="site">
    <SiteHeader :nav-open="navOpen" @toggle="navOpen = !navOpen" />

    <OverlayNav
      :open="navOpen"
      :items="navItems"
      @close="navOpen = false"
      @navigate="goTo"
    />

    <HeroSection />

    <AboutSection :skills="skills" />

    <ProjectsSection
      :freelance-projects="freelanceProjects"
      :portal-projects="portalProjects"
    />

    <ExperienceSection :jobs="jobs" :education="education" />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import type { Job, Education } from '~/components/ExperienceSection.vue'
import type { FreelanceProject } from '~/components/ProjectCard.vue'
import type { PortalProject } from '~/components/ProjectListItem.vue'

useHead({ title: 'Ethan Pidgeon | Front-End Developer' })
useReveal()

const navOpen = ref(false)

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Experience' },
]

function goTo(id: string) {
  navOpen.value = false
  nextTick(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  })
}

const skills = [
  'HTML', 'CSS/SASS', 'JavaScript', 'Vue.js', 'Nuxt.js', 'jQuery', 'Tailwind CSS', 'Bootstrap', 'Blazor (C#)',
  'PHP', 'CodeIgniter', 'Symfony', 'MySQL', 'REST APIs', 'Git', 'Linux/CLI', 'AWS', 'npm/pnpm', 'Composer',
  'Jest/Jasmine', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator',
]

const freelanceProjects: FreelanceProject[] = [
  {
    name: 'D&B Civils Ltd (In development)',
    description: 'Business website for a civil engineering & construction company based in Devon. Features service pages for tarmac/resin driveways, dropped kerbs, S38/S278/S104 works, and more.',
    tags: ['Nuxt.js', 'Vue 3', 'In Development'],
    url: 'https://dbcivil.co.uk/',
    image: '/img/dbcivils_website.webp',
  },
  {
    name: 'A.R.A Artistry (In development)',
    description: "Portfolio site for a TV & Film Hair, Makeup and SFX Artist. Credits on productions including Netflix's The Witcher, BBC's Beyond Paradise.",
    tags: ['Nuxt.js', 'Vue 3', 'In Development'],
    url: 'https://ameliarubyalice.pages.dev/',
    image: '/img/ara_website.webp',
  },
]

const portalProjects: PortalProject[] = [
  {
    name: 'Wilko',
    type: 'WiFi Portal Experience',
    description: 'Guest WiFi captive portal deployed across 400+ nationwide retail stores, delivering seamless customer onboarding with data capture and marketing integration.',
    tags: ['PHP', 'Responsive', 'Nginx', 'Bootstrap'],
    image: '/img/wilko.webp',
  },
  {
    name: 'Starbucks',
    type: 'WiFi Portal Experience',
    description: 'Guest WiFi captive portal deployed internationally across Starbucks locations, including their Milan stores. Clean, branded authentication experience for coffeehouse customers.',
    tags: ['PHP', 'Responsive', 'Nginx', 'Bootstrap'],
    image: '/img/starbucks.webp',
  },
  {
    name: 'The Royal Collection Trust',
    type: 'WiFi Portal Experience',
    description: 'Guest WiFi captive portal for royal heritage sites including Buckingham Palace, providing visitors with elegant branded connectivity.',
    tags: ['PHP', 'Responsive', 'Nginx', 'Bootstrap'],
    image: '/img/rct.webp',
  },
  {
    name: 'Chiltern Railways',
    type: 'WiFi Portal Experience',
    description: 'Guest WiFi captive portal for train stations across the network, enabling quick passenger connectivity with branded authentication.',
    tags: ['PHP', 'Responsive', 'Nginx', 'Bootstrap'],
    image: '/img/chiltern.webp',
  },
  {
    name: 'The Celtic Collection',
    type: 'WiFi Portal Experience',
    description: "Guest WiFi captive portal serving Wales' premier luxury hospitality group — spanning Celtic Manor Resort (home of the 2010 Ryder Cup), Tŷ Hotels, ICC Wales and venues across Newport, Cardiff and Pembrokeshire.",
    tags: ['PHP', 'Responsive', 'Nginx', 'Bootstrap'],
    image: '/img/ty_newport.webp',
  },
]

const jobs: Job[] = [
  {
    date: 'March 2022 – Present',
    role: 'Front-End Developer',
    company: 'SparkTSL, Exeter',
    details: [
      'Develop responsive Wi-Fi portals on a LAMP stack with varied user journeys for clients including Wilko, Starbucks, the Royal Collection Trust and hundreds of NHS sites (HTML, CSS/SASS, Bootstrap, JavaScript/jQuery, PHP).',
      'Built and maintain a production-ready payment splash page using the Blazor C# web framework.',
      'Helped develop and maintain an online media streaming service for NHS Hospitals using Vue.js.',
      "Code review other developers' work, flagging bugs before the QA stage.",
      'Set up and manage Wi-Fi portal URLs through AWS services (primarily Route 53).',
      'Use Linux environments to create and manage portals via CLI, Git version control and virtual CentOS machines on AWS.',
    ],
  },
  {
    date: 'June 2019 – March 2022',
    role: 'Junior Front-End Developer',
    company: 'SparkTSL, Exeter',
    details: [
      'Developed bespoke Wi-Fi captive portals for a growing roster of clients using front-end web development skills.',
      'Handled support tickets including bandwidth changes (via JSON), image swaps and wording updates.',
      "Contributed to the company's Vue.js media platform built on a PHP Symfony back-end.",
      'Maintained existing portals — fixing bugs, updating front-ends per client requests and releasing to production.',
    ],
  },
  {
    date: 'November 2017 – June 2019',
    role: 'Apprentice Software Developer',
    company: 'SparkTSL, Exeter',
    details: [
      'Designed UI/UX concepts for portal interfaces before the company had a specialised designer.',
      'Assisted senior developers with both back-end PHP and front-end development.',
      'Handled support tickets including bandwidth changes, image swaps and wording changes.',
      'Used Git to push changes to testing environments for QA.',
      'Completed BCS Level 3 Software Development Technician apprenticeship (Merit).',
    ],
  },
]

const education: Education[] = [
  { 
    date: '2018 – 2019', 
    qualification: 'BCS Level 3 Software Development Technician', 
    institution: 'South Devon College', 
    grade: 'Merit', 
    subjects: 'Software Development Methodologies, Systems Architecture, Problem Solving & Programming' 
  },
  { 
    date: '2014 – 2017', 
    qualification: 'BTEC Level 3 Extended Diploma in IT', 
    institution: 'Exeter College', 
    grade: 'Distinction* Distinction* Distinction*', 
    subjects: 'Software Development, Networking, Database Design, Web Development, IT Systems & Project Management' 
  },
  { 
    date: '2012 – 2014', 
    qualification: 'GCSEs & BTEC', 
    institution: 'South Dartmoor Academy', 
    grade: '8 GCSEs A–C', 
    subjects: 'Including Maths, English, Science, IT, History, RS, Photography and Graphic Design' 
  },
]
</script>

<style scoped>
.site {
  font-family: var(--font-primary, 'JosefinSans', sans-serif);
  overflow-x: hidden;
}

/* Reveal animation styles */
:deep(.reveal) {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

:deep(.reveal.visible) {
  opacity: 1;
  transform: translateY(0);
}
</style>
