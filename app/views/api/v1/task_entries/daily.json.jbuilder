json.array! @task_entries do |te|
  json.name te.task_name
  json.category_name te.category_name
  json.duration_in_min te.duration_in_minutes
  json.date te.date.strftime('%m/%d/%y')
end
