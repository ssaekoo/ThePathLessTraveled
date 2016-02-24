class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.integer       :author_id, null: false
      t.integer       :trek_id, null: false
      t.integer       :primary, null: false, default: 0
      t.string        :url, null: false
      t.timestamps    null: false
    end
    add_index :pictures, :author_id
    add_index :pictures, :trek_id
  end
end
