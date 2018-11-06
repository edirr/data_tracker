class StudentTestsController < TestsController
  before_action :set_test, only: [:index]

  def index
    render json: @tests
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_test
      @tests = Test.by_student_id params[:student_id]
    end

    # Only allow a trusted parameter "white list" through.
    def test_params
      params.permit(:test_name, :date, :grade, :student_id)
    end
end
