<script>
  import sourceData from '@/data.json'
  export default {
    data(){
      return {
        destinations: sourceData.destinations
      }
    }
  }
</script>

<template>
  <div id="nav">
    <router-link id="logo" to="/">Vue School Travel App</router-link>
   <router-link 
   v-for="destination in destinations"
   :key="destination.id"
   :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
   >
    {{ destination.name }}
   </router-link>
   </div>
</template>

<style>
 #nav .vue-school-active-link{
  color: rgb(254, 125, 125);
  border-bottom: 2px solid rgb(254, 125, 125);
 }
</style>