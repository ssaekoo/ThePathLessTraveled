class CreateTreks < ActiveRecord::Migration
  def change
    create_table :treks do |t|
      t.string  :title,       null: false
      t.integer :location_id, default: 0
      t.string  :location
      t.integer :author_id,   null: false
      t.string  :description, null: false
      t.integer :start_elv
      t.integer :peak_elv
      t.string  :elv_measure
      t.integer :duration
      t.string  :dur_measure
      t.integer :length
      t.string  :len_measure
      t.integer :last_edited, default: 0
      t.timestamps null: false
    end

    add_index :treks, :location_id
    add_index :treks, :author_id
  end
end
