class Api::BaseController < ApplicationController
  respond_to :csv, :json
end
