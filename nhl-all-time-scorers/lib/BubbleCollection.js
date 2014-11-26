var Backbone = require('backbone');


var BubbleCollection = Backbone.Collection.extend({

  model: require('./BubbleModel')

});


module.exports = BubbleCollection;
