<template>
  <TemplateDefault class="relative z-10 bg-black text-white" homepage>
    <OrganismVideoLoader class="custom-transition scrolled:opacity-0" />
    <OrganismPageLoader />
    <!-- <AtomSection
      class="relative flex w-full items-center justify-center"
      tp="large"
    >
      <AtomInner class="pt-16">
        <div
          class="relative z-10 mx-auto w-full max-w-7xl space-y-10 text-white xl:space-y-16 2xl:space-y-32"
        >
          <AtomAnimate position="left" class="max-w-4xl space-y-6">
            <h1 class="font-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h1>
            <div class="textMedium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              expedita provident maiores possimus ab quasi quod optio suscipit
              numquam dolorum? Doloremque modi sed non, earum similique suscipit
              aut ex veritatis?
            </div>
          </AtomAnimate>
        </div>
      </AtomInner>
    </AtomSection> -->
    <AtomSection tp="large" bp="large">
      <AtomInner>
        <AtomAnimate>
          <OrganismLandingVideo />
        </AtomAnimate>
        <AtomAnimate
          class="flex flex-col justify-between pt-10 md:flex-row md:space-x-10"
        >
          <div class="text-5xl font-bold md:w-1/3 md:text-6xl">
            You Provide the<span class="text-a-green"> Idea.</span> <br />We
            Bring it to. <span class="text-a-teal">Life</span>.
          </div>
          <div class="space-y-6 md:w-2/3">
            <div class="textMedium">
              Auxano Studios is a Digital Creative Agency Focused on Bringing
              Your Ideas and Brand to Life.
            </div>
            <div class="textSmall">
              Anywhere in the world, we deliver custom solutions, designs and
              creatives for your brand, whether that be an ecommerce brand,
              SaaS, or personal brand, and anything else inbetween. Scale and
              Grow with us.
            </div>
            <div class="pt-6">
              <AtomPlainLink
                to="/about-us"
                class="buttonStyling whitespace-nowrap"
              >
                learn more
              </AtomPlainLink>
            </div>
          </div>
        </AtomAnimate>
      </AtomInner>
    </AtomSection>
    <AtomSection tp="small" bp="large">
      <AtomInner>
        <div class="mx-auto max-w-3xl pb-10 text-center">
          <h2
            class="textXLarge pb-2 text-center font-title font-bold text-a-green"
          >
            Our Projects
          </h2>
          <div>
            At Auxano Studios, we take pride in our work. Take a look at some of
            our favourite projects below.
          </div>
        </div>

        <AtomAnimate class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <a href="#" v-for="i in 6" class="group relative">
            <div
              class="pin-center custom-transition absolute flex h-full w-full items-center justify-center rounded-3xl bg-a-charcoal bg-opacity-80 font-title text-sm font-bold uppercase text-white opacity-0 group-hover:opacity-100 md:text-lg"
            >
              <span> Name of project </span>
            </div>
            <img src="/landingimage.png" alt="" class="rounded-3xl" />
          </a>
        </AtomAnimate>
        <div class="mt-4 flex justify-center space-x-4 pt-6">
          <AtomPlainLink
            to="https://calendly.com/auxanostudios/30min"
            class="buttonStyling whitespace-nowrap"
          >
            Book Your Discovery Call Here
          </AtomPlainLink>
          <AtomPlainLink
            to="/our-projects"
            class="buttonStyling whitespace-nowrap"
          >
            Our Projects
          </AtomPlainLink>
        </div>
      </AtomInner>
    </AtomSection>
    <AtomSection tp="small" bp="small" class="hidden bg-a-teal">
      <AtomInner>
        <h2
          class="textXLarge pb-10 text-center font-title font-bold text-a-charcoal"
        >
          Brands We Work With
        </h2>
        <AtomAnimate class="grid gap-6 sm:grid-cols-3 xl:grid-cols-6">
          <a
            href="#"
            v-for="i in 6"
            class="group relative mx-auto h-40 w-40 rounded-full bg-white opacity-25"
          />
        </AtomAnimate>
      </AtomInner>
    </AtomSection>
  </TemplateDefault>
</template>

<style>
.main:after {
  animation: grain 8s steps(10) infinite;
  background-image: url(/grain.png);
  content: '';
  height: 400%;
  left: -50%;
  opacity: 0.4;
  position: fixed;
  top: -150%;
  width: 300%;
}
@keyframes grain {
  0%,
  to {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  10% {
    -webkit-transform: translate(-5%, -10%);
    transform: translate(-5%, -10%);
  }
  20% {
    -webkit-transform: translate(-15%, 5%);
    transform: translate(-15%, 5%);
  }
  30% {
    -webkit-transform: translate(7%, -25%);
    transform: translate(7%, -25%);
  }
  40% {
    -webkit-transform: translate(-5%, 25%);
    transform: translate(-5%, 25%);
  }
  50% {
    -webkit-transform: translate(-15%, 10%);
    transform: translate(-15%, 10%);
  }
  60% {
    -webkit-transform: translate(15%);
    transform: translate(15%);
  }
  70% {
    -webkit-transform: translateY(15%);
    transform: translateY(15%);
  }
  80% {
    -webkit-transform: translate(3%, 35%);
    transform: translate(3%, 35%);
  }
  90% {
    -webkit-transform: translate(-10%, 10%);
    transform: translate(-10%, 10%);
  }
}
</style>
