<script setup>
  import { reactive, ref } from "vue";
  import NavBar from "./components/navbar.vue";
  import FeatureCard from "./components/card.vue";

  const features = reactive([
    {
      image: "icon-access-anywhere.svg",
      title: "Access your files, anywhere",
      details:
        "The ability to use a smartphone, tablet or computer to access your account means your files follow you  anywhere.",
    },
    {
      image: "icon-security.svg",
      title: "Security you can trust",
      details:
        "2 factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      image: "icon-collaboration.svg",
      title: "Real-time collaboration",
      details:
        "Securely share files and folders with firends , family and collegues for live collaboratiom, No email attachments required.",
    },
    {
      image: "icon-any-file.svg",
      title: "Store any type of file",
      details:
        "Whether you're sharing holidays photos or work documents.Fylo has you covered allowing for all the types to be securely stored and shared.",
    },
  ]);
</script>

<template>
  <main id="app">
    <NavBar />
    <section class="intro">
      <div
        class="
          container
          flex flex-col
          max-w-sm
          items-center
          justify-center
          text-center
        "
      >
        <img
          src="./assets/images/illustration-intro.png"
          alt="All file in one place illustration"
          class="w-full"
        />
        <h4>All your files in one secure location, accessible anywhere.</h4>
        <p class="larger">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, co-workers.
        </p>
        <button class="btn btn-primary">Get started</button>
      </div>
      <div class="container flex justify-center">
        <div class="grid grid-cols-2 gap-2 max-w-sm">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="h-34 max-w-36"
          >
            <FeatureCard
              :title="feature.title"
              :details="feature.details"
              :image="feature.image"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
  body {
    @apply bg-black;
  }
  #app {
    @apply bg-primary;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    @apply text-white font-semibold;
  }
  h1 {
    @apply text-4xl;
  }
  h2 {
    @apply text-3xl;
  }
  h3 {
    @apply text-2xl;
  }
  h4 {
    @apply text-xl my-4;
  }
  h5 {
    @apply text-lg my-3;
  }
  p {
    @apply text-gray-100 text-sm text-gray-300 my-1;
  }
  p.larger {
    @apply text-base;
  }
  .btn {
    @apply px-16 py-2 my-2 rounded-3xl    font-semibold;
  }
  .btn-primary {
    @apply text-white bg-secondary-200 hover:bg-secondary;
  }
</style>
