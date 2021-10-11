<template>
  <div class="hero">
      <div class="hero-heading">{{heading}}</div>
      <div class="hero-details">{{details}}</div>
      <div class="hero-outline"> <button class="btn btn-primary">{{buttonTitle}}</button></div>

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

<style>
.hero{
    @apply flex flex-col text-center min-h-0;

}
.hero-heading{
    @apply text-xl text-center font-bold text-gray-900 py-4;
}
.hero-details{
    @apply text-sm  text-gray-700 px-5;
}
.hero-outline{
    @apply flex justify-center items-center p-2;
}
.btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-primary {
    @apply  text-white;
    background-color:  hsl(322, 100%, 66%);
  }
  .btn-blue:hover {
    background-color: hsl(321, 100%, 78%);
  }
</style>