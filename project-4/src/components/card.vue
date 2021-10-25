<template>
  <article class="flex justify-center item-center flex-col text-center">
    <img :src="'/src/assets/images/' + image" :alt="title" class="max-w-12" />
    <h1>{{ title }}</h1>
    <p>{{ details }}</p>
  </article>
</template>

<script>
  export default {
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      details: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      return {};
    },
  };
</script>

<style></style>
