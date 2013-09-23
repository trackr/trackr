class MainController < ApplicationController
  respond_to :json

  before_filter :authenticate_user!

  def dashboard
    redirect_to daily_path
  end

  def daily
    @task_entries = TaskEntry.generate_query({user: current_user, date: Date.today })
    gon.task_entries = @task_entries.to_json
    gon.date = Date.today
  end
end
