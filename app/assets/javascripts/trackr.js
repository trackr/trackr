//define(['jquery','underscore','backbone', 'app/routers/daily_report'], function(
//         $, _, Backbone, Routers_DailyReport) {
define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var Routers_DailyReport = require('app/routers/daily_report');

  return {
    initialize: function() {
      if ($('.js-daily-report-page').length > 0) {
        new Routers_DailyReport();
      } else {
        $('#main-container').append('<div>not daily report page</div>');
      }
      Backbone.history.start();
    }
  };
});
