<template>
  <div class="relative w-full min-h-screen font-sans transition-colors duration-500 bg-slate-50 dark:bg-[#0A0F16] text-slate-900 dark:text-white">
    
    <div class="fixed inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1C3B5E15_1px,transparent_1px),linear-gradient(to_bottom,#1C3B5E15_1px,transparent_1px)] bg-[size:4rem_4rem] transition-colors duration-500 pointer-events-none"></div>
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <ClientOnly>
        <div v-for="n in 60" :key="n" class="spore absolute rounded-full" :style="getSporeStyle()"></div>
      </ClientOnly>
    </div>

    <div class="relative z-10 flex flex-col w-full">

      <nav class="fixed top-0 w-full z-50 border-b transition-colors duration-500 bg-white/70 border-slate-200 dark:bg-[#0A0F16]/80 dark:border-white/10 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex-shrink-0 flex items-center">
              <span class="font-black text-xl tracking-widest text-slate-800 dark:text-[#C0C0C0] uppercase">Cepamétrica</span>
            </div>
            <div class="hidden md:flex space-x-8 items-center">
              <a href="#" class="text-sm font-semibold transition-colors text-slate-600 hover:text-[#116A64] dark:text-slate-300 dark:hover:text-[#116A64]">Inicio</a>
              <a href="#telemetria" class="text-sm font-semibold transition-colors text-slate-600 hover:text-[#116A64] dark:text-slate-300 dark:hover:text-[#116A64]">Telemetría</a>
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
      </nav>

      <main class="flex flex-col items-center justify-center min-h-screen px-4 pt-16 pointer-events-none">
        <div class="relative flex flex-col items-center p-8 md:p-16 transition-colors duration-500 bg-white/60 dark:bg-[#0A0F16]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2rem] shadow-2xl dark:shadow-[#116A64]/10 max-w-4xl w-full text-center pointer-events-auto">
          <span class="px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] uppercase border rounded-full transition-colors duration-500 bg-slate-100 text-[#1C3B5E] border-slate-300 dark:bg-[#1C3B5E]/40 dark:text-[#C0C0C0] dark:border-[#1C3B5E]">Sistema Ciberfísico B2B</span>
          <h1 class="text-5xl md:text-7xl font-black tracking-tight mb-6 transition-colors duration-500 text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#116A64] dark:to-[#1C3B5E]">Ingeniería en <br class="hidden md:block" /> cada espora.</h1>
          <p class="text-base md:text-lg mb-10 max-w-2xl font-medium transition-colors duration-500 text-slate-600 dark:text-slate-400">Control paramétrico y trazabilidad absoluta de biomasa fúngica para la industria alimentaria. Validado mediante telemetría IoT.</p>
          <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#telemetria" class="px-8 py-3.5 font-bold text-white rounded-xl shadow-lg transition-all duration-300 bg-[#116A64] hover:bg-[#0d4f4a] hover:-translate-y-1 hover:shadow-[#116A64]/40 text-center">Acceder a Telemetría</a>
            <button class="px-8 py-3.5 font-bold rounded-xl border-2 transition-all duration-300 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-[#1C3B5E] dark:text-[#C0C0C0] dark:hover:bg-[#1C3B5E]/30 hover:-translate-y-1">Ver Memoria Técnica</button>
          </div>
        </div>
      </main>

      <section id="telemetria" class="w-full max-w-7xl mx-auto px-4 py-24 pointer-events-auto scroll-mt-16">
        
        <div class="mb-16 text-center md:text-left slide-in-bottom">
          <h2 class="text-4xl md:text-6xl font-bold tracking-tighter mb-2 text-slate-900 dark:text-white">
            Telemetría avanzada. <br class="hidden md:block" />
            <span class="text-slate-400 dark:text-slate-500">Datos precisos al instante.</span>
          </h2>
          
          <div class="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 px-5 py-3 rounded-2xl bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm">
            <div class="flex items-center gap-2">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span class="text-sm font-semibold text-slate-600 dark:text-slate-300">
                API Meteorológica (Nezahualcóyotl): 
                <span v-if="externalTemp !== null" class="font-black text-slate-900 dark:text-white">{{ externalTemp }}°C</span>
                <span v-else class="animate-pulse">Sincronizando...</span>
              </span>
            </div>
            
            <span v-if="externalTemp !== null" class="text-xs font-bold px-3 py-1 rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
              Δ Diferencial de Aislamiento: {{ Math.abs((21.5 - externalTemp).toFixed(1)) }}°C
            </span>
          </div>
        </div>

        <div class="flex overflow-x-auto pb-12 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbar">
          
          <div class="min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-center flex flex-col justify-between p-8 md:p-10 transition-all duration-500 bg-white/60 dark:bg-[#1A1A1E]/60 backdrop-blur-3xl border border-black/[0.04] dark:border-white/[0.05] rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:scale-[1.02] group">
            <div class="flex justify-between items-start mb-12">
              <div class="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.866 8.21 8.21 0 003 2.48z" /></svg>
              </div>
              <span class="px-4 py-1.5 text-xs font-bold tracking-wide rounded-full bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300 uppercase">En Rango</span>
            </div>
            <div>
              <p class="text-sm font-bold text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">Temperatura</p>
              <h3 class="text-6xl font-semibold tracking-tighter text-slate-900 dark:text-white flex items-baseline">
                21.5<span class="text-3xl text-slate-400 font-medium tracking-normal ml-1">°C</span>
              </h3>
            </div>
            <div class="mt-8 pt-6 border-t border-black/5 dark:border-white/10">
              <div class="w-full h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                <div class="bg-orange-500 h-full rounded-full w-[85%] origin-left animate-[scaleX_1.5s_ease-out]"></div>
              </div>
              <div class="flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mt-4">
                <span>Mín: 15°</span><span>Ideal: 22°</span>
              </div>
            </div>
          </div>

          <div class="min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-center flex flex-col justify-between p-8 md:p-10 transition-all duration-500 bg-white/60 dark:bg-[#1A1A1E]/60 backdrop-blur-3xl border border-black/[0.04] dark:border-white/[0.05] rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:scale-[1.02] group">
            <div class="flex justify-between items-start mb-12">
              <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 dark:bg-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
              </div>
              <span class="px-4 py-1.5 text-xs font-bold tracking-wide rounded-full bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300 uppercase">En Rango</span>
            </div>
            <div>
              <p class="text-sm font-bold text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">Humedad Rel.</p>
              <h3 class="text-6xl font-semibold tracking-tighter text-slate-900 dark:text-white flex items-baseline">
                88<span class="text-3xl text-slate-400 font-medium tracking-normal ml-1">%</span>
              </h3>
            </div>
            <div class="mt-8 pt-6 border-t border-black/5 dark:border-white/10">
              <div class="w-full h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                <div class="bg-blue-500 h-full rounded-full w-[70%] origin-left animate-[scaleX_1.5s_ease-out_0.2s_both]"></div>
              </div>
              <div class="flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mt-4">
                <span>Obj: 80%</span><span>Max: 95%</span>
              </div>
            </div>
          </div>

          <div class="min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-center flex flex-col justify-between p-8 md:p-10 transition-all duration-500 bg-white/60 dark:bg-[#1A1A1E]/60 backdrop-blur-3xl border border-black/[0.04] dark:border-white/[0.05] rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:scale-[1.02] group">
            <div class="flex justify-between items-start mb-12">
              <div class="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-500 dark:bg-purple-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
              </div>
              <span class="px-4 py-1.5 text-xs font-bold tracking-wide rounded-full bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300 uppercase">Estable</span>
            </div>
            <div>
              <p class="text-sm font-bold text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">Nivel de pH</p>
              <h3 class="text-6xl font-semibold tracking-tighter text-slate-900 dark:text-white flex items-baseline">6.2</h3>
            </div>
            <div class="mt-8 pt-6 border-t border-black/5 dark:border-white/10">
              <div class="w-full h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                <div class="bg-purple-500 h-full rounded-full w-[60%] origin-left animate-[scaleX_1.5s_ease-out_0.4s_both]"></div>
              </div>
              <div class="flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mt-4">
                <span>Rango: 5.5</span><span>Max: 6.5</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="tecnologia" class="w-full max-w-7xl mx-auto px-4 py-24 pointer-events-auto scroll-mt-16 border-t border-slate-200/50 dark:border-white/5">
        
        <div class="mb-16 text-center md:text-left slide-in-bottom">
          <h2 class="text-4xl md:text-6xl font-bold tracking-tighter mb-2 text-slate-900 dark:text-white">
            Tres capas. <br class="hidden md:block" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#116A64] to-[#1C3B5E] dark:from-[#4fd1c5] dark:to-[#63b3ed]">Un solo ecosistema.</span>
          </h2>
          <p class="text-lg text-slate-500 dark:text-slate-500 font-medium mt-4 max-w-2xl">
            La arquitectura de Cepamétrica elimina la fricción entre el cultivo biológico y la trazabilidad industrial.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          <div class="flex flex-col p-8 md:p-10 transition-all duration-500 bg-white/60 dark:bg-[#1A1A1E]/60 backdrop-blur-3xl border border-black/[0.04] dark:border-white/[0.05] rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:-translate-y-2 hover:shadow-xl group">
            <div class="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400 mb-8 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Capa Biológica</h3>
            <p class="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
              Gestión térmica del <span class="italic">Pleurotus ostreatus</span>. Mantenemos curvas de 15°C a 22°C para evitar la desnaturalización y maximizar la síntesis de biomasa proteica en nuestra matriz de prueba.
            </p>
            <div class="pt-6 border-t border-black/5 dark:border-white/10">
              <span class="text-xs font-bold uppercase tracking-widest text-slate-400">Proceso Core</span>
            </div>
          </div>

          <div class="flex flex-col p-8 md:p-10 transition-all duration-500 bg-white/60 dark:bg-[#1A1A1E]/60 backdrop-blur-3xl border border-black/[0.04] dark:border-white/[0.05] rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:-translate-y-2 hover:shadow-xl group">
            <div class="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 mb-8 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Capa Física (IoT)</h3>
            <p class="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
              Nodos de hardware distribuido. Microcontrolador central (Arduino Mega) procesando telemetría de sensores LM35 y FC-28 con tasa de muestreo en tiempo real.
            </p>
            <div class="pt-6 border-t border-black/5 dark:border-white/10">
              <span class="text-xs font-bold uppercase tracking-widest text-slate-400">Infraestructura</span>
            </div>
          </div>

          <div class="flex flex-col p-8 md:p-10 transition-all duration-500 bg-white/60 dark:bg-[#1A1A1E]/60 backdrop-blur-3xl border border-black/[0.04] dark:border-white/[0.05] rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:-translate-y-2 hover:shadow-xl group">
            <div class="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 mb-8 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Capa Lógica</h3>
            <p class="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
              Interfaz corporativa desarrollada en Nuxt 3 y Vue. El motor de software ingesta, procesa y visualiza la telemetría, garantizando trazabilidad absoluta para el cliente final B2B.
            </p>
            <div class="pt-6 border-t border-black/5 dark:border-white/10">
              <span class="text-xs font-bold uppercase tracking-widest text-slate-400">Frontend / Plataforma</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)
