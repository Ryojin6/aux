<template>
  <AtomSection
    v-aos
    tp="large"
    bp="large"
    class="relative transition-all duration-1000 ease-in-out"
    aos-from=" bg-white"
    aos-to="bg-n-green text-white"
  >
    <AtomInner>
      <AtomAnimate>
        <MoleculeTitle
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Tempora placeat porro possimus  dolor sit amet consectetur adipisicing elit.
           Tempora placeat porro "
          subtitle="Lorem ipsum"
        />
      </AtomAnimate>
      <AtomAnimate class="my-10">
        <MoleculeAccordionCard
          v-for="item in faq"
          :key="item.id"
          :title="item.title"
          :description="item.description"
        />
      </AtomAnimate>
    </AtomInner>
  </AtomSection>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          title: 'Lorem ipsume sometsama',
          description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maxime sapiente ipsa ea inventore consequatur, at sed cum ex voluptate 
          aperiam ipsum dolorum aliquam quos repellendus delectus ullam nihil hic
           deserunt?`,
        },
        {
          title: 'Lorem ipsume sometsama',
          description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maxime sapiente ipsa ea inventore consequatur, at sed cum ex voluptate 
          aperiam ipsum dolorum aliquam quos repellendus delectus ullam nihil hic
           deserunt?`,
        },
        {
          title: 'Lorem ipsume sometsama',
          description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maxime sapiente ipsa ea inventore consequatur, at sed cum ex voluptate 
          aperiam ipsum dolorum aliquam quos repellendus delectus ullam nihil hic
           deserunt?`,
        },
      ],
    };
  },
};
</script>
