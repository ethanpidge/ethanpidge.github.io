<template>
  <header class="site-header">
    <button 
      class="site-hamburger" 
      :class="{ 'is-open': navOpen }"
      @click="$emit('toggle')" 
      :aria-label="navOpen ? 'Close menu' : 'Open menu'"
    >
      <span />
      <span />
    </button>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  navOpen: boolean
}>()

defineEmits<{
  toggle: []
}>()
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.25rem 2rem;
  pointer-events: none;
}

.site-hamburger {
  pointer-events: auto;
  background: none;
  border: none;
  cursor: pointer;
  width: 36px;
  height: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.site-hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: #ffffff;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.site-hamburger.is-open span:first-child {
  transform: translateY(11px) rotate(45deg);
}

.site-hamburger.is-open span:last-child {
  transform: translateY(-11px) rotate(-45deg);
}
</style>
