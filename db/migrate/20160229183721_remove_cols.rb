class RemoveCols < ActiveRecord::Migration
  def change
    remove_column :pictures, :primary

    remove_column :treks, :location
  end
end
