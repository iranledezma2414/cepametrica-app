<template>
  <div class="relative min-h-screen overflow-hidden flex flex-col font-sans transition-colors duration-500 bg-slate-50 dark:bg-[#0A0F16]">
    
    <nav class="fixed top-0 w-full z-50 border-b transition-colors duration-500 bg-white/70 border-slate-200 dark:bg-[#0A0F16]/80 dark:border-white/10 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          
          <div class="flex-shrink-0 flex items-center">
            <span class="font-black text-xl tracking-widest text-slate-800 dark:text-[#C0C0C0] uppercase">
              Cepamétrica
            </span>
          </div>

          <div class="hidden md:flex space-x-8 items-center">
            <a href="#" class="text-sm font-semibold transition-colors text-slate-600 hover:text-[#116A64] dark:text-slate-300 dark:hover:text-[#116A64]">Inicio</a>
            <a href="#" class="text-sm font-semibold transition-colors text-slate-600 hover:text-[#116A64] dark:text-slate-300 dark:hover:text-[#116A64]">Telemetría</a>
            <a href="#" class="text-sm font-semibold transition-colors text-slate-600 hover:text-[#116A64] dark:text-slate-300 dark:hover:text-[#116A64]">Tecnología B2B</a>
            <a href="#" class="text-sm font-semibold transition-colors text-slate-600 hover:text-[#116A64] dark:text-slate-300 dark:hover:text-[#116A64]">Nosotros</a>
          </div>

          <div class="flex items-center space-x-2 md:space-x-4">
            
            <button @click="toggleTheme" class="p-2 rounded-full transition-all duration-300 bg-slate-200 text-slate-600 hover:bg-slate-300 dark:bg-[#1C3B5E]/50 dark:text-[#C0C0C0] dark:hover:bg-[#1C3B5E]">
              <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
            </button>

            <button @click="toggleMobileMenu" class="md:hidden p-2 rounded-md transition-colors text-slate-600 hover:text-[#116A64] hover:bg-slate-100 dark:text-[#C0C0C0] dark:hover:text-white dark:hover:bg-[#1C3B5E]/50">
              <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

          </div>
        </div>
      </div>

      <div v-show="isMobileMenuOpen" class="md:hidden border-t border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0A0F16]/95 backdrop-blur-md">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#116A64] dark:text-[#C0C0C0] dark:hover:bg-[#1C3B5E]/30 dark:hover:text-[#116A64]">Inicio</a>
          <a href="#" class="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#116A64] dark:text-[#C0C0C0] dark:hover:bg-[#1C3B5E]/30 dark:hover:text-[#116A64]">Telemetría</a>
          <a href="#" class="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#116A64] dark:text-[#C0C0C0] dark:hover:bg-[#1C3B5E]/30 dark:hover:text-[#116A64]">Tecnología B2B</a>
          <a href="#" class="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#116A64] dark:text-[#C0C0C0] dark:hover:bg-[#1C3B5E]/30 dark:hover:text-[#116A64]">Nosotros</a>
        </div>
      </div>
    </nav>

    <div class="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1C3B5E15_1px,transparent_1px),linear-gradient(to_bottom,#1C3B5E15_1px,transparent_1px)] bg-[size:4rem_4rem] transition-colors duration-500"></div>
    
    <div class="absolute inset-0 z-0">
      <ClientOnly>
        <div v-for="n in 60" :key="n" class="spore absolute rounded-full" :style="getSporeStyle()"></div>
      </ClientOnly>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
}

// Generador de estilos para las esporas
const getSporeStyle = () => {
  const size = Math.random() * 5 + 2 
  const left = Math.random() * 100 
  const duration = Math.random() * 20 + 10 
  const delay = Math.random() * -30 
  const isBioteal = Math.random() > 0.4 

  const color = isBioteal ? '#116A64' : '#1C3B5E'
  const glow = isBioteal ? 'rgba(17, 106, 100, 0.6)' : 'rgba(28, 59, 94, 0.6)'

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    bottom: '-20px', 
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    backgroundColor: color,
    boxShadow: `0 0 ${size * 2.5}px ${glow}`,
  }
}

onMounted(() => {
  if (localStorage.theme === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    isDark.value = true
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  }
})
</script>

<style scoped>
/* ESTILOS DE LA ANIMACIÓN (Si esto falta, las esporas no se mueven) */
.spore {
  opacity: 0;
  animation: floatUp linear infinite;
}

@keyframes floatUp {
  0% { transform: translateY(0) scale(0.5) translateX(0); opacity: 0; }
  15% { opacity: 0.8; }
  50% { transform: translateY(-50vh) scale(1.2) translateX(25px); }
  85% { opacity: 0.8; }
  100% { transform: translateY(-100vh) scale(0.5) translateX(-25px); opacity: 0; }
}
</style>