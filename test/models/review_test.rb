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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
