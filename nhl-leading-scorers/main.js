var d3 = require('d3');
var _  = require('lodash');

var outerRadius = 600 / 2,
    innerRadius = outerRadius - 20,
    linkRadius = innerRadius,
    bubbleDiameter = innerRadius - 25,
    chordsTranslate = outerRadius + 100,
    nodesTranslate = (outerRadius-innerRadius) + (innerRadius-bubbleDiameter) + 100,
    format = d3.format(",d"),
    color = d3.scale.category20c();

var bubble = d3.layout.pack()
    .sort(function(a, b) {
      a = a.value; b = b.value;
      return a > b ? -1 : a < b ? 1 : 0;
    })
    .size([bubbleDiameter*2, bubbleDiameter*2])
    .padding(5);

var chord = d3.layout.chord()
    .padding(.05)
    .sortGroups(d3.descending)
    .sortChords(d3.descending);

var svg = d3.select("body").append("svg")
    .attr("width", outerRadius * 2 + 200 + "px")
    .attr("height", outerRadius * 2 + 200 + "px");

var playerData;
d3.csv("data/leadingScorers.csv", function(error, playerList) {
  playerData = players(playerList);
  chord.matrix(playerData.matrix);
  var nodes = bubble.nodes(playerData.bubbles)
                .filter(function(d) {
                  return d.depth > 0;
                });

  var bubbles = svg.append("g")
                   .attr("class", "bubbles")
                   .attr("transform", "translate(" + nodesTranslate + "," + nodesTranslate + ")")

  var bubbleEnter = bubbles.selectAll("g")
    .data(nodes.filter(function(d) {
      return d.depth === 1;
    }))
    .enter().append("g")
    .each(function(d) {
      if(d.children) {
        playerData.playersById[d.id].data = d;
      }
    })
    .attr("class", "bubble")
    .attr("id", function(d) {
      return "b_"+d.id;
    });

  bubbleEnter.append("text")
            .attr("x", function(d) { return d.x; })
            .attr("y", function(d) { return d.y; })
            .attr("dy", ".3em")
            .style("text-anchor", "middle")
            .text(function(d) { return d.name.substring(0, d.r / 3); });

  bubbleEnter.append("circle")
            .attr("class", function(d) { return d.children ? "parent" : "child"; })
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
            .attr("r", function(d) { return d.r; })
            .style("fill", function(d) { return d.children ? "blue" : color(d.team) } )
            .on("mouseover", function(d) {
              d3.selectAll(".chord.p_"+d.id).style("display", "inherit");
            })
            .on("mouseout", function(d) {
              d3.selectAll(".chord.p_"+d.id).style("display", "none");
            });


  bubbleEnter.append("title")
            .text(function(d) { return d.name });

  var arcsByTid = {};
  var arcs = svg.append("g")
      .attr("class", "arcs")
      .attr("transform", "translate(" + chordsTranslate + "," + chordsTranslate + ")")

  arcs.selectAll("g.labels")
      .data(chord.groups())
      .enter().append("g").attr("class", "arc__label")
      .each(function(d) {
        arcsByTid[d.index] = {
          start: d.startAngle,
          current: d.startAngle,
          end: d.endAngle,
          value: d.value
        }
      })
      .append("text")
          .attr("class","arc__label")
          .attr("dy", ".35em")
          .attr("text-anchor", function(d) { return angle(d) > Math.PI ? "end" : null; })
          .attr("transform", function(d) {
              return "rotate(" + (angle(d) * 180 / Math.PI - 90) + ")"
                  + "translate(" + (outerRadius + 5) + ")"
                  + (angle(d) > Math.PI ? "rotate(180)" : "");
          })
          .text(function(d) { return playerData.teamById[d.index].name; })


  var diag = d3.svg.diagonal.radial();

  var teamTotals = {};
  var chords = svg.append("g")
                  .attr("class", "chords")
                  .attr("transform", "translate(" + chordsTranslate + "," + chordsTranslate + ")")
                  .selectAll("g")
                  .data(playerData.links)
                  .enter().append("path")
                  .attr("class", function(d) {
                    return "chord t_" + d.tId + " p_" + d.pId;
                  })
                  .attr("id", function(d) {
                    var key = d.key = "p_"+d.pId+"_t_"+d.tId;
                    return key;
                  })
                  .attr("d", createLinks)
                  .style("fill", function(d) {
                    return color(d.tId);
                  })
                  .style("fill-opacity", .75)
                  .style("stroke",function(d) { return color(d.tId); })
                  .style("stroke-width", ".25px")
                  .style("stroke-opacity", 1)
                  .style("display", "none");

  var arcEnter = arcs.selectAll("g.arcs")
                      .data(playerData.links)
                      .enter().append("g").attr("class", "arc")

  arcEnter.append("path")
      .style("fill", function(d) { return color(d.tId); })
      .style("fill-opacity", ".1")
      .style("stroke", function(d) { return color(d.tId); })
      .style("stroke-opacity", "1")
      .style("stroke-width", "2px")
      .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
      .on("mouseover", function(d) {
        d3.selectAll(".chord.t_"+d.tId).style("display", "inherit");
      })
      .on("mouseout", function(d) {
        d3.selectAll(".chord.t_"+d.tId).style("display", "none");
      });



  function createLinks(d) {
    var arc = arcsByTid[d.tId]
    var contrib = playerData.teamById[d.tId].players[d.pId];
    var player = playerData.playersById[d.pId];

    var as = arc.current;
    arc.current = (contrib / arc.value) * (arc.end - arc.start) + as;
    var ae = arc.current;

    d.startAngle = as;
    d.endAngle = ae;
    d.value = contrib;
    d.name = playerData.teamById[d.tId].name;

    var l1 = {
      source: {
        x: innerRadius * Math.cos(as - Math.PI / 2 ),
        y: innerRadius * Math.sin(as - Math.PI / 2 ),
      },
      target: {
        x: player.data.x - (chordsTranslate - nodesTranslate),
        y: player.data.y - (chordsTranslate - nodesTranslate)
      }
    }

    var l2 = {
      target: {
        x: innerRadius * Math.cos(ae - 1.57079633 ),
        y: innerRadius * Math.sin(ae - 1.57079633 ),
      },

      source: {
        x: player.data.x - (chordsTranslate - nodesTranslate),
        y: player.data.y - (chordsTranslate - nodesTranslate)
      }

    }

    var d = diag(l1);
    d += "L" + String(diag(l2)).substr(1);
    d += "A" + (innerRadius) + "," + (innerRadius) + " 0 0,0 " +  l1.source.x + "," + l1.source.y;

    return d;
  }

});

