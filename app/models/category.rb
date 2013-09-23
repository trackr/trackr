class Category < ActiveRecord::Base
  attr_accessible :name

  has_many :tasks
  belongs_to :user

  validates_presence_of :name

end
