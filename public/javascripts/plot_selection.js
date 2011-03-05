$(function() {
    var canvasOpts = { 
        width: 740,
        height: 805
    };
    var canvas = $('#ctxPlots')
        .attr('width', canvasOpts.width)
        .attr('height', canvasOpts.height);

    canvas.parent()
        .attr('width', canvasOpts.width + 5)
        .attr('height', canvasOpts.height + 5);

    var plotCoords = paintPlots(canvas[0], canvasOpts);
    var paintedPlotCoords = {};

    $('input[name="reservation[plot_ids][]"]').click(function() {
      toggle(canvas[0], $(this).attr('data-number'), plotCoords, paintedPlotCoords);
    });
});