function angle (d) {
  return ( d.startAngle + d.endAngle ) / 2;
}

function Player(name) {
  return  {
    name: name,
    points: 0,
    teamStats: {},
  };
}


function TeamStats(team, id) {
  return {
    team: team,
    id: id,
    points: 0
  }
}

function players(list) {
  var playersById = {};
  var teamByName = {};
  var teamId = 0;
  list.forEach(function(player) {
    if(parseInt(player.id) > 25) return;
    var p = playersById[player.id] = playersById[player.id] || Player(player.name);
    var t = teamByName[player.team] = teamByName[player.team] || ( { id: teamId++, count: 0 })
    var teamStat = p.teamStats[player.team] = p.teamStats[player.team] || TeamStats(player.team, t.id);

    var points = parseInt(player.points);
    teamStat.points += points;
    p.points += points;
    t.count += points;
  });

  var matrix = [];
  var teamById = {};
  Object.keys(teamByName).forEach(function(k) {
    var team = teamByName[k];
    var row = [];
    for(var i=0; i<teamId; ++i) {
      row[i] = 0;
    }

    row[team.id] = team.count;
    matrix[team.id] = row;

    teamById[team.id] = { name: k, players: {} };
  });

  var bubbleData = [];
  var links = [];
  Object.keys(playersById).forEach(function(k) {
    var v = playersById[k];
    var children = [];

    Object.keys(v.teamStats).forEach(function(t) {
      var s = v.teamStats[t];
      children.push({
        team: t,
        value: s.points
      })

      teamById[s.id].players[k] = s.points;

      links.push({
        tId: s.id,
        pId: k,
        count: s.points
      });
    });

    bubbleData.push({
      id: k,
      name: v.name,
      value: v.points,
      children: children
    });


  });

  links = _.chain(links).sortBy('count').reverse().value();

  return {bubbles: {children: bubbleData}, matrix: matrix, teamById: teamById, playersById: playersById, links: links};
}
