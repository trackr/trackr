//= require_self
//= require_tree ./mixins
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./views
//= require_tree ./routers

window.Trackr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Vent: _.clone(Backbone.Events),
  initialize: function() {
    alert("Hey");
  }
}

$(document).ready(function() {
  Trackr.initialize();
});
