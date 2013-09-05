class MoveUserAssociationFromCategoryToTaskEntry < ActiveRecord::Migration
  def change
    remove_column :categories, :user_id

    add_column :task_entries, :user_id, :integer
    add_index :task_entries, :user_id
  end
end
