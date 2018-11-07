class MathTestsController < ApplicationController
  before_action :set_math_test, only: [:show, :update, :destroy]

  # GET /tests
  def index
    @mathtests = MathTest.all
    render json: @mathtests
  end

  # GET /tests/1
  def show
    render json: @mathtest
  end

  # POST /tests
  def create
    @mathtest = MathTest.new(math_test_params)
    if @mathtest.save
      render json: @mathtest, status: :created, location: @mathtest
    else
      render json: @mathtest.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tests/1
  def update
    if @mathtest.update(math_test_params)
      render json: @mathtest
    else
      render json: @mathtest.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tests/1
  def destroy
    @mathtest.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set__math_test
      @mathtest = MathTest.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def math_test_params
      params.fetch(:mathtest, {})
    end
end
