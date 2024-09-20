<script>
import TheNavigation from '@/components/TheNavigation.vue';
export default{
  components: {TheNavigation},
}
</script>

<template>
  <div class="app">
    <TheNavigation/>
  </div>
  <div class="container">
    <RouterView v-slot="{ Component }">
      <transition name="moveUp">
        <component :is="Component" :key="$router.path"></component>
      </transition>
    </RouterView>
  </div>
</template>

  <style lang="css">
    .moveUp-enter-active{
      animation: fadeIn 1s ease-in;
    }  
    @keyframes fadeIn {
      0% { opacity: 0; }
      50% { opacity: 0.5; }
      100% { opacity: 1; }
    }
    .moveUp-leave-active {
      animation: moveUp 0.4s ease-in;
    }
    @keyframes moveUp {
      0% {transform: translateY(0);}
      100% {transform: translateY(-400px);}
    }
  </style>
