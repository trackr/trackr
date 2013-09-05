class TaskEntry < ActiveRecord::Base
  attr_accessible :date, :duration_in_minutes, :task_id

  belongs_to :task
  belongs_to :user

  scope :decreasing_duration, order('duration_in_minutes DESC')

  validates_presence_of :date, :duration_in_minutes

  class << self
    def for_user(user)
      where(user: user)
    end

    def with_date(date)
      where(date: date)
    end
  end
end
