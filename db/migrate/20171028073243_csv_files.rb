class CsvFiles < ActiveRecord::Migration[5.1]
  def change
    create_table :csv_files do |t|
      t.column :name, :string
      t.column :date, :date
      t.column :number, :integer
      t.column :description, :string
    end
  end
end
