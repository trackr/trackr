class Api::V1::TaskEntriesController < ApplicationController
  before_filter :authenticate_user!
  respond_to :json

  def daily
    begin
      @date = Date.strptime "#{params[:month]}/#{params[:day]}/#{params[:year]}", "%m/%d/%y"
    rescue
      @date = Date.today
    end

    @task_entries = TaskEntry.with_task_for_user(current_user)
                             .with_date(@date)
                             .with_category
                             .decreasing_duration
                             .selected_cols
  end
end
