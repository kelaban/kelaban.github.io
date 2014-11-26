var d3 = require('d3');
var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');

Backbone.$ = $;
Backbone._ = _;

var ArcCollection = require('./lib/ArcCollection');
var BubbleCollection = require('./lib/BubbleCollection');
var ChordCollection = require('./lib/ChordCollection');

var BubbleView = require('./lib/BubbleView');
var ArcView = require('./lib/ArcView');
var ChordView = require('./lib/ChordView');

var arcs = new ArcCollection();
var bubbles = new BubbleCollection();
var chords = new ChordCollection();

var outerRadius = 600 / 2,
    innerRadius = outerRadius - 20,
    linkRadius = innerRadius,
    bubbleDiameter = innerRadius - 25,
    chordsTranslate = outerRadius + 100,
    nodesTranslate = (outerRadius-innerRadius) + (innerRadius-bubbleDiameter) + 100,
    color = d3.scale.category20c();

d3.selection.prototype.moveToFront = function() {
    return this.each(function(){
          this.parentNode.appendChild(this);
            });
};

var svg = d3.select("div#data-viz").append("svg")
    .attr("width", outerRadius * 2 + 200 + "px")
    .attr("height", outerRadius * 2 + 200 + "px");

svg.append("g")
 .attr("id", "bubble_container")
 .attr("class", "bubbles")
 .attr("transform", "translate(" + nodesTranslate + "," + nodesTranslate + ")");

svg.append("g")
 .attr("id", "arc_container")
 .attr("class", "arcs_labels")
 .attr("transform", "translate(" + chordsTranslate + "," + chordsTranslate + ")");

svg.append("g")
  .attr("id", "chords_container")
  .attr("class", "chords")
  .attr("transform", "translate(" + chordsTranslate + "," + chordsTranslate + ")");

d3.csv("data/leadingScorers.csv", function(error, playerList) {
  var players = getPlayersFromCSV(playerList, 'goals', 50);

  _.each(players, function(player) {
    var bubble = bubbles.add({
      label: player.name,
      color: "#222"
    });

     _.each(player.teams, function(stats, teamName) {
        var arc = arcs.getOrAdd(stats.name, {
          label: stats.name,
          color: color(teamName)
        });
        arc.incrementValueBy(stats.value);
        bubble.incrementValueBy(stats.value);

        chords.add({
          arc: arc,
          bubble: bubble,
          value: stats.value,
          color: color(teamName)
        });

    });
  });

  console.log(chords);


  var bubbleView = new BubbleView({
    el: '#bubble_container',
    collection: bubbles,
    diameter: bubbleDiameter,
    padding: 0
  });

  var arcView = new ArcView({
    el: '#arc_container',
    collection: arcs,
    outerRadius: outerRadius,
    innerRadius: innerRadius,
    padding: 0.05
  });

  var chordView = new ChordView({
    el: '#chords_container',
    collection: chords,
    outerRadius: outerRadius,
    innerRadius: innerRadius,
    chordTranslate: chordsTranslate,
    nodesTranslate: nodesTranslate
  });

  bubbleView.render();
  arcView.render();
  chordView.render();

  bubbleView.moveToFront();
});


function getPlayersFromCSV(playerList, sortField, numWanted) {
  var playersById = {};
  playerList.forEach( function(row) {
    var value = parseInt(row[sortField]);
    if(value < 1) return;

    var player = playersById[row.id];

    if (!player) {
      player = playersById[row.id] = { name: row.name, teams: {}, total: 0 };
    }

    var teamStats = player.teams[row.team];
    if (!teamStats) {
      teamStats = player.teams[row.team] = { name: row.team, value: 0 };
    }

    teamStats.value += value;
    player.total += value;
  });

  var players = _.chain(playersById)
                  .sortBy(playersById, "total")
                  .slice(0,numWanted)
                  .value();
  return players;
}
