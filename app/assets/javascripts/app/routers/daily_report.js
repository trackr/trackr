define(['jquery','underscore','backbone'], function(
  $, _, Backbone) {
  var App_Routers_DailyReport = Backbone.Router.extend({
    routes: {
      "" : "showDailyTaskEntry"
    },
    showDailyTaskEntry: function() {

    }
  });
  return App_Routers_DailyReport;
});
