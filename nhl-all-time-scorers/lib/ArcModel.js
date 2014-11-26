var Backbone = require('backbone');

var ArcModel = Backbone.Model.extend({

  defaults: {
    label: '',
    value: 0
  },

  incrementValueBy: function(v) {
    var value = this.get('value');
    this.set({ value: v + value});
  }
});


module.exports = ArcModel;
