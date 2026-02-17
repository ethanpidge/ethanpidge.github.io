<template>
  <div class="project reveal">
    <div class="project__info">
      <span class="project__type">{{ project.type }}</span>
      <h3 class="project__name">{{ project.name }}</h3>
      <p class="project__desc">{{ project.description }}</p>
      <div class="project__tags">
        <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
    <div class="project__mockup">
      <BrowserMockup />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface PortalProject {
  name: string
  type: string
  description: string
  tags: string[]
}

defineProps<{
  project: PortalProject
}>()
</script>

<style scoped>
.project {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 1.75rem 2rem;
  border-radius: 12px;
  color: #264653;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid rgba(38, 70, 83, 0.1);
}

.project:hover {
  background: rgba(38, 70, 83, 0.06);
  border-color: rgba(38, 70, 83, 0.15);
}

.project__type {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(38, 70, 83, 0.5);
  margin-bottom: 0.25rem;
}

.project__info {
  flex: 1;
}

.project__mockup {
  flex-shrink: 0;
  width: 200px;
}

.project__name {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  transition: letter-spacing 0.3s;
}

.project:hover .project__name {
  letter-spacing: 0.02em;
}

.project__desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(38, 70, 83, 0.75);
  margin-bottom: 0.75rem;
}

.project__tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.project__tags span {
  padding: 0.25rem 0.7rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(38, 70, 83, 0.1);
  color: #264653;
}

.project:hover :deep(.mockup) {
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .project__mockup {
    width: 140px;
  }
}

@media (max-width: 500px) {
  .project__mockup {
    display: none;
  }
}
</style>
