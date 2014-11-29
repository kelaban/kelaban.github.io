var timeoutId;


function delay(fn, timeout) {
  cancel();
  timeoutId = setTimeout(fn, timeout);
}

function cancel() {
  clearTimeout(timeoutId);
  timeoutId = null;
}


function mouseout() {
  var anyClicked = d3.selectAll(".clicked")[0].length;

  if(anyClicked) {
    delay(resetWhenClicked, 500);
  } else {
    delay(reset, 500);
  }
}

function resetWhenClicked() {
  cancel();

  var chords = d3.selectAll(".chord:not(.inactive):not(.clicked)");
  var bubbles = d3.selectAll(".bubble:not(.inactive):not(.clicked)");
  var arcs = d3.selectAll(".arc.active:not(.clicked)");

  chords.classed({inactive: true});
  bubbles.classed({inactive: true});
  arcs.classed({active: false});
}

function reset() {
  cancel();

  var chords = d3.selectAll(".chord.inactive:not(.clicked)");
  var bubbles = d3.selectAll(".bubble.inactive:not(.clicked)");
  var arcs = d3.selectAll(".arc.active:not(.clicked)");

  chords.classed({inactive: false});
  bubbles.classed({inactive: false});
  arcs.classed({active: false});
}

function clicked(d) {
  var isClicked = d3.select(this).classed("clicked");

  d3.selectAll(".bubble:not(.inactive), .chord:not(.inactive), .arc.active")
    .classed({clicked: !isClicked});
}


module.exports = {
  mouseout: mouseout,
  reset: reset,
  clicked: clicked
};
