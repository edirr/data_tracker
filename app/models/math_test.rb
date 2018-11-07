class MathTest < ApplicationRecord
  belongs_to :student
  scope :by_student_id, -> (student_id) { where student_id: student_id }
end
