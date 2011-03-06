$(function() {
    var paintedPlotCoords = [];

    $('input[name="reservation[plot_ids][]"]').click(function() {
      toggle($('canvas[data-number=' + $(this).attr('data-number') + ']'), paintedPlotCoords);
    });
});

