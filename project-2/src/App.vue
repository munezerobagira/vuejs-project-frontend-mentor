<script setup></script>

<template>
  <div id="app">
    <!-- navbar -->
    <div class="navbar">
      <div class="logo">
        <img src="./assets/logo.svg" class="logo" alt="" />
      </div>
      <div class="nav">
        <a href="#" class="navlink">Features</a>
        <a href="#" class="navlink">Teams</a>
        <a href="#" class="navlink">Sign in</a>
      </div>
    </div>
    <!-- first hero section -->
    <div class="container py-36 flex flex-col-reverse sm:flex-row">
      <div class="flex flex-col flex-1">
        <h1 class="text-4xl font-semibold my-4">
          All your files in one secure location, accessible anywhere
        </h1>
        <p>
          Flyo stores your most important files in one secure location. Access
          them wherver you need, share and collaborate with friends, family and
          co-worker.
        </p>
        <form class="flex flex-row justify-between w-full py-8">
          <input type="text" class="flex-1 border rounded border-secondary" />
          <button class="btn btn-primary ml-4 px-10">Get Started</button>
        </form>
      </div>
      <div class="flex-1">
        <img
          src="./assets/illustration-1.svg"
          alt="Illutration"
          class="w-full px-10"
        />
      </div>
    </div>
    <div class="hero">
      <div class="container flex flex-col-reverse sm:flex-row py-10">
        <div class="flex flex-col flex-1">
          <h1 class="text-4xl font-semibold my-4">
            Stay productive, wherver you are
          </h1>
          <p>
            Never let location be an issue when accessing your files, Fylo has
            you covered for all of your file storage needs. Securely share your
            files and folder with your friends, family, colleagues for live
            collaboration. No email attachment needed!
          </p>
          <form
            class="flex flex-row justify-center sm:justify-start w-full py-8"
          >
            <a href="#" class="border-b-2 border-accent text-accent"
              >See how Fylo works
              <img
                src="./assets/icon-arrow.svg"
                alt="See how Fylo work"
                class="inline"
              />
            </a>
          </form>
          <div
            class="
              flex flex-col
              justify-self-center
              p-2
              border
              max-w-sm
              bg-white
            "
          >
            <div class="p-4">
              <img
                src="./assets/icon-quotes.svg"
                class="w-4"
                alt="Quote icon"
              />
            </div>
            <div class="p-4">
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
            </div>
            <div class="p-4 flex">
              <div>
                <img
                  src="./assets/avatar-testimonial.jpg"
                  alt="Huddle founder"
                  class="w-12 mr-4 rounded-full"
                />
              </div>
              <div class="flex flex-col">
                <h5 class="text-base font-semibold">Kyle Burton</h5>
                <p class="text-neutral-dark">Founder &amp; CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <img
            src="./assets/illustration-2.svg"
            alt="Illustration"
            class="w-full px-10"
          />
        </div>
      </div>
      <div></div>
    </div>
    <div class="bg-primary-light py-24 mt-20">
      <div class="container flex flex-col text-white md:flex-row">
        <div class="flex-1 flex flex-col">
          <h6 class="font-semibold text-2xl my-2">Get early access today</h6>
          <p class="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            ipsum, maxime fugit hic perspiciatis incidunt! Impedit laudantium
            sapiente suscipit illum harum, error dolorum omnis molestiae autem
            saepe repellat, optio odio!
          </p>
        </div>

        <div id="subscribe" class="flex-1 flex-col flex justify-start p-6">
          <input
            type="text"
            placeholder="email@example.com"
            class="rounded p-2"
          />
          <button class="btn btn-primary my-4 w-full sm:w-auto">
            Get started for free
          </button>
        </div>
      </div>
    </div>
    <div class="bg-primary text-white py-24">
      <div class="row container">
        <img src="./assets/logo-2.svg" alt="logo" class="w-36 py-12" />
      </div>

      <div class="container text-center sm:text-left flex flex-col sm:flex-row">
        <div class="flex-1 flex-col">
          <div class="flex py-2 justify-center sm:justify-start">
            <img src="./assets/icon-phone.svg" alt="phone" class="w-6 mr-4" />
            <p>+1-543-123-4567</p>
          </div>
          <div class="flex py-2 justify-center sm:justify-start">
            <img src="./assets/icon-email.svg" alt="phone" class="w-6 mr-4" />
            <p>email@example.com</p>
          </div>
        </div>
        <div class="flex-1 flex flex-col">
          <div>About us</div>
          <div>Jobs</div>
          <div>Press</div>
          <div>Blog</div>
        </div>
        <div class="flex-1 flex flex-col">
          <div>Contact us</div>
          <div>Terms</div>
          <div>Privacy</div>
        </div>
        <div class="flex-1 inline">
          <i class="fa fa-facebook brand-icon"></i>
          <i class="fa fa-twitter brand-icon"></i>
          <i class="fa fa-instagram brand-icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@400;700&display=swap");
  #app {
    @apply text-primary;
    font-family: "Open Sans", sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Raleway", sans-serif;
  }
  .hero {
  }
  .navbar {
    @apply container flex flex-row justify-between items-center py-4;
  }
  .nav {
    @apply flex flex-row justify-center items-center;
  }
  .navlink {
    @apply p-4 no-underline text-primary;
  }
  .logo {
    @apply w-28;
  }
  .btn {
    @apply rounded p-2;
  }
  .btn-primary {
    @apply bg-secondary text-white hover:bg-opacity-75;
  }
  .brand-icon {
    @apply text-base w-6 h-6 text-center border rounded-full m-2 align-middle;
  }
</style>
