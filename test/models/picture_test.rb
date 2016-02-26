# == Schema Information
#
# Table name: pictures
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  trek_id    :integer          not null
#  primary    :integer          default(0), not null
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class PictureTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
