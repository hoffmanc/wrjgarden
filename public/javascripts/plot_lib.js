function initLayer(plotNo, canvas, x, y, fillStyle){
  config = {
    height: $('canvas').attr('height'),
    width: $('canvas').attr('width'),
    radius: 35
  };

  var layer = $("<canvas></canvas>");
  layer.attr('id', 'canvas' + plotNo);
  layer.attr('width',config.width);
  layer.attr('height',config.height); 
  layer.attr('style', [
    "position: absolute",
    "left:" + canvas.offsetLeft + (plotNo < 10 ? x - 5 : x) + "px",
    "top:" + canvas.offsetTop + (y-15) + "px",
    "z-index: 1"
  ].join(";"));

  $('#plotDisplay').append(layer);

  var context = layer[0].getContext('2d');
  context.arc(
    config.width + config.radius / 2, 
    config.height + config.radius / 2, 
    config.width / 2 - 1, 
    0, 360
  );
  context.lineWidth = "2.5";
  context.stroke();
  context.fillStyle = fillStyle || "rgba(200, 200, 0, 0.5)";
  context.fill();

  return layer;
}

function toggle(canvas, plotNo, paintedPlotCoords){
    paintedPlotCoords[plotNo] = paintedPlotCoords[plotNo] || {};
    var ppc = paintedPlotCoords[plotNo];

    if(ppc.layer){
      $(ppc.layer).toggle();
    } else {
       var x = plotCoords[plotNo][0];
       var y = plotCoords[plotNo][1];
       ppc.layer = initLayer(plotNo, canvas, x, y); 
    }
}
