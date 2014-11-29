var _ = require('lodash');
var d3 = require('d3');
var Backbone = require('backbone');
var Events = require('./Events');



var ChordView = Backbone.View.extend({

  initialize: function(options) {
    options = options || {};

    this.outerRadius = options.outerRadius;
    this.innerRadius = options.innerRadius;
    this.chordTranslate = options.chordTranslate;
    this.nodesTranslate = options.nodesTranslate;
    this.diag = d3.svg.diagonal.radial();
  },


  render: function() {
    var links = this.collection.links();
    var chordEnter = this.enter(links);
    this.appendPath(chordEnter);
    this.appendTitle(chordEnter);
    this.bindEvents(chordEnter);
  },



  enter: function(links) {
    return d3.select(this.el)
      .selectAll("g")
      .data(links)
      .enter().append("path")
      .attr("class", function(d) {
        return [
          "chord",
          "arc_" + d.arcCid,
          "bubble_" + d.bubbleCid,
          "chord_" + d.cid
        ].join(" ");
      });
  },



  bindEvents: function(chordEnter) {
    chordEnter
      .on('mouseover', function(d) {
        Events.reset();

        d3.selectAll(".bubble:not(.bubble_"+d.bubbleCid+")")
          .classed({inactive: true});

        d3.selectAll(".chord:not(.chord_"+d.cid+")")
          .classed({inactive: true});

      })
      .on('mouseout', Events.mouseout);
  },


  appendTitle: function(chordEnter) {
    chordEnter.append("title")
      .text(function(d) {
        return d.arc.get("label") + " → " +
                d.bubble.get("label") + ": " + d.value;
      });
  },


  appendPath: function(chordEnter) {
    var self = this;
    chordEnter
      .attr("d", function(d) { return self.path(d); })
      .style("fill", function(d) { return d.color; })
      .style("stroke",function(d) { return d.color; });

  },

  path: function(d) {
    var innerRadius = this.innerRadius;
    var outerRadius = this.outerRadius;
    var chordsTranslate = this.chordTranslate;
    var nodesTranslate = this.nodesTranslate;
    var diag = this.diag;

    var l1 = {
      source: {
        x: innerRadius * Math.cos(d.startAngle - Math.PI / 2 ),
        y: innerRadius * Math.sin(d.startAngle - Math.PI / 2 ),
      },
      target: {
        x: d.x - (chordsTranslate - nodesTranslate),
        y: d.y - (chordsTranslate - nodesTranslate)
      }
    };

    var l2 = {
      target: {
        x: innerRadius * Math.cos(d.endAngle - 1.57079633 ),
        y: innerRadius * Math.sin(d.endAngle - 1.57079633 ),
      },

      source: {
        x: d.x - (chordsTranslate - nodesTranslate),
        y: d.y - (chordsTranslate - nodesTranslate)
      }
    };

    var p = diag(l1);
    p += "L" + String(diag(l2)).substr(1);
    p += "A" + (innerRadius) + "," + (innerRadius) + " 0 0,0 " +  l1.source.x + "," + l1.source.y;

    return p;
  }


});


module.exports = ChordView;
