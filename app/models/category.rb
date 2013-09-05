class Category < ActiveRecord::Base
  attr_accessible :name, :user

  belongs_to :user
  has_many :tasks

  validates_presence_of :name
  validates_uniqueness_of :name, :scope => :user_id
end
