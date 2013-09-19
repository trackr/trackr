App.Views.TaskEntries = Backbone.View.extend({
  template: HandlebarsTemplates['dr/task_entries'],
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
