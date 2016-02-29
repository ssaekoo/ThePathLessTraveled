# == Schema Information
#
# Table name: treks
#
#  id          :integer          not null, primary key
#  title       :string           not null
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

require 'test_helper'

class TrekTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
