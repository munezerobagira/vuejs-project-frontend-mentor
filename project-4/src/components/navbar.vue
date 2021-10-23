<template>
  <nav>
    <section>
      <img
        src="../assets/images/logo.svg"
        class="w-36"
        alt="Foylo brand logo"
      />
    </section>
    <section class="flex justify-end">
      <a href="#" class="navlink">Features</a>
      <a href="#" class="navlink">Team</a>
      <a href="#" class="navlink">Sign in</a>
    </section>
  </nav>
</template>

<script setup></script>

<style scoped>
  nav {
    @apply container flex py-4 justify-between items-center;
  }
  .navlink {
    @apply p-8 text-base text-gray-300 hover:text-white;
  }
</style>
