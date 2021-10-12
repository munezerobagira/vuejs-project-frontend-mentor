<template>
<div class="flex flex-col sm:flex-row px-6">
     <div class="stats">
      <div class="icon">
          <img src="../assets/icon-communities.svg" class="w-8" alt="">
      </div>
      <div class="flex">
          <h1 class="text-6xl font-bold">1.4k+</h1>
      </div>
      <div class="text-gray-800">
          Communities Formed
      </div>
  </div>
  <div class="stats">
      <div class="icon">
          <img src="../assets/icon-messages.svg" class="w-8" alt="">
      </div>
      <div class="flex">
          <h1 class="text-6xl font-bold">2.7m+</h1>
      </div>
      <div class="text-gray-800">
          Mesages sent
      </div>
  </div>
</div>
  
  
</template>

<script setup>

</script>

<style>
.stats{
    @apply  py-6 flex-1  flex flex-col justify-center items-center;
}
</style>