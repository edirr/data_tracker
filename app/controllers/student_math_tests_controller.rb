class StudentMathTestsController < MathTestsController
  before_action :set_math_test, only: [:index]

  def index
    render json: @mathtests
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_math_test
      @mathtests = MathTest.by_student_id params[:student_id]
    end

    # Only allow a trusted parameter "white list" through.
    def math_test_params
      params.permit(:math_test_name, :date, :grade, :student_id)
    end
end
