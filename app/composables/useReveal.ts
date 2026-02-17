/**
 * Composable for handling reveal animations on scroll
 * Elements with the 'reveal' class will fade in when they enter the viewport
 */
export function useReveal() {
  onMounted(() => {
    const reveals = document.querySelectorAll('.reveal')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    
    reveals.forEach(el => observer.observe(el))
  })
}
