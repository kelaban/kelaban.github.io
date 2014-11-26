var Backbone = require('backbone');


var ChordCollection = Backbone.Collection.extend({

  model: require('./ChordModel'),

  links: function() {
    if(this.linkData) {
      return this.linkData;
    }

    this.linkData = this.map(function(d) {
      return d.link();
    });

    return this.linkData;
  },


  comparator: function(d) {
    return -d.get('value');
  }

});


module.exports = ChordCollection;
