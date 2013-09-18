//= require_self
//= require_tree ./mixins
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./views
//= require_tree ./routers

window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Vent: _.clone(Backbone.Events),
  initialize: function() {
    if ($('.js-daily-report-page').length > 0) {
      new App.Routers.DailyReport();
      Backbone.history.start();
    } else {
      console.log('not daily report page');
    }
  }
}

$(document).ready(function() {
  App.initialize();
});
