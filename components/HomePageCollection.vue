<template>
  <div class="w-screen h-screen bg-blue-400 flex flex-row">
    <P5Canvas
      class="h-screen p5canvas grow-0 shrink-0"
      ref="p5canvas"
      :projectFilePath="projectFilePath"
    />
    <div class="collection_content flex text-white shrink grow">
      <div class="p-10 w-full h-full">
        <div
          class="
            content
            bg-blue-800
            w-full
            h-full
            flex flex-col
            justify-between
          "
        >
          <div class="textContent w-5/6">
            <h2 class="title afr text-6xl mb-2">
              Inspired by <br />Darko Caramello Nikolic
            </h2>
            <p class="desc my-10 text-2xl">
              The exhibition at Deji Plaza rekindled my passion for Processing,
              the first programming language I learned.
            </p>
          </div>
          <h4 class="link pdi text-xl text-right">
            To Collection
            <span class="icon"
              ><font-awesome-icon :icon="['fas', 'arrow-right']"
            /></span>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
  },
  data() {
    return {
      projectFilePath: "@/assets/js/p5_projects/InspiredByWhite_static.js",
    };
  },
};
</script>

<style scoped>
.p5canvas {
  width: 100vh;
  height: 100vw;
  max-width: 100vw;
  max-height: 100vh;
}
</style>