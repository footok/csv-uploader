class Api::RecordController < Api::BaseController
  skip_before_action :verify_authenticity_token

  def index
    render :json => Record.all
  end

  def create
    Record.import(params[:file])
    redirect_to :action => 'index'
    #respond_with Record.create(record_params)
  end

  private

  def record_params
    params.require(:record).permit(:id, :name, :date, :number, :description)
  end
end
