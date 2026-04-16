<template>
  <main class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-16 pointer-events-none">
    
    <div class="relative flex flex-col items-center p-8 md:p-16 transition-colors duration-500 bg-white/60 dark:bg-[#0A0F16]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2rem] shadow-2xl dark:shadow-[#116A64]/10 max-w-4xl w-full text-center pointer-events-auto">
      
      <span class="px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] uppercase border rounded-full transition-colors duration-500 bg-slate-100 text-[#1C3B5E] border-slate-300 dark:bg-[#1C3B5E]/40 dark:text-[#C0C0C0] dark:border-[#1C3B5E]">
        Sistema Ciberfísico B2B
      </span>
      
      <h1 class="text-5xl md:text-7xl font-black tracking-tight mb-6 transition-colors duration-500 text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#116A64] dark:to-[#1C3B5E]">
        Ingeniería en <br class="hidden md:block" /> cada espora.
      </h1>
      
      <p class="text-base md:text-lg mb-10 max-w-2xl font-medium transition-colors duration-500 text-slate-600 dark:text-slate-400">
        Control paramétrico y trazabilidad absoluta de biomasa fúngica para la industria alimentaria. Validado mediante telemetría IoT.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <button class="px-8 py-3.5 font-bold text-white rounded-xl shadow-lg transition-all duration-300 bg-[#116A64] hover:bg-[#0d4f4a] hover:-translate-y-1 hover:shadow-[#116A64]/40">
          Acceder a Telemetría
        </button>
        <button class="px-8 py-3.5 font-bold rounded-xl border-2 transition-all duration-300 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-[#1C3B5E] dark:text-[#C0C0C0] dark:hover:bg-[#1C3B5E]/30 hover:-translate-y-1">
          Ver Memoria Técnica
        </button>
      </div>

      <div class="hidden lg:flex absolute -left-16 top-1/4 flex-col items-start p-4 transition-colors duration-500 bg-white/90 dark:bg-[#0A0F16]/90 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl animate-[bounce_4s_infinite]">
        <div class="flex items-center gap-2 mb-1">
          <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Temp. Interna</span>
        </div>
        <span class="text-2xl font-black text-[#1C3B5E] dark:text-white">21.5°C</span>
      </div>

      <div class="hidden lg:flex absolute -right-16 bottom-1/3 flex-col items-start p-4 transition-colors duration-500 bg-white/90 dark:bg-[#0A0F16]/90 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl animate-[bounce_5s_infinite_1s]">
        <div class="flex items-center gap-2 mb-1">
          <div class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Humedad Rel.</span>
        </div>
        <span class="text-2xl font-black text-[#116A64]">88.2%</span>
      </div>

    </div>
  </main>
</template>