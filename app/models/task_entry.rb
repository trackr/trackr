class TaskEntry < ActiveRecord::Base
  attr_accessible :date, :duration_in_minutes, :task_id

  belongs_to :task
  belongs_to :user
  delegate :category, :to => :task

  scope :decreasing_duration, order('duration_in_minutes DESC')

  validates_presence_of :date, :duration_in_minutes

  class << self
    def with_task_for_user(user)
      joins(:task).where("tasks.user_id = ?", user)
    end

    def with_category
      joins("inner join categories on categories.id = tasks.category_id")
    end

    def with_date(date)
      where(date: date)
    end

    def selected_cols
      select("task_entries.id, task_entries.duration_in_minutes,task_entries.date, tasks.name as task_name,
              categories.name as category_name")
    end
  end
end
