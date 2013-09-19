App.Views.Header = Backbone.View.extend({
  className: "row",
  template: HandlebarsTemplates['header'],
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
