require 'rails_helper'
require 'spec_helper'

RSpec.describe Api::RecordController, type: :controller do
  before :each do
    @file = fixture_file_upload('/files/test.csv', 'text/csv')
  end

  describe "#Get index" do
    it "return response status 200 and assigns @records" do
      record = Record.create
      get :index, format: :json
      expect(response.status).to eq(200)
      expect(assigns(:records)).to eq([record])
    end
  end

  describe "#Get order" do
    it "return response status 200" do
      get :order, format: :json
      expect(response.status).to eq(200)
    end
  end

  describe "#Post create" do
    it "pass @file as a param and return response status 302" do
      post :create, format: :json, :params => {:file => @file}
      expect(response).to redirect_to('/')
      expect(response.status).to eq(302)
    end
  end
end
