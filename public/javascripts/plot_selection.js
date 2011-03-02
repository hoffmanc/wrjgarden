$(function() {
    function toggle(canvas, plotNo){
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

    function initLayer(plotNo, canvas, x, y){
      config = {
        height: 35,
        width: 35
      };

      var layer = $("<canvas></canvas>");
      layer.attr('id', 'canvas' + plotNo);
      layer.attr('width',config.width);
      layer.attr('height',config.height); 
      layer.attr('style', [
        "position:absolute",
        "left:" + (plotNo < 10 ? x - 5 : x) + "px",
        "top:" + (y-15) + "px",
        "z-index: 1",

        ].join(";")
      );

      $('#plotDisplay').append(layer);

      var context = layer[0].getContext('2d');
      context.arc(config.width / 2, config.height / 2,config.width / 2 - 1,0, 360);
      context.stroke();
      context.fillStyle = "rgba(200, 200, 0, 0.5)";
      context.fill();

      return layer;
    }

    var canvas = $('#ctxPlots')[0];
    var plotCoords = paintPlots(canvas);
    var paintedPlotCoords = {};

    $('input[name="plot_number"]').click(function() {
      toggle(canvas, $(this).attr('data-number'));
    });
});
