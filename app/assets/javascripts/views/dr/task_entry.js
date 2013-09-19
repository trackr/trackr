App.Views.TaskEntry = Backbone.View.extend({
  template: HandlebarsTemplates['dr/task_entry'],
  initialize: function() {
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON() ));
    return this;
  }
});
