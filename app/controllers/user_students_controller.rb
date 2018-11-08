class UserStudentsController < StudentsController
  before_action :set_student, only: [:index]

  def index
    render json: @students
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_test
      @students = Student.by_user_id params[:user_id]
    end

    # Only allow a trusted parameter "white list" through.
    def test_params
      params.permit(:name, :age, :address, :user_id)
    end
end
