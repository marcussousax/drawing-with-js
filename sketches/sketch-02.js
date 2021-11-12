const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const deg2rad = (degrees) => {
  return (degrees / 180) * Math.PI;
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const x = width * 0.5;
    const y = height * 0.5;
    const w = width * 0.3;
    const h = height * 0.3;
    context.fillStyle = "#000";

    // We gonna use save and restore to isolate transformations for each element
    context.save();
    context.translate(x, y);
    // By default rotate uses Rad instead of degree, so the best is to create a function to convert values from deg to rad
    context.rotate(deg2rad(45));
    context.beginPath();
    context.fillRect(-w * 0.5, -h * 0.5, w, h);
    context.fill();
    context.restore();
  };
};

canvasSketch(sketch, settings);
