class MoveUserAssociationToTask < ActiveRecord::Migration
  def up
    remove_column :task_entries, :user_id, :null => false, :default => ''

    add_column :tasks, :user_id, :integer
    add_index :tasks, :user_id
  end

  def down
    add_column :task_entries, :user_id, :integer
    add_index :task_entries, :user_id

    remove_column :tasks, :user_id
  end
end
