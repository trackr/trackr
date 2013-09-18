class MainController < ApplicationController
  respond_to :json

  before_filter :authenticate_user!

  def dashboard
    redirect_to daily_path
  end

  def daily
    @date = Date.today
    @task_entries = TaskEntry.with_task_for_user(current_user)
                             .with_date(@date)
                             .with_category
                             .decreasing_duration
                             .selected_cols
    gon.task_entries = @task_entries.to_json
  end
end
