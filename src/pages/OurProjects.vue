6
<template>
  <TemplateDefault class="relative z-10 bg-black text-white" homepage>
    <AtomSection tp="large">
      <AtomInner>
        <AtomAnimate>
          <OrganismLandingVideo />
        </AtomAnimate>
      </AtomInner>
    </AtomSection>
    <AtomSection
      class="relative flex w-full items-center justify-center"
      tp="small"
      bp="small"
    >
      <AtomInner>
        <AtomAnimate
          class="textSmall mb-10 flex justify-center divide-x border-b border-a-teal pb-6 font-bold"
        >
          <button
            v-for="(tab, index) in cardInfo"
            :key="index"
            class="custom-transition textSmall px-4 font-bold hover:text-a-teal"
            :class="{ 'text-a-teal': selectedTab === index }"
            @click="selectedTab = index"
          >
            {{ tab.key }}
          </button>
        </AtomAnimate>
      </AtomInner>
    </AtomSection>

    <AtomSection tp="" bp="large">
      <AtomInner>
        <div
          v-for="(card, index) in cardInfo"
          :key="card.key"
          class="relative z-10 mx-auto w-full text-white"
        >
          <div
            v-show="selectedTab === index"
            position="left"
            class="mx-auto max-w-4xl text-center"
          >
            <h2 class="font-title text-5xl md:text-6xl">
              {{ card.description }}
            </h2>
          </div>
        </div>
        <AtomAnimate class="grid gap-6 pt-20 sm:grid-cols-2 xl:grid-cols-3">
          <button
            v-for="(card, index) in cardInfo[selectedTab].portfolio"
            :key="index"
            class="group relative"
            @click="
              selectedPortfolio = card.video;
              popup = true;
            "
          >
            <img src="/landingimage.png" alt="" class="rounded-3xl" />
            <div
              class="custom-transition rounded-3xl p-4 font-title text-sm font-bold uppercase text-white group-hover:text-a-teal md:text-lg"
            >
              <span> {{ card.title }} </span>
            </div>
          </button>
        </AtomAnimate>
        <div
          v-if="popup"
          class="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/90"
        >
          <div class="mx-auto w-full max-w-7xl p-4">
            <button
              @click="popup = false"
              class="textMedium w-full pb-4 text-right font-bold uppercase hover:text-a-green"
            >
              Close
            </button>
            <div class="aspect-w-16 aspect-h-9">
              <iframe
                :src="selectedPortfolio"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </AtomInner>

      <div class="flex justify-center pt-16">
        <AtomPlainLink
          to="calendly"
          class="buttonStyling inline-block whitespace-nowrap"
        >
          Contact Us
        </AtomPlainLink>
      </div>
    </AtomSection>
  </TemplateDefault>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 0,
      popup: false,
      selectedPortfolio: 'https://player.vimeo.com/video/76979871',
      tabs: [
        { title: 'Content Creation' },
        { title: 'Graphic Design' },
        { title: 'Photography' },
        { title: 'Cinematography' },
      ],
      cardInfo: [
        {
          key: 'Content Creation',
          description: `From long form content to short form content, to 
          eye-catching social media posts, we do it all. Check our work below:`,
          portfolio: [
            {
              title: 'Content Creation portfolio 1',
              video: 'https://player.vimeo.com/video/773601002',
            },
            {
              title: 'Content Creation portfolio 2',
              video: 'https://player.vimeo.com/video/76979871',
            },
          ],
        },

        {
          key: 'Graphic Design',
          description: `We build your brand, from the roots, up. Graphic Design at 
          Auxano Studios consists of logo branding, to 3D modelling of your products
           and more. Check our work below:`,
          portfolio: [
            {
              title: 'graphic design portfolio 1',
              video: 'https://player.vimeo.com/video/773601002',
            },
            {
              title: 'graphic design portfolio 2',
              video: 'https://player.vimeo.com/video/76979871',
            },
          ],
        },
        {
          key: 'Photography',
          description: `From2 model shoots, to real estate, celebrities to food & drinks,
                and everyhing in between.`,
          portfolio: [
            {
              title: 'Photography portfolio 1',
              video: 'https://player.vimeo.com/video/773601002',
            },
            {
              title: 'Photography portfolio 2',
              video: 'https://player.vimeo.com/video/76979871',
            },
          ],
        },

        {
          key: 'Cinematography',
          description: `You Vision, We Create. From music videos, short films, trailers & TikToks,
           we do it all. Have a vision set, and the team will bring it to life. Check our 
           work below:`,
          portfolio: [
            {
              title: 'Cinematography portfolio 1',
              video: 'https://player.vimeo.com/video/76979871',
            },
            {
              title: 'Cinematography portfolio 2',
              video: 'https://player.vimeo.com/video/76979871',
            },
          ],
        },
      ],
    };
  },
};
</script>

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
