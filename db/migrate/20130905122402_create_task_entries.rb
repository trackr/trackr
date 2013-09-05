class CreateTaskEntries < ActiveRecord::Migration
  def change
    create_table :task_entries, :id => false do |t|
      t.integer :duration_in_minutes
      t.date :date
      t.integer :task_id

      t.timestamps
    end

    add_index :task_entries, :task_id
  end
end
