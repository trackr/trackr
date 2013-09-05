class MainController < ApplicationController
  before_filter :authenticate_user!

  def dashboard
    month, day, year = Time.now.strftime('%D').split '/'
    redirect_to daily_report(:year => year, :month => month, :day => day)
  end

  def daily_report
    begin
      @date = Date.parse "#{params[:month].to_i}/#{params[:day].to_i}/#{params[:year].to_i}"
    rescue
      redirect_to root_path
    end

    @task_entries = TaskEntry.for_user(current_user)
  end
end
