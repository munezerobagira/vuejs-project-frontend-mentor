<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import AppHero from './components/hero.vue'
import AppHeader from './components/header.vue'
import AppStats from './components/stats.vue'
import HomeSections from './components/section.vue'

const webData={
  heroSection:{
    heading:"Build The Community Your fan will Love",
    details:"Huddle re-imagines the way we build communities. You have a voice, but so does your audince.  Create connections with your users as you engage in genuine discussion."  ,
    btnTitle:"Get started for free"
  }
}
</script>

<template>
  <div class="container">
    <AppHeader />
    <AppHero :heading="webData.heroSection.heading" :details="webData.heroSection.details" :buttonTitle="webData.heroSection.btnTitle"/>
    <div class="w-full">
      <img class="w-full py-6" src="./assets/screen-mockups.svg" alt="Screen mockups for Huddle">
    </div>
    <AppStats/>
    <HomeSections/>
  </div>
</template>

<style>

.btn {
    @apply py-1 px-2 rounded-full;
  }
  .btn-secondary {
    color:hsl(322, 100%, 66%);
    background-color: white;
    border: 2px solid hsl(322, 100%, 66%);
}
.btn-primary {
    @apply text-white;
    background-color: hsl(322, 100%, 66%);
}
  .btn-blue:hover {
    background-color: hsl(321, 100%, 78%);
  }
</style>
