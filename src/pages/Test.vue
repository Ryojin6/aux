<template>
  <TemplateDefault class="relative z-10 bg-black text-white">
    <div class="relative flex flex-col bg-a-charcoal">
      <div class="order-2 md:order-none">
        <g-image src="/landingimage.png" immediate class="w-full" />
      </div>
    </div>
    <div class="bg-a-charcoal text-a-teal">
      <AtomInner no-padding class="md:py-16 lg:py-32">
        <div class="pb-10 text-5xl md:text-center xl:text-6xl 2xl:text-7xl">
          <h1 class="font-title font-bold text-a-teal">PROJECT NAME</h1>
          <p class="text-lg text-white xl:text-xl 2xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div class="mx-auto flex max-w-4xl flex-col md:flex-row md:space-x-4">
          <div
            class="2x:text-2xl order-2 flex flex-col bg-white py-16 px-4 pr-2 text-lg font-medium text-white md:order-none md:w-1/3 md:bg-transparent md:py-0 md:px-6 md:text-xl"
          >
            <span class="block pb-6 uppercase">/ Client Services</span>
            <span>Branding</span>
            <span>Graphic Design</span>
            <span>Corporate Identity</span>
            <span>Brand Guidelines</span>
            <span>Copywriting</span>
            <span>Website</span>
            <span>Apparel</span>
            <span>Ongoing Support</span>
          </div>
          <div
            class="space-y-10 px-4 py-16 text-xl md:-mt-1 md:w-2/3 md:px-6 md:py-0 md:text-3xl"
          >
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              sapiente laborum aut enim nam architecto at totam ipsam velit,
              quia qui eum, placeat autem sed, ducimus tempora deserunt itaque
              modi.
            </div>
            <div class="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              libero? Architecto voluptatum suscipit culpa, quibusdam molestias
              officia consectetur optio alias quaerat voluptatibus hic
              inventore? Asperiores eligendi voluptatem minus excepturi debitis.
            </div>
            <div class="">
              <AtomLink
                link="https://nefgroup.com.au"
                class="text-a-green"
                text="Visit Website"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </AtomInner>
    </div>
    <AtomSection class="bg-white" tp="large" bp="large">
      <div class="flex flex-col space-y-4 sm:space-y-10">
        <div>
          <g-image src="/landingimage.png" immediate class="w-full" />
        </div>
        <div class="grid grid-cols-2 gap-10">
          <div>
            <g-image src="/landingimage.png" immediate class="w-full" />
          </div>

          <div>
            <g-image src="/landingimage.png" immediate class="w-full" />
          </div>
        </div>
        <div
          class="mx-auto flex max-w-4xl flex-col items-center py-16 text-center text-a-green"
        >
          <h2 class="text-3xl md:text-4xl xl:text-5xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime sed
            eveniet totam dolor unde enim, eum quos beatae expedita dignissimos
            atque ea laudantium a aliquam officiis quasi numquam deserunt porro!
          </h2>
        </div>
        <div>
          <g-image src="/landingimage.png" immediate class="w-full" />
        </div>
        <div>
          <g-image src="/landingimage.png" immediate class="w-full" />
        </div>
        <div class="flex justify-between text-a-green">
          <g-link
            class="custom-transition font group relative inline-flex items-center justify-center rounded-full py-3 text-sm font-medium uppercase leading-none text-current md:text-base"
            to="/work"
          >
            <span class="mr-2 flex items-center justify-start">
              <span
                class="custom-transition -ml-2 h-1 w-8 bg-current group-hover:w-16"
              />
            </span>
            <span class="whitespace-nowrap leading-none">Back to work</span>
          </g-link>
        </div>
      </div>
    </AtomSection>
  </TemplateDefault>
</template>
