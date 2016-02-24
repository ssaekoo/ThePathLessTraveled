class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer   :user_id,     null: false
      t.integer   :trek_id,     null: false
      t.string    :title,       null: false
      t.text      :body,        null: false
      t.float     :rating,      default: 1
      t.float     :difficulty,  default: 1
      t.timestamps null: false
    end

    add_index :reviews, :user_id
    add_index :reviews, :trek_id
  end
end
