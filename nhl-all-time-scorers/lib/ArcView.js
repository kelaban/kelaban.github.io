var _ = require('lodash');
var d3 = require('d3');
var Backbone = require('backbone');
var Events = require('./Events');



var ArcView = Backbone.View.extend({

  initialize: function(options) {
    options = options || {};

    this.padding = options.padding || 0.05;
    this.sortGroups = options.sortGroups || d3.descending;
    this.sortChords = options.sortChords || d3.descending;
    this.outerRadius = options.outerRadius;
    this.innerRadius = options.innerRadius;
  },

  render: function() {
    var layout = this.chordLayout();


    var arcEnter = this.enter(layout.groups());
    this.bindEvents(arcEnter);
    this.appendArc(arcEnter);
    this.appendLabels(arcEnter);
    this.appendTitle(arcEnter);
  },


  enter: function(groups) {
    return d3.select(this.el)
            .selectAll("g")
            .data(groups)
            .enter().append("g")
            .attr("class", function(d) {
              return "arc arc_"+d.cid;
            });
  },


  bindEvents: function(arcEnter) {
    var self = this;
    arcEnter.on("mouseover", function(d) {
      Events.reset();

      d3.selectAll(".chord:not(.clicked):not(.arc_"+d.cid+")")
        .classed({inactive: true});

      d3.selectAll(".bubble:not(.clicked)")
        .classed({inactive: true});

      d3.selectAll(".arc.arc_"+d.cid)
        .classed({active: true});

      d3.selectAll(".chord.arc_"+d.cid)
        .each(function(el) {
          d3.select(".bubble.bubble_"+el.bubbleCid)
            .classed({inactive: false});
        });
    })
    .on("mouseout", Events.mouseout)
    .on("click", Events.clicked);
  },


  appendArc: function(arcEnter) {
    var outerRadius = this.outerRadius;
    var innerRadius = this.innerRadius;
    arcEnter.append("path")
      .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
      .attr("fill", function(d) { return d.color; });
  },

  appendLabels: function(arcEnter) {
    var outerRadius = this.outerRadius;
    arcEnter.append("text")
      .attr("class","arc_label")
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) {
        return angle(d) > Math.PI ? "end" : null;
      })
      .attr("transform", function(d) {
        return "rotate(" + (angle(d) * 180 / Math.PI - 90) + ")"
            + "translate(" + (outerRadius + 5) + ")"
            + (angle(d) > Math.PI ? "rotate(180)" : "");
      })
      .text(function(d) {
        return d.label;
      });
  },

  appendTitle: function(arcEnter) {
    var format  = d3.format(",f");
    arcEnter.append("title")
      .text(function(d) {
        return d.label + ": " + format(d.value);
      });
  },

  calculateMatrix: function(layout) {
    var matrix = [];
    var rowToCid = {};
    var len = this.collection.length;
    this.collection.each(function(d, i) {
      var row = [];
      for (var j=0; j<len; ++j) {
        row[j] = 0;
      }

      row[i] = d.get('value');
      matrix[i] = row;

      rowToCid[i] = d.cid;
    });

    layout.matrix(matrix);

    var collection = this.collection;
    _.each(layout.groups(), function(d) {
      var cid = rowToCid[d.index];
      var model = collection.get(cid);
      model.set({
        data: {
          startAngle: d.startAngle,
          currentAngle: d.startAngle,
          endAngle: d.endAngle,
          value: d.value
        }
      });

      _.merge(d, model.attributes, {cid: model.cid});
    });

  },


  chordLayout: function() {
    var layout = d3.layout.chord()
      .padding(this.padding)
      .sortGroups(this.sortGroups)
      .sortChords(this.sortChords);

    this.calculateMatrix(layout);

    return layout;
  }

});


function angle (d) {
  return ( d.startAngle + d.endAngle ) / 2;
}

module.exports = ArcView;
