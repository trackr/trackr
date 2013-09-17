class Task < ActiveRecord::Base
  attr_accessible :category_id, :name, :user

  belongs_to :category, :counter_cache => true
  belongs_to :user

  has_many :task_entries

  validates_presence_of :name
  validates_uniqueness_of :name, :scope => [:category_id, :user_id]
end
