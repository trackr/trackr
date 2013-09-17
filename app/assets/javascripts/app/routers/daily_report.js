define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var Views_Header = require('app/views/header');
  var Views_DailyContent = require('app/views/daily_content');

  var Routers_DailyReport = Backbone.Router.extend({
    routes: {
      "" : "showDailyTaskEntry"
    },
    showDailyTaskEntry: function() {
      this.layoutViews();
    },
    initialize: function() {
      this.headerView = new Views_Header();
      this.contentView = new Views_DailyContent();
    },
    layoutViews: function() {
      $('#header').html(this.headerView.render().el);
      $('#content').html(this.contentView.render().el);
    }
  });
  return Routers_DailyReport;
});
