App.Views.DR.Header = Backbone.View.extend({
  className: "row",
  template: HandlebarsTemplates['dr/header'],
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
