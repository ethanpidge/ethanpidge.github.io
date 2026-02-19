<template>
  <div class="marquee reveal">
    <div class="marquee__track">
      <span v-for="n in 2" :key="n" class="marquee__set">
        <span v-for="skill in skills" :key="skill + n" class="marquee__item">{{ skill }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  'HTML', 'CSS/SASS', 'JavaScript', 'Vue.js', 'Nuxt.js', 'jQuery', 'Tailwind CSS', 'Bootstrap', 'Blazor (C#)',
  'PHP', 'CodeIgniter', 'Symfony', 'MySQL', 'REST APIs', 'Git', 'Linux/CLI', 'AWS', 'npm/pnpm', 'Composer',
  'Jest/Jasmine', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Node.js',
]
</script>

<style scoped>
.marquee {
  margin-top: 3rem;
  overflow: hidden;
  padding: 1.5rem 0;
  border-top: 2px solid rgba(38, 70, 83, 0.1);
  border-bottom: 2px solid rgba(38, 70, 83, 0.1);
  position: relative;
}

.marquee::before,
.marquee::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 2;
  pointer-events: none;
}

.marquee::before {
  left: 0;
  background: linear-gradient(to right, #faf5e4, transparent);
}

.marquee::after {
  right: 0;
  background: linear-gradient(to left, #faf5e4, transparent);
}

.marquee__track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 30s linear infinite;
}

.marquee__track:hover {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.marquee__set {
  display: flex;
  gap: 2rem;
  padding-right: 2rem;
}

.marquee__item {
  font-size: 1rem;
  font-weight: 600;
  color: #264653;
  white-space: nowrap;
  padding: 0.5rem 1rem 0.4rem;
  border-radius: 9999px;
  border: 1.5px solid rgba(38, 70, 83, 0.2);
  transition: all 0.25s;
}

.marquee__item:hover {
  background: #e9c46a;
  border-color: #e9c46a;
  color: #264653;
}
</style>
