class AddIdToTaskEntries < ActiveRecord::Migration
  def change
    add_column :task_entries, :id, :primary_key
  end
end
