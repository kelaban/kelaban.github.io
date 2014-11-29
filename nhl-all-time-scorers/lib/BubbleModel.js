var _ = require('lodash');
var Backbone = require('backbone');

var BubbleModel = Backbone.Model.extend({

  defaults: {
    label: null,
    value: 0,
  },

  initialize: function () {
    this.set({ teamStats: [] });
  },

  incrementValueBy: function(v) {
    var value = this.get('value');
    this.set({ value: v + value});
  },

  addTeamStats: function(label, value) {
    var teamStats = this.get('teamStats');

    teamStats.push({
      label: label,
      value: value
    });
  },

  toJSON: function() {
    return _.merge({}, this.attributes, { cid: this.cid });
  }

});


module.exports = BubbleModel;
