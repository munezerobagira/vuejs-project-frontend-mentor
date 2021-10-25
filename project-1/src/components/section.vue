<template>
  <div id="home-sections">
    <div class="illustration-background">
      <div class="home-section">
        <div class="section-text">
          <h2 class="font-bold text-2xl">Grow together</h2>
          <p>
            Generate meaningful discussion with your audince and build a strong,
            loyal community. Think of the insightful conversion you miss out
            witha feedback form.
          </p>
        </div>
        <div class="flex-1 p-6">
          <div class="w-full">
            <img
              src="../assets/illustration-grow-together.svg"
              alt="Grow together illustration"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="home-section-reverse">
      <div class="section-text">
        <h2 class="font-bold text-2xl">Flowing conversations</h2>
        <p>
          You wouldn't paginate a conversations in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
      <div class="flex-1 p-6">
        <div class="w-full">
          <img
            src="../assets/illustration-flowing-conversation.svg"
            alt="Grow together illustration"
          />
        </div>
      </div>
    </div>
    <div class="illustration-background">
      <div class="home-section">
        <div class="section-text">
          <h2 class="font-bold text-2xl">Your Users</h2>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once you signed in to your app,
            your users can start chatting immdediately.
          </p>
        </div>
        <div class="flex-1 p-6">
          <div class="w-full">
            <img
              src="../assets/illustration-your-users.svg"
              alt="Grow together illustration"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
  .home-section {
    @apply flex flex-col-reverse sm:flex-row  container;
  }
  .home-section-reverse {
    @apply flex flex-col sm:flex-row-reverse py-20 text-justify container;
  }
  .section-text {
    @apply flex-1 flex flex-col justify-center items-start p-8;
  }
  .section-text h2 {
    @apply py-6 text-left;
  }
  .illustration-background {
    @apply py-20;
    position: relative;
    background: url(../assets/bg-section-top-desktop-1.svg) padding-box,
      url(../assets/bg-section-bottom-desktop-1.svg) right -100%/100% no-repeat padding-box,
      hsl(207, 100%, 98%) padding-box;
  }
  .illustration-background::before {
    content: "";
    position: absolute;
    @apply w-full h-10;
    background: url(../assets/bg-section-top-desktop-1.svg) right -100% / cover no-repeat;
  }
  * {
    color: #00252e;
  }
</style>
