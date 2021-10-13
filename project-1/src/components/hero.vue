<template>
  <div class="hero">
      <div class="hero-heading">{{heading}}</div>
      <div class="hero-details">{{details}}</div>
      <div class="hero-outline"> <button class="btn btn-primary text-base my-3 text-lg font-semibold  py-2 px-12 text-white">{{buttonTitle}}</button></div>
  </div>
</template>

<script>
export default {
    components:{},
    props:{
        heading:{type:String, required: true},
        buttonTitle:{type: String, required: true},
        details:{type: String, required: true}

    }
}
</script>

<style scoped>
.hero{
    @apply flex flex-col text-center min-h-0 items-center py-36 justify-center;

}
.hero-heading{
    @apply text-4xl text-center font-bold text-gray-900 py-4;
}
.hero-details{
    @apply text-lg text-center  text-gray-700 px-5 max-w-md;
}
.hero-outline{
    @apply flex justify-center items-center py-5;
}
</style>