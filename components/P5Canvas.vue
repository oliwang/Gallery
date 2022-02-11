<template>
      <div id="p5Canvas" ref="p5Canvas"></div>

  <!-- <div class="w-full h-full"> -->
  <!-- </div> -->
</template>

<script>
import { createSketch } from "@/assets/js/p5_projects/InspiredByWhite_static.js";


export default {
  props: ['projectFilePath'],
  async mounted() {
    console.log(this.projectFilePath)
    // let { createSketch } = await import(this.projectFilePath);
    
    
    console.log(this.$refs.p5Canvas.clientWidth, this.$refs.p5Canvas.clientHeight);
    let sketch_01 = await createSketch(  { parentId: 'p5Canvas', width: this.$refs.p5Canvas.clientWidth, height: this.$refs.p5Canvas.clientHeight }  );

  },
};
</script>

<style scoped>
    /* #p5Canvas {
        width: 100%;
        height: 100%;
    } */
    .p5Canvas  {
        width: 100vh;
        height: 100vh;
    }
</style>