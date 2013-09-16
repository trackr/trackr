class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me

  has_many :tasks
  has_many :categories

  def has_existing_category(category)
    scoped_categories = []
    tasks.map { |task| scoped_categories << task.try(:category).try(:name) }
    scoped_categories.uniq!
    scoped_categories.include? category
  end
end
