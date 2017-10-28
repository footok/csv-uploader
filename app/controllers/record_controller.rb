class RecordController < ApplicationController
  def list
    @records = Record.all
  end

  def create
    @record = Record.new(params)
  end
end
