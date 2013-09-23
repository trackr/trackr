App.Models.DR.TaskEntry = Backbone.Model.extend({
  urlRoot: "api/v1/task_entries"
});

App.Collections.DR.TaskEntries = Backbone.Collection.extend({
  model: App.Models.DR.TaskEntry,
  url: "api/v1/daily/task_entries"
});
