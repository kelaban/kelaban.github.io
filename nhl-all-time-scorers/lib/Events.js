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
  delay(reset, 500);
}

function reset() {
  cancel();
  var chords = d3.selectAll(".chord.inactive");
  var bubbles = d3.selectAll(".bubble.inactive");

  chords.classed({inactive: false});
  bubbles.classed({inactive: false});
}


module.exports = {
  mouseout: mouseout,
  reset: reset
};
