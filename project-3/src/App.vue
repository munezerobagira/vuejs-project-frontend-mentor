<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class="bg-primary text-white" id="App">
    <div class="min-h-screen container flex flex-col justify-between h-full">
      <div class="header">
        <img src="./assets/logo.svg" alt="Logo huddle" class="w-64" />
      </div>
      <div class="flex flex-1 items-center justify-center">
        <div class="flex-1">
          <img src="./assets/illustration-mockups.svg" alt="Illustration " />
        </div>
        <div class="flex-1 p-10">
          <h1 class="text-4xl my-4">
            Build The Community That Your Fan Will Love
          </h1>
          <p>
            Huddles re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button class="btn btn-primary">Register</button>
        </div>
      </div>
      <div class="footer">
        <i class="fa fa-facebook brand-icon"></i>
        <i class="fa fa-twitter brand-icon"></i>
        <i class="fa fa-instagram brand-icon"></i>
      </div>
    </div>
  </div>
</template>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;600&display=swap");
  #App {
    font-family: "Open Sans", sans-serif;
  }
  h1 {
    font-family: "Poppins", sans-serif;
  }
  p {
    @apply text-gray-200;
  }
  .btn {
    @apply rounded-3xl font-semibold px-16 py-2 bg-white text-primary shadow-md my-6 hover:bg-secondary hover:text-white;
  }
  .header {
    @apply flex flex-col sm:flex-row justify-start;
  }
  .footer {
    @apply flex justify-end py-10;
  }
  .brand-icon {
    @apply text-base  max-w-sm  border rounded-full py-2 px-4 m-2 align-middle text-center hover:border-secondary hover:text-secondary;
  }
</style>
