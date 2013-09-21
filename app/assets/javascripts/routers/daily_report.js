App.Routers.DailyReport = Backbone.Router.extend({
  routes: {
    "": "index"
  },
  index: function() {
    this.layoutViews();
    this.contentView.swapMain(new App.Views.TaskEntries({collection: new App.Collections.TaskEntries(JSON.parse(gon.task_entries)) }));
    this.contentView.swapFigure(new App.Views.ChartJSDaily({render_data: new App.DataWrapper.TaskEntries(JSON.parse(gon.task_entries)) }));
  },
  initialize: function() {
    this.headerView = new App.Views.Header();
    this.contentView = new App.Views.Content();
  },
  layoutViews: function() {
    $('#header').html(this.headerView.render().el);
    $('#content').html(this.contentView.render().el);
  }
});
