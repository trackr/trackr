App.Views.Content = Backbone.View.extend({
  //template: HandlebarsTemplates['views/content'],
  render: function() {
    this.$el.html('<div>content here</div>');
    return this;
  }
});
