<template>
  <div class="timeline__item reveal">
    <div 
      class="timeline__dot" 
      :class="{ 
        'timeline__dot--active': active,
        'timeline__dot--edu': variant === 'education'
      }" 
    />
    <div class="timeline__card">
      <span class="timeline__date">{{ date }}</span>
      <h3 class="timeline__role">{{ title }}</h3>
      <h4 class="timeline__company">{{ subtitle }}</h4>
      
      <!-- Job details -->
      <ul v-if="details && details.length" class="timeline__details">
        <li v-for="(d, j) in details" :key="j">{{ d }}</li>
      </ul>
      
      <!-- Education extras -->
      <p v-if="grade" class="timeline__grade">{{ grade }}</p>
      <p v-if="subjects" class="timeline__subjects">{{ subjects }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  date: string
  title: string
  subtitle: string
  details?: string[]
  grade?: string
  subjects?: string
  active?: boolean
  variant?: 'experience' | 'education'
}>()
</script>

<style scoped>
.timeline__item {
  position: relative;
  padding-bottom: 1.5rem;
}

.timeline__item:last-child {
  padding-bottom: 0;
}

.timeline__dot {
  position: absolute;
  left: -34px;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #e9c46a;
  border: 3px solid #1a2f3a;
  z-index: 1;
  transition: box-shadow 0.5s ease;
}

.timeline__dot--active {
  box-shadow: 0 0 0 6px rgba(233, 196, 106, 0.25);
  animation: dot-pulse 1s ease-out;
}

.timeline__dot--edu {
  background: #e9c46a;
  border-color: #1a2f3a;
}

@keyframes dot-pulse {
  0% { box-shadow: 0 0 0 0 rgba(233, 196, 106, 0.5); }
  100% { box-shadow: 0 0 0 10px rgba(233, 196, 106, 0); }
}

.timeline__card {
  background: rgba(255, 255, 255, 0.05);
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 1.75rem 2rem;
  transition: all 0.3s ease;
}

.timeline__card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(233, 196, 106, 0.35);
  transform: translateY(-2px);
}

.timeline__date {
  display: inline-block;
  padding: 0.2rem 0.75rem;
  border-radius: 9999px;
  background: rgba(233, 196, 106, 0.15);
  border: 1px solid rgba(233, 196, 106, 0.25);
  font-size: 0.78rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.75rem;
}

.timeline__role {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.15rem;
}

.timeline__company {
  font-size: 0.92rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.75rem;
}

.timeline__grade {
  font-size: 0.92rem;
  font-weight: 600;
  color: #e9c46a;
  margin-top: 0.25rem;
}

.timeline__subjects {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.35rem;
  font-style: italic;
}

.timeline__details {
  list-style: none;
  padding: 0;
}

.timeline__details li {
  font-size: 0.88rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.35rem;
  padding-left: 1.15rem;
  position: relative;
}

.timeline__details li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: #e9c46a;
}

@media (max-width: 500px) {
  .timeline__dot {
    left: -24px;
  }

  .timeline__card {
    padding: 1.25rem 1.25rem;
  }
}
</style>
