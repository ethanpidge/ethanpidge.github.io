<template>
  <section id="about" class="about">
    <div class="about__inner">
      <h2 class="about__heading reveal">About</h2>
      <div class="about__text reveal">
        <p>
          I'm a front-end developer based in Devon with over eight years of experience building for the web.
          I joined <strong>SparkTSL</strong> straight out of college as an apprentice and never looked back
          — working my way up from handling support tickets and designing UI mockups to leading front-end
          builds for clients such as <strong>Starbucks</strong>, <strong>Wilko</strong>,
          and hundreds of <strong>NHS</strong> sites across the UK.
        </p>
        <p>
          I chose an apprenticeship over university because I've always learned best by doing. Whether it's
          picking up a new framework, fine-tuning responsive layouts, or configuring a Linux environment from
          scratch — I'm happiest when I'm solving real problems hands-on.
        </p>
        <p>
          Outside of work, I build freelance websites for friends and family using Nuxt.js. I care about clean
          code, fast load times, and interfaces that just feel right.
        </p>
      </div>
    </div>
    <TechStack />
    <SkillsMarquee />
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about {
  background: #faf5e4;
  color: #264653;
  padding: 6rem 2rem 3rem;
}

.about__inner {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 3rem;
  align-items: start;
}

.about__heading {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #264653;
  position: sticky;
  top: 2rem;
}

.about__text p {
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1.25rem;
  color: #3d5a68;
}

.about__text strong {
  color: #264653;
  font-weight: 700;
}

@media (max-width: 768px) {
  .about__inner {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .about__heading {
    position: relative;
    top: auto;
  }
}
</style>
