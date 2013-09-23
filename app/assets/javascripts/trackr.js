//= require_self
//= require_tree ./datawrapper
//= require_tree ./mixins
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./views
//= require_tree ./routers

window.App = {
  Models: {
    DR: {}
  },
  Collections: {
    DR: {}
  },
  Views: {
    DR: {}
  },
  Routers: {
    DR: {}
  },
  DataWrapper: {
    DR: {}
  },
  Vent: _.clone(Backbone.Events),
  initialize: function() {
    if ($('.js-daily-report-page').length > 0) {
      new App.Routers.DR.DailyReport();
      Backbone.history.start();
    } else {
      console.log('not daily report page');
    }
  }
}

$(document).ready(function() {
  App.initialize();
});
