var _ = require('lodash');
var d3 = require('d3');
var Backbone = require('backbone');
var Events = require('./Events');

function defaultSort(a, b) {
  a = a.value; b = b.value;
  return a > b ? -1 : a < b ? 1 : 0;
}

var BubbleView = Backbone.View.extend({

  initialize: function(options) {
    options = options || {};
    this.diameter = options.diameter || 250;
    this.padding = options.padding || 5;
    this.sort = options.sort || defaultSort;
  },

  render: function () {
    var collection = this.collection;
    var bubble = this.packLayout();
    var nodes = bubble.nodes({children: collection.toJSON()})
                  .filter(function(d) { return !d.children; });


    _.each(nodes, function(d) {
      collection.get(d.cid).set({ data: d });
    });

    var bubbleEnter = this.enter(nodes);

    this.appendCircle(bubbleEnter);
    this.appendText(bubbleEnter);
    this.appendTitle(bubbleEnter);
    this.bindEvents(bubbleEnter);
  },

  moveToFront: function() {
    d3.select(this.el).moveToFront();
  },

  enter: function(nodes) {
    return d3.select(this.el)
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", function(d) {
        return "bubble bubble_" + d.cid;
      });
  },

  appendText: function(bubbleEnter) {
    var text = bubbleEnter.append("text")
      .attr("x", function(d) { return d.x; })
      .attr("y", function(d) { return d.y; })
      .style("text-anchor", "middle")
      .style("fill", "#FFF");

    text.append("tspan")
        .attr("x", function(d) { return d.x; })
        .attr("dy", "-.3em")
        .text(function(d) {
          var nameParts = d.label.split(" ");
          var firstName = nameParts[0].substring(0, d.r / 3);
          return firstName;
        });

    text.append("tspan")
        .attr("x", function(d) { return d.x; })
        .attr("dy", "1.2em")
        .text(function(d) {
          var nameParts = d.label.split(" ");
          var lastName = nameParts[1].substring(0, d.r / 3);
          return lastName;
        });
  },

  appendCircle: function(bubbleEnter) {
    bubbleEnter.append("circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("r", function(d) { return d.r; })
      .style("fill", function(d) { return d.color; });
  },

  appendTitle: function(bubbleEnter) {
    bubbleEnter.append("title")
      .text(function(d) {
        var teamToValue = d.teamStats.map(function(stats) {
          return stats.label + " → " + stats.value;
        }).join("\n");

        return d.label + ": " + d.value + "\n" + teamToValue;
      });

  },

  packLayout: function() {
    return d3.layout.pack()
        .sort(this.sort)
        .size([this.diameter*2, this.diameter*2])
        .padding(this.padding);
  },


  bindEvents: function(bubbleEnter) {
    bubbleEnter
      .on("mouseover", function(d) {
        Events.reset();
        d3.selectAll(".bubble:not(.clicked):not(.bubble_"+d.cid+"), " +
                      ".chord:not(.clicked):not(.bubble_"+d.cid+")")
          .classed({inactive: true});

        d3.selectAll(".chord.bubble_"+d.cid)
          .each(function(el) {
            d3.select(".arc.arc_"+el.arcCid)
              .classed({active: true});
          });
      })
      .on("mouseout", Events.mouseout)
      .on("click", Events.clicked);
  }


});


module.exports = BubbleView;

