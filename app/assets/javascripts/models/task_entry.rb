App.Models.TaskEntry = Backbone.Model.extend({
  urlRoot: "api/v1/task_entries"
});

App.Collections.TaskEntries = Backbone.Collection.extend({
  model: App.Models.TaskEntry
  #url: "api/v1/daily/task_entries"
});
