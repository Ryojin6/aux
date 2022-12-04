<template>
  <header
    class="pin-x-center bg-blur-2xl custom-transition fixed top-0 z-50 w-full bg-black p-6"
  >
    <div class="mx-auto flex w-full max-w-8xl items-center justify-between">
      <g-link
        to="/"
        class="z-50 w-16 text-white transition-all duration-300 ease-in-out scrolled:w-16 scrolled:text-a-teal xl:w-24"
      >
        <AtomBrand />
      </g-link>

      <div
        class="order-2 ml-auto flex w-16 max-w-8xl items-center justify-end text-right md:order-none md:mr-10 md:w-full"
      >
        <MoleculeSiteMenu />
      </div>
      <div class="flex w-full items-center justify-end space-x-4 md:w-auto">
        <AtomPlainLink
          to="https://calendly.com/auxanostudios/30min"
          class="buttonStyling whitespace-nowrap"
        >
          Contact Us
        </AtomPlainLink>
      </div>
    </div>
  </header>
</template>

<style>
/* Fill button styling */
.buttonStyling {
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 40px 8px;
  outline: 0;

  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  @apply border-a-teal font-mono !text-sm text-gray-800;
}

.buttonStyling::after {
  content: '';
  @apply bg-a-teal;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.buttonStyling:hover::after {
  top: 0px;
  left: 0px;
}
/* End of Fill Button  */
</style>
