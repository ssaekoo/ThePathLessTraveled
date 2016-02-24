# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  trek_id    :integer          not null
#  title      :string           not null
#  body       :text             not null
#  rating     :float            default(0.0)
#  difficulty :float            default(0.0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ActiveRecord::Base
  validates :user_id, :trek_id, :title, :body, presence: true
  validates :rating, inclusion: { in: (1..5) }
  validates :difficulty, inclusion: { in: (1..5) }
  validates :trek, presence: true

  belongs_to :user
  belongs_to :trek
end
