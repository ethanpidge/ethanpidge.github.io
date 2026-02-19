<template>
  <div class="tech-stack reveal">
    <div class="tech-stack__section">
      <h3 class="tech-stack__heading">Proficient In</h3>
      <div class="tech-stack__grid">
        <div v-for="tech in proficient" :key="tech.name" class="tech-stack__item">
          <img 
            :src="`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-${tech.variant || 'original'}.svg`" 
            :alt="tech.name"
            class="tech-stack__icon"
            loading="lazy"
          />
          <span class="tech-stack__name">{{ tech.name }}</span>
        </div>
      </div>
    </div>

    <div class="tech-stack__section">
      <h3 class="tech-stack__heading">Experience With</h3>
      <div class="tech-stack__grid">
        <div v-for="tech in experienced" :key="tech.name" class="tech-stack__item">
          <img 
            :src="`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-${tech.variant || 'original'}.svg`" 
            :alt="tech.name"
            class="tech-stack__icon"
            loading="lazy"
          />
          <span class="tech-stack__name">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Technology {
  name: string
  icon: string
  variant?: string
}

const proficient: Technology[] = [
  { name: 'HTML', icon: 'html5' },
  { name: 'CSS', icon: 'css3' },
  { name: 'Sass', icon: 'sass' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Vue.js', icon: 'vuejs' },
  { name: 'Nuxt', icon: 'nuxtjs' },
  { name: 'PHP', icon: 'php' },
  { name: 'jQuery', icon: 'jquery' },
  { name: 'Bootstrap', icon: 'bootstrap' },
  { name: 'Git', icon: 'git' },
  { name: 'Linux', icon: 'linux' },
  { name: 'npm', icon: 'npm', variant: 'original-wordmark' },
  { name: 'Composer', icon: 'composer' },
]

const experienced: Technology[] = [
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Tailwind', icon: 'tailwindcss' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'C#', icon: 'csharp' },
  { name: 'Blazor', icon: 'blazor' },
  { name: 'Symfony', icon: 'symfony' },
  { name: 'AWS', icon: 'amazonwebservices', variant: 'original-wordmark' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Photoshop', icon: 'photoshop' },
  { name: 'Illustrator', icon: 'illustrator' },
  { name: 'XD', icon: 'xd' },
]
</script>

<style scoped>
.tech-stack {
  max-width: 800px;
  margin: 3rem auto 0;
  padding: 0 0;
}

.tech-stack__section {
  margin-bottom: 2.5rem;
}

.tech-stack__section:last-child {
  margin-bottom: 0;
}

.tech-stack__heading {
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(38, 70, 83, 0.5);
  margin-bottom: 1.5rem;
}

.tech-stack__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1.5rem;
}

.tech-stack__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  border: 2px solid rgba(38, 70, 83, 0.1);
  transition: all 0.3s ease;
}

.tech-stack__item:hover {
  background: rgba(38, 70, 83, 0.06);
  border-color: rgba(38, 70, 83, 0.2);
  transform: translateY(-2px);
}

.tech-stack__icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.tech-stack__name {
  font-size: 0.75rem;
  font-weight: 600;
  color: #264653;
  text-align: center;
}

@media (max-width: 600px) {
  .tech-stack__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  .tech-stack__item {
    padding: 0.6rem 0.4rem;
  }

  .tech-stack__icon {
    width: 28px;
    height: 28px;
  }

  .tech-stack__name {
    font-size: 0.65rem;
  }
}
</style>
