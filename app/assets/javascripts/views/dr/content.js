App.Views.DR.Content = Backbone.View.extend({
  className: "row",
  template: HandlebarsTemplates['dr/content'],
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  swapMain: function(v) {
    this.changeCurrentMainView(v);
    this.$('#main-area').html(this.currentMainView.render().el);
  },
  changeCurrentMainView: function(v) {
    if (this.currentMainView != null) {
      this.currentMainView.leave();
    }
    this.currentMainView = v;
  },
  swapFigure: function(v) {
    this.changeCurrentFigureView(v);
    this.$('#figure-area').html(this.currentFigureView.render().el);
  },
  changeCurrentFigureView: function(v) {
    if (this.currentFigureView != null) {
      this.currentFigureView.leave();
    }
    this.currentFigureView = v;
  }
});