const isMobileMenuOpen = ref(false)
const externalTemp = ref(null) // Estado para guardar la temperatura de la API

// --- LÓGICA DE LA API METEOROLÓGICA ---
const fetchExternalWeather = async () => {
  try {
    // API de Open-Meteo configurada para las coordenadas de Nezahualcóyotl
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=19.4006&longitude=-98.9904&current_weather=true')
    const data = await response.json()
    // Extraemos la temperatura y la guardamos en la variable reactiva
    externalTemp.value = data.current_weather.temperature
  } catch (error) {
    console.error("Error conectando con la API del clima:", error)
  }
}

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

const getSporeStyle = () => {
  if (typeof window === 'undefined') return {}
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
  // Ejecutamos la llamada a la API en cuanto la página carga
  fetchExternalWeather()

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
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.spore { opacity: 0; animation: floatUp linear infinite; }
@keyframes floatUp {
  0% { transform: translateY(0) scale(0.5) translateX(0); opacity: 0; }
  15% { opacity: 0.8; }
  50% { transform: translateY(-50vh) scale(1.2) translateX(25px); }
  85% { opacity: 0.8; }
  100% { transform: translateY(-110vh) scale(0.5) translateX(-25px); opacity: 0; }
}

@keyframes scaleX { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } }
.slide-in-bottom { animation: slideInBottom 0.8s ease-out both; }
@keyframes slideInBottom { 0% { transform: translateY(30px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
</style>