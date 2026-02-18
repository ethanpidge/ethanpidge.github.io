<template>
  <div class="mockup">
    <div class="mockup__bar"><span /><span /><span /></div>
    <div class="mockup__body">
      <img v-if="image" :src="image" :alt="alt" class="mockup__image" loading="lazy" />
      <slot v-else>
        <div class="mockup__placeholder">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
          <span>Preview Coming Soon</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  image?: string
  alt?: string
}>(), {
  alt: 'Project screenshot'
})
</script>

<style scoped>
.mockup {
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid rgba(38, 70, 83, 0.15);
  background: #fff;
  transition: transform 0.3s;
}

.mockup__bar {
  display: flex;
  gap: 5px;
  padding: 8px 10px;
  background: rgba(38, 70, 83, 0.05);
  border-bottom: 1px solid rgba(38, 70, 83, 0.08);
}

.mockup__bar span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(38, 70, 83, 0.15);
}

.mockup__body {
  padding: 0;
}

.mockup__image {
  display: block;
  width: 100%;
  height: auto;
}

.mockup__placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem 1rem;
  color: rgba(38, 70, 83, 0.25);
}

.mockup__placeholder span {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
</style>
