# == Schema Information
#
# Table name: treks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  location_id :integer          default(0)
#  location    :string
#  author_id   :integer          not null
#  description :string           not null
#  start_elv   :integer
#  peak_elv    :integer
#  elv_measure :string
#  duration    :integer
#  dur_measure :string
#  length      :integer
#  len_measure :string
#  last_edited :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Trek < ActiveRecord::Base
  validates :title, :location_id, :author_id, :description, presence: true

  has_many :reviews
  belongs_to :user,
    foreign_key: :author_id,
    class_name: 'Trek'

  def average_rating
    reviews.average(:rating)
  end

  def total_reviews
    reviews.count
  end
end
