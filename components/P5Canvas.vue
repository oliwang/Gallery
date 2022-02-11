<template>
      <div id="p5Canvas" ref="p5Canvas"></div>

  <!-- <div class="w-full h-full"> -->
  <!-- </div> -->
</template>

<script>
// import { createSketch } from "~/static/js/p5_projects/InspiredByWhite_static.js";


export default {
  props: ['projectFilePath'],
  head() {
      return {
        script: [
          {
             src: this.projectFilePath
          },
          {
             src: "/Gallery" + this.projectFilePath
          }
        ],
      }
  },
  async mounted() {
    console.log(this.projectFilePath)
    // let { createSketch } = await import(this.projectFilePath);
    // let { createSketch } = await import("~/static/js/p5_projects/InspiredByWhite_static.js");
    const { default: P5 } = await import('p5');
    
    console.log(this.$refs.p5Canvas.clientWidth, this.$refs.p5Canvas.clientHeight);
    if (process.client) {
      let sketch_01 = await createSketch(  { parentId: 'p5Canvas', width: this.$refs.p5Canvas.clientWidth, height: this.$refs.p5Canvas.clientHeight, P5: P5 }  );

    }
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