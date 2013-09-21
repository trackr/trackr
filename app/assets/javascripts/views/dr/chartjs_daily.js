App.Views.ChartJSDaily = Backbone.View.extend({
  template: HandlebarsTemplates['dr/chartjs_daily'],
  render: function() {
    this.$el.html(this.template());
    var ctx = this.$el.find('#dailyPieChart').get(0).getContext("2d");
    var pie_chart = new Chart(ctx).Pie(this.options.render_data);
    return this;
  }
});
