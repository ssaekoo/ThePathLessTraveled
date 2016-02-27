class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.integer :trek_id,  null: false
      t.string :trek_name, null: false
      t.string :country,   null: false
      t.string :city,      null: false
      t.float :latitude,   null: false
      t.float :longitude,  null: false
      t.timestamps null: false
    end

    add_index :locations, :trek_id
  end
end
