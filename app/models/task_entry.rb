class TaskEntry < ActiveRecord::Base
  attr_accessible :date, :duration_in_minutes, :task_id

  belongs_to :task
  belongs_to :user

  validates_presence_of :date
end
