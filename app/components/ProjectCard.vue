<template>
  <a
    :href="project.url"
    target="_blank"
    rel="noopener noreferrer"
    class="project-card reveal"
  >
    <div class="project-card__mockup">
      <BrowserMockup :image="project.image" />
    </div>
    <h4 class="project-card__name">{{ project.name }}</h4>
    <p class="project-card__desc">{{ project.description }}</p>
    <div class="project-card__tags">
      <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
export interface FreelanceProject {
  name: string
  description: string
  tags: string[]
  url: string
  image?: string
}

defineProps<{
  project: FreelanceProject
}>()
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid rgba(38, 70, 83, 0.1);
  text-decoration: none;
  color: #264653;
  transition: all 0.3s ease;
}

.project-card:hover {
  background: rgba(38, 70, 83, 0.06);
  border-color: rgba(38, 70, 83, 0.2);
  transform: translateY(-4px);
}

.project-card__mockup {
  margin-bottom: 1rem;
}

.project-card__name {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.project-card__desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(38, 70, 83, 0.7);
  margin-bottom: 0.75rem;
  flex: 1;
}

.project-card__tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.project-card__tags span {
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.72rem;
  font-weight: 700;
  background: rgba(38, 70, 83, 0.1);
  color: #264653;
}
</style>
