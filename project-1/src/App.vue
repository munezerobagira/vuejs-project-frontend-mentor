<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import AppHero from "./components/hero.vue";
  import AppHeader from "./components/header.vue";
  import AppStats from "./components/stats.vue";
  import HomeSections from "./components/section.vue";
  import AppFooter from "./components/footer.vue";

  const webData = {
    heroSection: {
      heading: "Build The Community Your fan will Love",
      details:
        "Huddle re-imagines the way we build communities. You have a voice, but so does your audince.  Create connections with your users as you engage in genuine discussion.",
      btnTitle: "Get started for free",
    },
  };
</script>

<template>
  <div id="app" class="text-sm">
    <div class="container">
      <AppHeader />
      <AppHero
        :heading="webData.heroSection.heading"
        :details="webData.heroSection.details"
        :buttonTitle="webData.heroSection.btnTitle"
      />
    </div>
    <div class="container">
      <div class="w-full">
        <img
          class="w-full py-6"
          src="./assets/screen-mockups.svg"
          alt="Screen mockups for Huddle"
        />
        <AppStats />
      </div>
    </div>
    <HomeSections />
    <AppFooter />
  </div>
</template>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@700&display=swap");
  .btn {
    @apply py-1 px-2 rounded-full;
  }
  * {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    @apply text-black;
    font-family: "Poppins", sans-serif;
    color: #00252e;
  }
  .font-sans-1 {
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
  }
  .font-sans-2 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
  }
  .btn-secondary {
    color: hsl(322, 100%, 66%);
    background-color: white;
    border: 2px solid hsl(322, 100%, 66%);
  }
  .btn-secondary:hover {
    border: 1px solid hsl(322, 100%, 66%);
  }
  .btn-primary {
    @apply text-white;
    background-color: hsl(322, 100%, 66%);
  }
  .btn-primary:hover {
    background-color: hsl(321, 100%, 78%);
  }
</style>
