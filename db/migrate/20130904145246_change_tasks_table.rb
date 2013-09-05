class ChangeTasksTable < ActiveRecord::Migration
  def up
    add_column :tasks, :duration_in_minutes, :integer, :null => false
  end

  def down
  end
end
