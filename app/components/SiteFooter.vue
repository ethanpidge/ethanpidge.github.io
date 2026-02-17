<template>
  <footer class="site-footer">
    <h2 class="site-footer__heading reveal">Let's work together</h2>
    <div class="site-footer__links reveal">
      <a href="mailto:ethanpidge@gmail.com">ethanpidge@gmail.com</a>
      <a href="https://github.com/ethanpidge" target="_blank" rel="noopener noreferrer">github.com/ethanpidge</a>
    </div>
    <p class="site-footer__copy reveal">&copy; {{ currentYear }} Ethan Pidgeon</p>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  background: #1a2f3a;
  color: #ffffff;
  padding: 5rem 2rem 3rem;
  text-align: center;
}

.site-footer__heading {
  font-family: var(--font-handwriting, 'EduSABeginner', cursive);
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 2rem;
}

.site-footer__links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.site-footer__links a {
  font-size: 1.15rem;
  font-weight: 600;
  color: #e9c46a;
  text-decoration: none;
  transition: opacity 0.2s;
}

.site-footer__links a:hover {
  opacity: 0.7;
}

.site-footer__copy {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.4);
}
</style>
