function initPlot(canvas, fillStyle){
  config = {
    radius: 35,
    circlePositionX: $(canvas).attr('data-x'),
    circlePositionY: $(canvas).attr('data-y')
  };

  var context = canvas.getContext('2d');
  context.arc(
    config.circlePositionX + config.radius / 2, 
    config.circlePositionY + config.radius / 2, 
    config.radius, 
    0, 360
  );
  context.lineWidth = "2.5";
  context.stroke();
  context.fillStyle = fillStyle || "rgba(200, 200, 0, 0.5)";
  context.fill();

  return canvas;
}

function toggle(canvas, plotCoords, paintedPlotCoords){
    var plotNo = $('canvas').attr('data-number');
    paintedPlotCoords[plotNo] = paintedPlotCoords[plotNo] || {};
    var ppc = paintedPlotCoords[plotNo];

    if(ppc.layer){
      $(ppc.layer).toggle();
    } else {
       var x = plotCoords[plotNo][0];
       var y = plotCoords[plotNo][1];
       ppc.layer = initPlot(plotNo, canvas, x, y); 
    }
}
