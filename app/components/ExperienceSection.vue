<template>
  <section id="experience" class="experience">
    <div class="experience__inner">
      <div class="experience__label reveal">Experience</div>

      <div class="timeline">
        <div class="timeline__track" />

        <TimelineItem
          v-for="(job, i) in jobs"
          :key="i"
          :date="job.date"
          :title="job.role"
          :subtitle="job.company"
          :details="job.details"
          :active="visibleJobs.includes(i)"
          variant="experience"
        />
      </div>

      <div class="experience__label reveal" style="margin-top: 3rem;">Education</div>

      <div class="timeline">
        <div class="timeline__track" />

        <TimelineItem
          v-for="(edu, i) in education"
          :key="'edu' + i"
          :date="edu.date"
          :title="edu.qualification"
          :subtitle="edu.institution"
          :grade="edu.grade"
          :subjects="edu.subjects"
          variant="education"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface Job {
  date: string
  role: string
  company: string
  details: string[]
}

export interface Education {
  date: string
  qualification: string
  institution: string
  grade?: string
  subjects?: string
}

defineProps<{
  jobs: Job[]
  education: Education[]
}>()

const visibleJobs = ref<number[]>([])

onMounted(() => {
  // Job visibility observer for dot pulse
  const jobEls = document.querySelectorAll('.timeline__item')
  const jobObs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        const idx = Array.from(jobEls).indexOf(e.target)
        if (!visibleJobs.value.includes(idx)) visibleJobs.value.push(idx)
      }
    }),
    { threshold: 0.3 }
  )
  jobEls.forEach(el => jobObs.observe(el))

  // Position timeline tracks to span from first card center to last card center
  const positionTracks = () => {
    document.querySelectorAll('.timeline').forEach(tl => {
      const items = tl.querySelectorAll('.timeline__item')
      const track = tl.querySelector('.timeline__track') as HTMLElement
      if (!track || items.length < 1) return

      const firstItem = items[0] as HTMLElement
      const lastItem = items[items.length - 1] as HTMLElement

      // Get the center of each card (where the dot sits)
      const topOffset = firstItem.offsetTop + firstItem.offsetHeight / 2
      const bottomOffset = lastItem.offsetTop + lastItem.offsetHeight / 2

      track.style.top = `${topOffset}px`
      track.style.height = `${bottomOffset - topOffset}px`
    })
  }

  // Run multiple times to catch reveal animations settling
  positionTracks()
  setTimeout(positionTracks, 200)
  setTimeout(positionTracks, 500)
  setTimeout(positionTracks, 1000)
  
  window.addEventListener('resize', positionTracks, { passive: true })
})
</script>

<style scoped>
.experience {
  background: #264653;
  color: #ffffff;
  padding: 6rem 2rem;
}

.experience__inner {
  max-width: 800px;
  margin: 0 auto;
}

.experience__label {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 2rem;
}

.timeline {
  position: relative;
  padding-left: 40px;
  text-align: left;
}

.timeline__track {
  position: absolute;
  left: 5px;
  width: 2px;
  background: rgba(233, 196, 106, 0.2);
  border-radius: 2px;
}

@media (max-width: 500px) {
  .timeline {
    padding-left: 30px;
  }
}
</style>
