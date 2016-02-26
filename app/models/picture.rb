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

class Picture < ActiveRecord::Base
  belongs_to :trek
  belongs_to :user,
    foreign_key: :author_id,
    class_name: 'Picture'
end
