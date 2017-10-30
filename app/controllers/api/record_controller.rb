class Api::RecordController < Api::BaseController

  def index
    respond_with @records = Record.all
  end

  def order
    respond_with Record.order_by(params[:column])
  end

  def create
    Record.import(params[:file])
    redirect_to root_url, notice: "CSV imported"
  end
end
