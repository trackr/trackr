App.Routers.DailyReport = Backbone.Router.extend({
  routes: {
    "": "index"
  },
  index: function() {
    this.layoutViews();
    this.contentView.swapMain(new App.Views.TaskEntries({collection: App.Collections.TaskEntries}));
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
