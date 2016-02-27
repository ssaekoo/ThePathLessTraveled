# == Schema Information
#
# Table name: locations
#
#  id         :integer          not null, primary key
#  trek_id    :integer          not null
#  trek_name  :string           not null
#  country    :string           not null
#  city       :string           not null
#  latitude   :float            not null
#  longitude  :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
