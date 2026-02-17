<template>
  <Transition name="nav-transition">
    <nav v-if="open" class="overlay-nav" @click.self="$emit('close')">
      <a
        v-for="item in items"
        :key="item.id"
        :href="`#${item.id}`"
        @click.prevent="handleClick(item.id)"
      >
        {{ item.label }}
      </a>
    </nav>
  </Transition>
</template>

<script setup lang="ts">
interface NavItem {
  id: string
  label: string
}

const props = defineProps<{
  open: boolean
  items: NavItem[]
}>()

const emit = defineEmits<{
  close: []
  navigate: [id: string]
}>()

function handleClick(id: string) {
  emit('close')
  emit('navigate', id)
}
</script>

<style scoped>
.overlay-nav {
  position: fixed;
  inset: 0;
  z-index: 99;
  background: rgba(26, 47, 58, 0.97);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.overlay-nav a {
  font-family: var(--font-primary, 'JosefinSans', sans-serif);
  font-size: clamp(2.5rem, 7vw, 5rem);
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s;
  line-height: 1.2;
}

.overlay-nav a:hover {
  color: #e9c46a;
}

.nav-transition-enter-active,
.nav-transition-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.nav-transition-enter-from,
.nav-transition-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
