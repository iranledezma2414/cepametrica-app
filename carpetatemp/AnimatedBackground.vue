<template>
  <div>
    <div class="fixed inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1C3B5E15_1px,transparent_1px),linear-gradient(to_bottom,#1C3B5E15_1px,transparent_1px)] bg-[size:4rem_4rem] transition-colors duration-500 pointer-events-none"></div>
    
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <ClientOnly>
        <div v-for="n in 60" :key="n" class="spore absolute rounded-full" :style="getSporeStyle()"></div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
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
</script>

<style scoped>
.spore {
  opacity: 0;
  animation: floatUp linear infinite;
}

@keyframes floatUp {
  0% { transform: translateY(0) scale(0.5) translateX(0); opacity: 0; }
  15% { opacity: 0.8; }
  50% { transform: translateY(-50vh) scale(1.2) translateX(25px); }
  85% { opacity: 0.8; }
  100% { transform: translateY(-110vh) scale(0.5) translateX(-25px); opacity: 0; }
}
</style>