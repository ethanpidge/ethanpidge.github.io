<template>
  <section id="home" class="hero">
    <div class="hero__orb" />
    <div class="hero__content">
      <div class="hero__sticker">
        <img 
          src="/img/hello-sticker.png" 
          alt="Hello my name is sticker" 
          class="hero__sticker-img" 
        />
        <span class="hero__sticker-name">Ethan Pidgeon</span>
      </div>
      <h2 class="hero__typewriter">
        <span class="hero__typed">{{ displayText }}<span class="hero__cursor">|</span></span>
      </h2>
      <p class="hero__sub">Building performant web experiences for 7+ years</p>
      <div class="hero__links">
        <a href="https://github.com/ethanpidge" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:ethanpidge@gmail.com">Email</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const phrases = ['Front-End Developer', 'Based in Exeter', 'UI/UX Tinkerer', 'Lifelong Learner']
const displayText = ref('')
const currentPhraseIndex = ref(0)
const isDeleting = ref(false)

function typewrite() {
  const currentPhrase = phrases[currentPhraseIndex.value]
  if (!currentPhrase) return

  if (!isDeleting.value) {
    displayText.value = currentPhrase.slice(0, displayText.value.length + 1)
    if (displayText.value === currentPhrase) {
      setTimeout(() => { isDeleting.value = true; typewrite() }, 2000)
      return
    }
  } else {
    displayText.value = currentPhrase.slice(0, displayText.value.length - 1)
    if (displayText.value === '') {
      isDeleting.value = false
      currentPhraseIndex.value = (currentPhraseIndex.value + 1) % phrases.length
    }
  }

  setTimeout(typewrite, isDeleting.value ? 40 : 80)
}

onMounted(() => {
  setTimeout(typewrite, 1000)
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #264653;
  position: relative;
  overflow: hidden;
  padding: 2rem;
}

.hero__orb {
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(233, 196, 106, 0.12) 0%, rgba(42, 157, 143, 0.08) 40%, transparent 70%);
  filter: blur(80px);
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  animation: hero-float 12s ease-in-out infinite;
}

@keyframes hero-float {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-55%, -45%) scale(1.05); }
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
}

.hero__sticker {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

.hero__sticker-img {
  width: clamp(280px, 50vw, 480px);
  height: auto;
  display: block;
  filter: drop-shadow(0 4px 24px rgba(0, 0, 0, 0.3));
}

.hero__sticker-name {
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-handwriting, 'EduSABeginner', cursive);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #264653;
  white-space: nowrap;
  pointer-events: none;
}

.hero__typewriter {
  font-family: var(--font-primary, 'JosefinSans', sans-serif);
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 300;
  color: #e9c46a;
  margin: 1rem 0;
  min-height: 3rem;
  letter-spacing: 0.02em;
}

.hero__cursor {
  animation: cursor-blink 0.8s step-end infinite;
  color: #e9c46a;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero__sub {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2rem;
}

.hero__links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.hero__links a {
  padding: 0.7rem 1.75rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 9999px;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.25s;
}

.hero__links a:hover {
  background: #e9c46a;
  border-color: #e9c46a;
  color: #264653;
}

@media (max-width: 768px) {
  .hero__links {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 500px) {
  .hero__sticker-img {
    width: 240px;
  }

  .hero__sticker-name {
    font-size: 1.6rem;
    bottom: 28%;
  }
}
</style>
