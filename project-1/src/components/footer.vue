<template>
  <div class="">
    <div class="py-36">
      <h1 class="text-center text-4xl font-bold">
        Ready To Build Your Community
      </h1>
      <div class="flex justify-center items-center">
        <button
          class="
            btn btn-primary
            px-10
            py-4
            text-white
            font-semibold
            my-8
            text-lg
          "
        >
          Get Started For Free
        </button>
      </div>
    </div>
    <div id="footer">
      <div class="container flex flex-col sm:flex-row-reverse">
        <div class="flex-1 my-10">
          <h1 class="text-4xl my-2 text-white">NEWSLETTER</h1>
          <p class="max-w-sm my-4">
            To receive tips on how to grow your community, signup to our weekly
            newsletter. We'll never send you spam or pass your email address.
          </p>
          <form action="" id="subscribe-form" class="flex flex-col sm:flex-row">
            <input type="text" class="rounded px-10 py-2 sm:mr-3 my-2" />
            <button class="btn btn-primary px-10 py-2 rounded sm:ml-3 my-2">
              subscribe
            </button>
          </form>
        </div>
        <div class="flex-1">
          <img src="../assets/logo-white.svg" class="fill-red w-48" />
          <p class="max-w-sm my-4">
            To receive tips on how to grow your community, signup to our weekly
            newsletter. We'll never send you spam or pass your email address.
          </p>
          <div>
            <div class="flex items-center justify-start">
              <img
                src="../assets/icon-phone.svg"
                class="w-10 py-2 pr-4 x-2"
                alt="Phone Icon"
              />
              <p>Phone: +1-543-123-4567</p>
            </div>
            <div class="flex items-center justify-start">
              <img
                src="../assets/icon-email.svg"
                class="w-10 py-2 pr-4 x-2"
                alt="Email Icon"
              />
              <p>Email: example@huddle.com</p>
            </div>
            <div class="flex flex-row">
              <div class="w-10 py-2 pr-2">
                <span class="fa fa-facebook-official icon"></span>
              </div>
              <div class="w-12 p-2">
                <span class="fa fa-instagram icon"></span>
              </div>
              <div class="w-12 p-2">
                <span class="fa fa-twitter-square icon"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  #footer {
    @apply py-36 px-6 text-white !important;
    background: hsl(192, 100%, 9%);
  }
  .icon {
    @apply text-3xl text-white hover:text-blue-400;
  }
</style>
