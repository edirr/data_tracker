class User < ApplicationRecord
  belongs_to :user
  scope :by_user_id, -> (user_id) { where user_id: user_id }
end
