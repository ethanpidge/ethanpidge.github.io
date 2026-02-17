<template>
  <section id="projects" class="projects">
    <div class="projects__inner">
      <h2 class="projects__heading reveal">Work</h2>

      <!-- Freelance / Personal Projects -->
      <h3 class="projects__subheading reveal">Projects</h3>
      <div class="projects__grid">
        <ProjectCard
          v-for="project in freelanceProjects"
          :key="project.name"
          :project="project"
        />
      </div>

      <!-- WiFi Portal Experience -->
      <h3 class="projects__subheading reveal" style="margin-top: 3.5rem;">Previous Work</h3>
      <div class="projects__list">
        <ProjectListItem
          v-for="portal in portalProjects"
          :key="portal.name"
          :project="portal"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { FreelanceProject } from './ProjectCard.vue'
import type { PortalProject } from './ProjectListItem.vue'

defineProps<{
  freelanceProjects: FreelanceProject[]
  portalProjects: PortalProject[]
}>()
</script>

<style scoped>
.projects {
  background: #e9c46a;
  color: #264653;
  padding: 6rem 2rem;
}

.projects__inner {
  max-width: 900px;
  margin: 0 auto;
}

.projects__heading {
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 2rem;
}

.projects__subheading {
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(38, 70, 83, 0.5);
  margin-bottom: 1.5rem;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.projects__list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
