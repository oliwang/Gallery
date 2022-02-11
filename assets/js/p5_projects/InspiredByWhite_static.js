async function createSketch(args) {
  // console.log(args)
  const { default: P5 } = await import('p5');

  let p5Sketch = function (sketch) {

    let canvas_w = args.width
    let steps = 10
    let lightColor;
    let darkColor;

    sketch.setup = function () {

      sketch.createCanvas(args.width, args.height);
      sketch.rectMode(sketch.CENTER);

      lightColor = sketch.color(243, 243, 243)
      darkColor = sketch.color(28, 30, 24)
      sketch.background("#60a5fa");

    }

    sketch.draw = function () {

      var length = canvas_w
      let gap = 1 / steps * length

      sketch.translate(sketch.width / 2, sketch.height / 2);

      for (var i = 0; i < steps; i++) {
        // console.log(length)
        var r = sketch.red(lightColor) * (1 - 1 / steps * i) + sketch.red(darkColor) * 1 / steps * i
        var g = sketch.green(lightColor) * (1 - 1 / steps * i) + sketch.green(darkColor) * 1 / steps * i
        var b = sketch.blue(lightColor) * (1 - 1 / steps * i) + sketch.blue(darkColor) * 1 / steps * i
        var newColor = sketch.color(r, g, b)

        if (i != 0) {
          sketch.rotate(sketch.PI / 40.0);
        }

        sketch.fill(newColor)
        sketch.strokeWeight(0.1);
        sketch.stroke(240);
        // noStroke();
        sketch.rect(0, 0, length, length)


        length = length - gap


      }
    }

  };
  return new P5(p5Sketch, args.parentId)
}

module.exports.createSketch = createSketch;

