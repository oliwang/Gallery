<template>
  <div class="w-screen">
    <nav class="container flex justify-between py-8 mx-auto bg-transparent">
      <div>
        <h3 class="text-2xl font-medium text-black">the Gallery Project</h3>
      </div>
      <div class="hidden space-x-8 md:flex">
        <a href="">Catalog</a>
        <a href="">Contact</a>
      </div>
      <div class="space-y-4 mt-20 px-5 py-3 flex flex-col absolute origin-top-right right-0 top-0 md:hidden" :class="{ hidden: !isOpen }">
        <!--   -->
        <a href="">Catalog</a>
        <a href="">Contact</a>
      </div>
      <div class="md:hidden" id="nav-hamburger" @click="isOpen = !isOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
};



</script>

<style scoped>
</style>