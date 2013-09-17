define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');

  var Views_Header = Backbone.View.extend({
    render: function() {
      this.$el.html('<div>Header View here</div>');
      return this;
    }
  });

  return Views_Header;
});
