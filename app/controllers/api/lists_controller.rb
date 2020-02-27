
class Api::ListsController < ApplicationController


  def create
    @list = List.new(list_params)
    board = Board.find(params[:board_id])
    @list.board_id = board.id

    if @list.save
      render :create, status: :created
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
        @error = "Invalid board data provided"
        render 'api/shared/error', status: 404
  rescue ActionController::ParameterMissing
    @error = "Invalid list data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def update

  end

  private

  def list_params
    params.require(:list).permit(:title)
  end

end