<template>
  <section id="comando-central" class="w-full max-w-[90rem] mx-auto px-4 lg:px-8 py-24 pointer-events-auto scroll-mt-16 border-t border-slate-200/50 dark:border-white/5">
    
    <div class="mb-10 flex flex-col md:flex-row items-end justify-between gap-6 slide-in-bottom">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <span class="px-3 py-1 text-[10px] font-black tracking-[0.2em] uppercase border rounded-full bg-[#116A64]/10 text-[#116A64] border-[#116A64]/20">
            Módulo Ciberfísico
          </span>
          <div class="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <div :class="connectionColor" class="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]"></div>
            <span class="text-[10px] font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
              {{ connectionStatus }}
            </span>
          </div>
        </div>
        <h2 class="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
          Centro de Comando.
        </h2>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      <div class="lg:col-span-8 relative group rounded-[2.5rem] bg-slate-900 overflow-hidden shadow-2xl border border-slate-800 flex flex-col isolate">
        
        <div class="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/20 z-20 rounded-tl-xl pointer-events-none"></div>
        <div class="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/20 z-20 rounded-br-xl pointer-events-none"></div>

        <div class="relative w-full aspect-video md:aspect-auto md:h-[600px] flex-grow flex items-center justify-center bg-black">
          <img v-if="isCameraActive" :src="`${esp32IP}:81/stream`" @error="handleVideoError" class="absolute inset-0 w-full h-full object-cover z-10 opacity-90" alt="Stream Cepamétrica" />
          
          <div v-else class="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-12 h-12 text-slate-700 mb-4"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
            <span class="font-mono text-xs font-bold text-slate-500 uppercase tracking-[0.4em]">Sin Señal Óptica</span>
          </div>

          <div v-if="isCameraActive" class="absolute inset-0 z-30 p-8 flex flex-col justify-between font-mono text-xs text-white/90 pointer-events-none">
            <div class="flex justify-between items-start">
              <div class="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                <div class="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                <span class="font-black tracking-widest text-white">LIVE</span>
                <span class="text-white/50 border-l border-white/20 pl-3 ml-1">{{ fakeFPS }} FPS</span>
              </div>
              <div class="bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-white/50 tracking-widest">
                PING: <span class="text-white">{{ fakeLatency }}ms</span>
              </div>
            </div>
            <div class="flex justify-between items-end">
              <div class="bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                ESP32-WROVER <span class="text-[#116A64] ml-2 font-bold">2.4GHz</span>
              </div>
              <div class="text-right">
                <span class="text-[10px] text-white/40 tracking-[0.3em]">SISTEMA DE VISIÓN</span><br>
                <span class="font-black tracking-widest">CEPAMÉTRICA AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-4 flex flex-col gap-6">
        
        <div class="relative overflow-hidden rounded-[2.5rem] p-8 transition-all duration-500 bg-white/60 dark:bg-[#1A1A1E]/80 backdrop-blur-3xl border border-slate-200 dark:border-white/5 shadow-xl flex flex-col justify-center min-h-[200px]">
          <div class="absolute -right-10 -top-10 w-40 h-40 bg-[#116A64] rounded-full blur-3xl opacity-10 dark:opacity-20"></div>
          
          <h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Enlace Visual</h3>
          
          <button @click="toggleCamera" :class="isCameraActive ? 'bg-red-500/10 text-red-600 border-red-500/20 hover:bg-red-500/20 dark:text-red-400' : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black hover:-translate-y-1 shadow-lg'" class="w-full py-5 rounded-2xl font-black text-sm tracking-widest transition-all duration-300 flex items-center justify-center gap-3 border">
            <svg v-if="!isCameraActive" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" /></svg>
            {{ isCameraActive ? 'APAGAR LUZ' : 'ENCENDER CÁMARA' }}
          </button>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div class="rounded-[2rem] p-6 bg-white/60 dark:bg-[#1A1A1E]/80 backdrop-blur-3xl border border-slate-200 dark:border-white/5 shadow-xl flex flex-col justify-between">
            <div class="w-10 h-10 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.866 8.21 8.21 0 003 2.48z" /></svg>
            </div>
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Temperatura</span>
            <span class="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
              {{ temperature ? temperature : '--' }}<span class="text-lg text-slate-400 font-medium ml-1">°C</span>
            </span>
          </div>

          <div class="rounded-[2rem] p-6 bg-white/60 dark:bg-[#1A1A1E]/80 backdrop-blur-3xl border border-slate-200 dark:border-white/5 shadow-xl flex flex-col justify-between">
            <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
            </div>
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Humedad</span>
            <span class="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
              {{ humidity ? humidity : '--' }}<span class="text-lg text-slate-400 font-medium ml-1">%</span>
            </span>
          </div>
        </div>

        <div class="rounded-[2.5rem] p-8 transition-all duration-500 bg-white/60 dark:bg-[#1A1A1E]/80 backdrop-blur-3xl border border-slate-200 dark:border-white/5 shadow-xl flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-6">
            <h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest">Actuador Hídrico</h3>
            <div :class="isWatering ? 'bg-blue-500 animate-pulse' : 'bg-slate-300 dark:bg-slate-700'" class="w-3 h-3 rounded-full"></div>
          </div>

          <button @click="triggerWatering" :disabled="isWatering" class="w-full py-5 rounded-2xl font-black text-sm tracking-widest transition-all duration-300 flex items-center justify-center gap-3 border mt-auto" :class="isWatering ? 'bg-blue-500/10 text-blue-500 border-blue-500/20 cursor-not-allowed' : 'bg-blue-600 text-white border-transparent hover:bg-blue-500 hover:-translate-y-1 shadow-[0_10px_25px_rgba(37,99,235,0.3)]'">
            <svg v-if="isWatering" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
            {{ isWatering ? 'NEBULIZANDO...' : 'INYECTAR RIEGO' }}
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const esp32IP = 'http://192.168.1.100' // <--- IP DE LA MAQUETA

const temperature = ref(null)
const humidity = ref(null)
const isCameraActive = ref(false)
const isWatering = ref(false)
const connectionStatus = ref('Buscando hardware...')

const fakeLatency = ref(12)
const fakeFPS = ref(29)
let hudInterval = null

const connectionColor = computed(() => {
  if (connectionStatus.value === 'Online') return 'bg-green-500'
  if (connectionStatus.value === 'Offline') return 'bg-red-500'
  return 'bg-amber-400'
})

const fetchSensorData = async () => {
  try {
    const res = await fetch(`${esp32IP}/sensor-data`, { signal: AbortSignal.timeout(3000) })
    const data = await res.json()
    temperature.value = data.temp
    humidity.value = data.hum
    connectionStatus.value = 'Online'
  } catch (err) {
    connectionStatus.value = 'Offline'
  }
}

const startHUD = () => {
  hudInterval = setInterval(() => { 
    fakeLatency.value = Math.floor(Math.random() * (25 - 10 + 1) + 10)
    fakeFPS.value = Math.floor(Math.random() * (30 - 27 + 1) + 27)
  }, 1500)
}
const stopHUD = () => { if (hudInterval) clearInterval(hudInterval) }

const toggleCamera = async () => {
  isCameraActive.value = !isCameraActive.value
  const state = isCameraActive.value ? 'on' : 'off'
  if (isCameraActive.value) startHUD(); else stopHUD();
  try { await fetch(`${esp32IP}/luz?state=${state}`, { mode: 'no-cors' }) } catch (e) { }
}

const handleVideoError = (e) => { e.target.style.display = 'none' }

const triggerWatering = async () => {
  isWatering.value = true
  try { await fetch(`${esp32IP}/riego`, { mode: 'no-cors' }) } catch (e) { }
  setTimeout(() => { isWatering.value = false }, 5000)
}

onMounted(() => {
  fetchSensorData()
  setInterval(fetchSensorData, 5000)
})

onUnmounted(() => { stopHUD() })
</script>

<style scoped>
.slide-in-bottom { animation: slideInBottom 0.8s ease-out both; }
@keyframes slideInBottom { 0% { transform: translateY(30px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
</style>