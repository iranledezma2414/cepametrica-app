<template>
  <main class="min-h-screen p-4 sm:p-6 lg:p-8">
    <div class="max-w-7xl mx-auto">
      <header class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-cepa-silver/30 pb-4">
        <div>
          <h1 class="text-2xl font-bold text-cepa-blue dark:text-cepa-white transition-colors">Panel de Telemetría</h1>
          <p class="text-sm text-cepa-silver">Modo Offline - Lote Pleurotus ostreatus</p>
        </div>
        <NuxtLink to="/" class="text-sm font-medium text-cepa-green hover:underline flex items-center gap-2">
          &larr; Volver al Inicio
        </NuxtLink>
      </header>
      <section class="bg-white/80 dark:bg-cepa-dark-bg/80 backdrop-blur-md border border-cepa-silver/40 rounded-xl p-6 shadow-sm flex items-center justify-center min-h-[300px] transition-colors duration-500">
        <p class="text-cepa-silver font-mono text-sm text-center">[ Área reservada para ECharts - Fase 1 ]</p>
      </section>
    </div>
  </main>
</template>