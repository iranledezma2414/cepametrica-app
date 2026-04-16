<template>
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
        <div class="w-14 h-14 self-start shrink-0 flex items-center justify-center rounded-2xl bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400 mb-8 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
        </div>
        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Capa Biológica</h3>
        <p class="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
          Gestión térmica del <span class="italic">Pleurotus ostreatus</span>. Mantenemos curvas de 15°C a 22°C para evitar la desnaturalización y maximizar la síntesis de biomasa proteica.
        </p>
        <div class="pt-6 border-t border-black/5 dark:border-white/10">
          <span class="text-xs font-bold uppercase tracking-widest text-slate-400">Proceso Core</span>
        </div>
      </div>

      <div class="flex flex-col p-8 md:p-10 transition-all duration-500 bg-white/60 dark:bg-[#1A1A1E]/60 backdrop-blur-3xl border border-black/[0.04] dark:border-white/[0.05] rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:-translate-y-2 hover:shadow-xl group">
        <div class="w-14 h-14 self-start shrink-0 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 mb-8 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" /></svg>
        </div>
        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Capa Física (IoT)</h3>
        <p class="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
          Nodos de hardware distribuido. Microcontrolador central procesando telemetría de sensores LM35 y FC-28 con tasa de muestreo en tiempo real.
        </p>
        <div class="pt-6 border-t border-black/5 dark:border-white/10">
          <span class="text-xs font-bold uppercase tracking-widest text-slate-400">Infraestructura</span>
        </div>
      </div>

      <div class="flex flex-col p-8 md:p-10 transition-all duration-500 bg-white/60 dark:bg-[#1A1A1E]/60 backdrop-blur-3xl border border-black/[0.04] dark:border-white/[0.05] rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:-translate-y-2 hover:shadow-xl group">
        <div class="w-14 h-14 self-start shrink-0 flex items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 mb-8 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
        </div>
        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Capa Lógica</h3>
        <p class="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
          Interfaz corporativa desarrollada en Nuxt 3. El motor de software ingesta, procesa y visualiza la telemetría para el cliente final B2B.
        </p>
        <div class="pt-6 border-t border-black/5 dark:border-white/10">
          <span class="text-xs font-bold uppercase tracking-widest text-slate-400">Plataforma Web</span>
        </div>
      </div>

    </div>
  </section>
</template>