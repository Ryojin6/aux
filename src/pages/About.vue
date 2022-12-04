6
<template>
  <TemplateDefault class="relative z-10 bg-black text-white" homepage>
    <AtomSection tp="large" bp="small">
      <AtomInner>
        <AtomAnimate>
          <img src="/team.png" alt="" class="rounded-2xl" />
        </AtomAnimate>
        <AtomAnimate
          class="flex flex-col justify-between pt-10 pb-12 md:flex-row md:space-x-10"
        >
          <div class="text-5xl font-bold text-a-teal md:w-1/3 md:text-6xl">
            Who We Are
          </div>
          <div class="space-y-6 md:w-2/3">
            <div class="textMedium">
              We are UK based creators with a passion to get your project done
              the right way. We attach our values within our work, which
              includes, authenticity, community and respect which enables your
              brand to stand out amongst any other.
            </div>

            <div class="flex space-x-6">
              <AtomPlainLink to="#team" class="buttonStyling whitespace-nowrap">
                Meet the team
              </AtomPlainLink>
              <AtomPlainLink
                to="https://calendly.com/auxanostudios/30min?month=2022-12"
                class="buttonStyling whitespace-nowrap"
              >
                Contact us
              </AtomPlainLink>
            </div>
          </div>
        </AtomAnimate>
      </AtomInner>
    </AtomSection>
    <AtomSection tp="large" bp="large">
      <AtomInner>
        <AtomAnimate class="grid grid-cols-3 gap-6">
          <img src="/landingimage.png" alt="" class="rounded-2xl" />
          <img src="/landingimage.png" alt="" class="rounded-2xl" />
          <img src="/landingimage.png" alt="" class="rounded-2xl" />
        </AtomAnimate>
        <AtomAnimate
          class="flex flex-col justify-between pt-10 md:flex-row md:space-x-10"
        >
          <div class="text-5xl font-bold text-a-green md:w-1/3 md:text-6xl">
            What We Do
          </div>
          <div class="space-y-6 md:w-2/3">
            <div class="textMedium">
              We work with people and brands to journey together in discovering
              new-found growth. From personal brands, to ecommerce products, to
              tech/SaaS, we have it all to test and break the limits. Improve
              your marketing commincations, grow your personal brand or
              strategise a campaign, we work with you.
            </div>

            <div class="flex space-x-6 py-6">
              <AtomPlainLink
                to="/our-portfolio"
                class="buttonStyling whitespace-nowrap"
              >
                Check Out Our Work
              </AtomPlainLink>
            </div>
          </div>
        </AtomAnimate>
      </AtomInner>
    </AtomSection>
    <AtomSection tp="large" bp="large" id="team">
      <AtomInner>
        <div class="mx-auto max-w-3xl pb-10 text-center">
          <h2
            class="textXLarge pb-2 text-center font-title font-bold text-a-green"
          >
            Meet Our Team
          </h2>
          <div>
            At Auxano Studios, we take pride in our work. Take a look at some of
            our favourite projects below.
          </div>
        </div>
        <AtomAnimate class="mx-auto grid max-w-5xl grid-cols-2 gap-6">
          <div>
            <img src="/goose.jpg" alt="" class="rounded-2xl" />
            <div class="textLarge pt-2 font-bold">Harry Pain</div>
            <div class="pb-4 text-sm font-bold text-a-teal">
              Founder / Creative Director
            </div>
            <div class="space-y-6">
              <!-- <a
                href="mailto:harry@auxanostudios.io"
                class="font-bold text-a-green"
                >harry@auxanostudios.io</a
              > -->
              <div class="flex space-x-6">
                <AtomIconLinkedin
                  link=" https://www.linkedin.com/in/hao-teh-313713213/"
                  class="text-lab-pink hover:text-lab-lightpink"
                />
              </div>
            </div>
          </div>
          <div>
            <img src="/hao.jpg" alt="" class="rounded-2xl" />
            <div class="textLarge pt-2 font-bold">Hao Teh</div>
            <div class="pb-4 text-sm font-bold text-a-teal">
              Founder / Managing Director
            </div>
            <div class="space-y-6">
              <!-- <a
                href="mailto:harry@auxanostudios.io"
                class="font-bold text-a-green"
                >hao@auxanostudios.io</a
              > -->
              <div class="flex space-x-6">
                <AtomIconLinkedin
                  link=" https://www.linkedin.com/in/hao-teh-313713213/"
                  class="text-lab-pink hover:text-lab-lightpink"
                />
              </div>
            </div>
          </div>
        </AtomAnimate>
      </AtomInner>
    </AtomSection>
  </TemplateDefault>
</template>
