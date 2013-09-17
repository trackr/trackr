define(function(require) {
  var $ = require('jquery'),
      _ = require('underscore'),
      Backbone = require('backbone'),
      Tmpl_DailyContent = require('hbs!app/templates/daily_content');

  var Views_DailyContent = Backbone.View.extend({
    template: Tmpl_DailyContent,
    render: function() {
      this.$el.html(this.template({myvar: 'hey'}));
      return this;
    }
  });

  return Views_DailyContent;
});
