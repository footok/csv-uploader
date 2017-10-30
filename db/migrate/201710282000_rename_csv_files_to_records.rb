class RenameCsvFilesToRecords < ActiveRecord::Migration[5.1]
  def change
      rename_table('csv_files', 'records')
  end
end
