class AddColorToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :color, :string, :null => false, :default => '#333333'
  end
end
