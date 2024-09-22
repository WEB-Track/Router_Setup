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
    <RouterView v-slot="{ Component, }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </RouterView>
  </div>
</template>

  <style lang="css">
      .fade-enter-active,
      .fade-leave-active{
      transition: opacity 0.4s;
    }  
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
  </style>
