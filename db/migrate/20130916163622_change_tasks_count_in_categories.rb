class ChangeTasksCountInCategories < ActiveRecord::Migration
  def change
    remove_column :categories, :tasks_count
    add_column :categories, :tasks_count, :integer, :default => 0, :null => false
  end
end
