<template>
  <div class="hero">
    <div class="hero-heading">{{ heading }}</div>
    <div class="hero-details font-sans-2">{{ details }}</div>
    <div class="hero-outline">
      <button
        class="
          btn btn-primary
          text-base
          my-3
          text-lg
          font-semibold
          py-4
          px-12
          text-white
        "
      >
        {{ buttonTitle }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      heading: { type: String, required: true },
      buttonTitle: { type: String, required: true },
      details: { type: String, required: true },
    },
  };
</script>

<style scoped>
  .hero {
    @apply flex flex-col text-center min-h-0 items-center py-36 justify-center;
  }
  .hero-heading {
    @apply text-5xl text-center font-bold text-gray-900 py-4;
  }
  .hero-details {
    @apply text-base text-center  text-gray-700 px-5 max-w-lg;
    color: #00252e;
  }
  .hero-outline {
    @apply flex justify-center items-center py-5;
  }
  * {
    color: #00252e;
  }
</style>
