class MainController < ApplicationController
  respond_to :json

  before_filter :authenticate_user!

  def dashboard
    month, day, year = Time.now.strftime('%D').split '/'
    redirect_to daily_report_path({:year => year, :month => month, :day => day})
  end

  def daily_report
    begin
      @date = Date.strptime "#{params[:month]}/#{params[:day]}/#{params[:year]}", "%m/%d/%y"
    rescue
      render :file => 'public/404.html', :status => :not_found, :layout => false
    end

    @task_entries = TaskEntry.for_user(current_user)
                             .with_date(@date)
                             .decreasing_duration
  end

  def daily
    @date = Date.today
    @task_entries = TaskEntry.with_task_for_user(current_user)
                             .with_date(@date)
                             .with_category
                             .decreasing_duration
                             .selected_cols
  end
end
