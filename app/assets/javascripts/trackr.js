define(['jquery','underscore','backbone', 'app/routers/daily_report'], function(
         $, _, Backbone, App_Routers_DailyReport) {
  window.App = {
  //  Routers: {},
  //  Views: {},
  //  Collections: {},
  //  Models: {},
    Vent: _.clone(Backbone.Events),
  //  Mixins: {}
  }

  return {
    initialize: function() {
      if ($('.js-daily-report-page').length > 0) {
        $('#main-container').append('<div>daily report page</div>');
        new App_Routers_DailyReport();
      } else {
        $('#main-container').append('<div>not daily report page</div>');
      }
      Backbone.history.start();
    }
  };
});
