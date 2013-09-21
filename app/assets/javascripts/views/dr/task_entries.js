App.Views.TaskEntries = Backbone.View.extend({
  template: HandlebarsTemplates['dr/task_entries'],
  initialize: function() {
    this.childViews = [];
    //this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'add', this.renderTaskEntry);
  },
  render: function() {
    this.$el.html(this.template({date: gon.date}));
    this.collection.forEach(this.renderTaskEntry, this);
    return this;
  },
  renderTaskEntry: function(model) {
    var v = new App.Views.TaskEntry({model: model });
    this.childViews.push(v);
    this.$('ul').append(v.render().el);
  }
});
