var _ = require('lodash');
var Backbone = require('backbone');

var ChordModel = Backbone.Model.extend({

  defaults: {
    arc: null,
    bubble: null,
    value: 0
  },


  link: function() {
    var bubble = this.get('bubble');
    var arc = this.get('arc');
    var arcData = arc.get('data');
    var bubbleData = bubble.get('data');
    var value = this.get('value');

    var angleStart = this.angleStart(arcData);
    var angleEnd = this.angleEnd(angleStart, value, arcData);
    arcData.currentAngle = angleEnd;

    var d = _.merge({
      startAngle: angleStart,
      endAngle: angleEnd,
      x: bubbleData.x,
      y: bubbleData.y,
      bubbleCid: bubble.cid,
      arcCid: arc.cid,
      cid : this.cid,
      value: value
    }, this.attributes);

    return d;
  },

  angleStart: function(arcData) {
    return arcData.currentAngle;
  },

  angleEnd: function(thisAngle, value, arcData) {
    return (value / arcData.value) *
      (arcData.endAngle - arcData.startAngle) +
      thisAngle;
  }
});


module.exports = ChordModel;
