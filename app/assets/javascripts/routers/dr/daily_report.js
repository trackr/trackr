App.Routers.DR.DailyReport = Backbone.Router.extend({
  routes: {
    "": "index"
  },
  index: function() {
    this.layoutViews();
    this.contentView.swapMain(new App.Views.DR.TaskEntries({collection: new App.Collections.DR.TaskEntries(JSON.parse(gon.task_entries)) }));
    this.contentView.swapFigure(new App.Views.DR.ChartJSDaily({render_data: new App.DataWrapper.DR.TaskEntries(JSON.parse(gon.task_entries)) }));
  },
  initialize: function() {
    this.headerView = new App.Views.DR.Header();
    this.contentView = new App.Views.DR.Content();
  },
  layoutViews: function() {
    $('#header').html(this.headerView.render().el);
    $('#content').html(this.contentView.render().el);
  }
});
