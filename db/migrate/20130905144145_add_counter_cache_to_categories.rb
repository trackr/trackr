class AddCounterCacheToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :tasks_count, :integer
  end
end
