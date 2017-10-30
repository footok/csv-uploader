require 'rails_helper'
require 'spec_helper'
include ActionDispatch::TestProcess

describe Record do
  before :each do
    @file = fixture_file_upload('/files/test.csv', 'text/csv')
  end

  describe "#import" do
    it "import csv file to database" do
      Record.import(@file)
      expect(Record.first.name).to eq 'Paul'
    end
  end

  describe "#import" do
    it "order table by given column name" do
      Record.import(@file)
      expect(Record.order_by("name ASC").first.name).to eq 'Abcdefg'
      expect(Record.order_by("name DESC").first.name).to eq 'William'
    end
  end
end
