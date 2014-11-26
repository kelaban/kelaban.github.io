var Backbone = require('backbone');


var ArcCollection = Backbone.Collection.extend({

  model: require('./ArcModel'),

  getOrAdd: function(id, attributes) {
    var value = this.get(id);

    if(!value) {
      attributes.id = id;
      value = this.add(attributes);
    }

    return value;
  },

  comparator: function(d) {
    return -d.get('value');
  }

});


module.exports = ArcCollection;
