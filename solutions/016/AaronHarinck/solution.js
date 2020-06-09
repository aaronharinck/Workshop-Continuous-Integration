const draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, 2 * Math.PI);
  ctx.fillStyle = "#00695c";
  ctx.fill();
  return ctx;
};

export default draw;
