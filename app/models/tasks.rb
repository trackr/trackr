class Tasks < ActiveRecord::Base
  attr_accessible :category_id, :name

  belongs_to :category, :counter_cache => true
  delegate :user, :to => :category

  validates_presence_of :name
  validates_uniqueness_of :name, :scope => [:category_id, :user_id]
end
